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

const Table = () => {
  const [dice, setDice] = useState<[number, number]>([0, 0]);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [isRollButtonDisabled, setIsRollButtonDisabled] =
    useState<boolean>(true);
  const [selectedBuild, setSelectedBuild] = useState<Builds>("SETTLEMENT");
  const players = useMemo(() => {
    return ["#bb0000", "#00bb00"];
  }, []);
  const [gameRound, setGameRound] =
    useState<number>(0);
  const [instructionText, setInstructionText] = useState<string>(
    "Player 1: Place a Settlement",
  );

  const onClickBuild = (build: Builds) => {
    setSelectedBuild(build);
  };

  const setDiceToRandom = () => {
    setDice([getRandomInt(6) + 1, getRandomInt(6) + 1]);
  };
  const currPlayerIndex = Math.floor((gameRound % (2 * 2)) / 2) % players.length;

  const initialBuildPhaseStep = () => {
    // num stages = # players * # rounds * 2 (1 city build and 1 road build)
    const totalRounds = players.length * 2 * 2;
    setGameRound((prevRound) => {
      const newRound = prevRound + 1;
      const playerIndex = Math.floor((newRound % (2 * 2)) / 2) % players.length;
      if (newRound >= totalRounds) {
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
            if (gameRound > players.length * 2 * 2) {
              setSelectedBuild("");
              return;
            }
            initialBuildPhaseStep();
          }}
          numberRolled={isRolling ? 0 : dice[0] + dice[1]}
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
          }}
        >
          <h2>{instructionText}</h2>
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
        >
          Road
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={() => onClickBuild("SETTLEMENT")}
        >
          Settlement
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={() => onClickBuild("CITY")}
        >
          City
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={() => onClickBuild("DEVELOPMENT_CARD")}
        >
          Development Card
        </Button>
        <Button
          fullWidth
          variant="contained"
          onClick={() => onClickBuild("")}
          disabled={selectedBuild === ""}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Table;
