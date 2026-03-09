import { useMemo, useState } from "react";
import Board from "./Board/Board";
import { Button } from "@mui/material";
import { getRandomInt } from "../../utils/numbers";
import Die from "./Die/Die";
import {
  BOARD_HEIGHT,
  BOTTOM_BUTTON_DIV_HEIGHT,
  MIN_BOARD_DIMENSIONS,
  PLAYER_BUILD_TEXT,
  PLAYER_ROAD_TEXT,
  PLAYER_ROLL_TEXT,
  PLAYER_SETTLEMENT_TEXT,
  ROLL_DURATION,
  TILE_FLASH_DURATION,
} from "../constants";

export type Builds = "ROAD" | "CITY" | "SETTLEMENT" | "DEVELOPMENT_CARD" | "";

export interface Player {
  color: string;
}

const Table = () => {
  const [dice, setDice] = useState<[number, number]>([0, 0]);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [selectedBuild, setSelectedBuild] = useState<Builds>("SETTLEMENT");
  const players = useMemo<Player[]>(() => {
    return [{ color: "#bb0000" }, { color: "#00bb00" }];
    // return [{ color: "#bb0000" }, { color: "#00bb00" }, { color: "#0000bb" }];
  }, []);
  const [gameRound, setGameRound] = useState<number>(0);
  const [instructionText, setInstructionText] = useState<string>(PLAYER_SETTLEMENT_TEXT.replace("playerNumber", "1"));
  const [isTurnOngoing, setIsTurnOngoing] = useState<boolean>(false);
  const [isFlashing, setIsFlashing] = useState<boolean>(false);

  const getPlayerIndex = (round: number, numPlayers: number, numInitialPhaseRounds: number) => {
    if (round >= numInitialPhaseRounds) {
      // use >= here since game round starts at 0
      return (round - numInitialPhaseRounds) % numPlayers;
    } else if (round < numInitialPhaseRounds / 2) {
      return Math.floor(round / 2) % numPlayers;
    } else {
      return Math.abs(numPlayers - 1 - (Math.floor(round / 2) % numPlayers));
    }
  };

  // num rounds = # players * # rounds * 2 (1 city build and 1 road build)
  const totalInitialBuildRounds = players.length * 2 * 2;
  const currPlayerIndex = getPlayerIndex(gameRound, players.length, totalInitialBuildRounds);
  const isInitialBuildPhase = gameRound < totalInitialBuildRounds;
  const selectedButtonStyle = {
    backgroundColor: "floralwhite",
    color: "black",
  };

  const onClickBuild = (build: Builds) => {
    setSelectedBuild((prev) => {
      return build === prev ? "" : build;
    });
  };

  const setDiceToRandom = () => {
    setDice([getRandomInt(6) + 1, getRandomInt(6) + 1]);
  };

  const initialBuildPhaseStep = () => {
    setGameRound((prevRound) => {
      const newRound = prevRound + 1;
      const playerIndex = getPlayerIndex(newRound, players.length, totalInitialBuildRounds);
      if (newRound >= totalInitialBuildRounds) {
        // if this round is more than totalRounds, play the regular game
        setSelectedBuild("");
        setInstructionText(PLAYER_ROLL_TEXT.replace("playerNumber", "1"));
      } else if (newRound % 2 === 1) {
        // if this round is odd, we are building a road
        setSelectedBuild("ROAD");
        setInstructionText(PLAYER_ROAD_TEXT.replace("playerNumber", (playerIndex + 1).toString()));
      } else {
        // if even, we are building a settlement
        setSelectedBuild("SETTLEMENT");
        setInstructionText(PLAYER_SETTLEMENT_TEXT.replace("playerNumber", (playerIndex + 1).toString()));
      }
      return newRound;
    });
  };

  const onRollDice = () => {
    setIsRolling(true);
    // cycle through dice numbers
    let timerId = setInterval(() => {
      setDiceToRandom();
    }, 100);
    setTimeout(() => {
      clearInterval(timerId);
      setInstructionText(PLAYER_BUILD_TEXT.replace("playerNumber", (currPlayerIndex + 1).toString()));
      setIsRolling(false);
      setIsFlashing(true);
      setTimeout(() => {
        setIsFlashing(false);
        setIsTurnOngoing(true);
      }, TILE_FLASH_DURATION);
    }, ROLL_DURATION);
  };

  const onEndTurn = () => {
    setSelectedBuild("");
    setGameRound((prev) => {
      const nextRound = prev + 1;
      const nextPlayerIndex = getPlayerIndex(nextRound, players.length, totalInitialBuildRounds);
      setInstructionText(PLAYER_ROLL_TEXT.replace("playerNumber", (nextPlayerIndex + 1).toString()));
      return nextRound;
    });
    setIsTurnOngoing(false);
  };

  interface BuildButtonProps {
    buildType: Builds;
    text: string;
  }
  const BuildButton = (props: BuildButtonProps) => {
    return (
      <Button
        fullWidth
        variant="contained"
        onClick={() => onClickBuild(props.buildType)}
        disabled={!isTurnOngoing}
        style={
          selectedBuild === props.buildType && gameRound >= totalInitialBuildRounds
            ? { ...selectedButtonStyle }
            : undefined
        }
      >
        {props.text}
      </Button>
    );
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "end" }}>
        <Board
          selectedBuild={selectedBuild}
          onBuild={() => {
            if (gameRound >= players.length * 2 * 2) {
              setSelectedBuild("");
              return;
            }
            initialBuildPhaseStep();
          }}
          numberRolled={isRolling ? 0 : dice[0] + dice[1]}
          currPlayer={players[currPlayerIndex]}
        />
        <div
          style={{
            marginLeft: "2vw",
            width: "12vw",
            display: "flex",
            flexDirection: "column",
            height: BOARD_HEIGHT,
            minHeight: MIN_BOARD_DIMENSIONS,
            justifyContent: "space-between",
            padding: "5px",
            backgroundColor: "#1a5725",
          }}
        >
          <div>
            <h4>{isInitialBuildPhase ? "Initial Build Phase" : `Round ${gameRound - totalInitialBuildRounds + 1}`}</h4>
          </div>
          <div>
            <h2>{instructionText}</h2>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1vw",
                margin: "1vh",
              }}
            >
              <Die value={dice[0]} isRolling={isRolling} />
              <Die value={dice[1]} isRolling={isRolling} />
            </div>
            <Button
              fullWidth
              variant="contained"
              onClick={() => onRollDice()}
              disabled={isTurnOngoing || isInitialBuildPhase || isRolling || isFlashing}
            >
              Roll Dice
            </Button>
          </div>
        </div>
      </div>
      <div style={{ height: BOTTOM_BUTTON_DIV_HEIGHT, marginBottom: "2vh" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "1vw",
          position: "fixed",
          bottom: "2vh",
          left: 0,
          right: 0,
          width: "60%",
          margin: "auto",
          height: BOTTOM_BUTTON_DIV_HEIGHT,
        }}
      >
        <BuildButton buildType="ROAD" text={"Road"} />
        <BuildButton buildType="SETTLEMENT" text={"Settlement"} />
        <BuildButton buildType="CITY" text={"City"} />
        <BuildButton buildType="DEVELOPMENT_CARD" text={"Development Card"} />
        <Button style={{ visibility: "hidden" }} /> {/* For spacing */}
        <Button
          fullWidth
          variant="contained"
          onClick={() => onEndTurn()}
          disabled={!isTurnOngoing || isInitialBuildPhase || isRolling}
        >
          End Turn
        </Button>
      </div>
    </div>
  );
};

export default Table;
