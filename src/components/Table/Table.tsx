import { useMemo, useState } from "react";
import Board from "./Board/Board";
import { Button } from "@mui/material";
import { getRandomInt } from "../../utils/numbers";
import Die from "./Die/Die";
import {
  BOARD_HEIGHT,
  BOTTOM_BUTTON_DIV_HEIGHT,
  MIN_BOARD_DIMENSIONS,
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
  const [isRollButtonDisabled, setIsRollButtonDisabled] =
    useState<boolean>(true);
  const [selectedBuild, setSelectedBuild] = useState<Builds>("SETTLEMENT");
  const players = useMemo<Player[]>(() => {
    return [{ color: "#bb0000" }, { color: "#00bb00" }];
    // return [{ color: "#bb0000" }, { color: "#00bb00" }, { color: "#0000bb" }];
  }, []);
  const [gameRound, setGameRound] = useState<number>(0);
  const [instructionText, setInstructionText] = useState<string>(
    "Player 1: Place a Settlement",
  );

  const getPlayerIndex = (
    round: number,
    numPlayers: number,
    numInitialPhaseRounds: number,
  ) => {
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
  const currPlayerIndex = getPlayerIndex(
    gameRound,
    players.length,
    totalInitialBuildRounds,
  );
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
      const playerIndex = getPlayerIndex(
        newRound,
        players.length,
        totalInitialBuildRounds,
      );
      if (newRound >= totalInitialBuildRounds) {
        // if this round is more than totalRounds, play the regular game
        setSelectedBuild("");
        setInstructionText("Player 1: Roll the dice");
        setIsRollButtonDisabled(false);
      } else if (newRound % 2 === 1) {
        // if this round is odd, we are building a road
        setSelectedBuild("ROAD");
        setInstructionText(`Player ${playerIndex + 1}: Build a Road`);
      } else {
        // if even, we are building a settlement
        setSelectedBuild("SETTLEMENT");
        setInstructionText(`Player ${playerIndex + 1}: Build a Settlement`);
      }
      return newRound;
    });
  };

  const onRollDice = () => {
    setIsRolling(true);
    setIsRollButtonDisabled(true);
    // cycle through dice numbers
    let timerId = setInterval(() => {
      setDiceToRandom();
    }, 100);
    setTimeout(() => {
      clearInterval(timerId);
      setIsRolling(false);
      setGameRound((prev) => prev + 1);
      setTimeout(() => {
        setIsRollButtonDisabled(false);
      }, TILE_FLASH_DURATION);
    }, ROLL_DURATION);
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
            <h4>
              {isInitialBuildPhase
                ? "Initial Build Phase"
                : `Round ${gameRound - totalInitialBuildRounds + 1}`}
            </h4>
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
              disabled={isRollButtonDisabled}
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
        <Button
          fullWidth
          variant="contained"
          onClick={() => onClickBuild("ROAD")}
          disabled={isInitialBuildPhase}
          style={
            selectedBuild === "ROAD" && gameRound >= totalInitialBuildRounds
              ? { ...selectedButtonStyle }
              : undefined
          }
        >
          Road
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={() => onClickBuild("SETTLEMENT")}
          disabled={isInitialBuildPhase}
          style={
            selectedBuild === "SETTLEMENT" && gameRound >= totalInitialBuildRounds
              ? { ...selectedButtonStyle }
              : undefined
          }
        >
          Settlement
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={() => onClickBuild("CITY")}
          disabled={isInitialBuildPhase}
          style={
            selectedBuild === "CITY" && gameRound >= totalInitialBuildRounds
              ? { ...selectedButtonStyle }
              : undefined
          }
        >
          City
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={() => onClickBuild("DEVELOPMENT_CARD")}
          disabled={isInitialBuildPhase}
          style={
            selectedBuild === "DEVELOPMENT_CARD" && gameRound >= totalInitialBuildRounds
              ? { ...selectedButtonStyle }
              : undefined
          }
        >
          Development Card
        </Button>
      </div>
    </div>
  );
};

export default Table;
