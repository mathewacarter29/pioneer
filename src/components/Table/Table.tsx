import { useEffect, useRef, useState } from "react";
import Board from "./Board/Board";
import { Button } from "@mui/material";
import { getRandomInt } from "../../utils/numbers";
import Die from "./Die/Die";
import {
  ROLL_DURATION,
  TILE_FLASH_DURATION,
} from "../constants";

export type Builds = "ROAD" | "CITY" | "SETTLEMENT" | "DEVELOPMENT_CARD" | "";

const Table = () => {
  const [dice, setDice] = useState<[number, number]>([0, 0]);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [isRollButtonDisabled, setIsRollButtonDisabled] = useState<boolean>(false);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref !== null && ref.current !== null) {
      if (ref.current.clientHeight) {
        setHeight(ref.current.offsetHeight);
      }
    }
  });
  const [selectedBuild, setSelectedBuild] = useState<Builds>("");

  const onClickBuild = (build: Builds) => {
    setSelectedBuild(build);
  };

  const setDiceToRandom = () => {
    setDice([getRandomInt(6) + 1, getRandomInt(6) + 1]);
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
      }, TILE_FLASH_DURATION)
    }, ROLL_DURATION);
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "end" }}>
        <Board
          selectedBuild={selectedBuild}
          onBuild={() => setSelectedBuild("")}
          numberRolled={isRolling ? 0 : dice[0] + dice[1]}
        />
        <div style={{ marginLeft: "2vw" }}>
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
      <div style={{ height: height, marginBottom: "2vh" }} />
      <div
        ref={ref}
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
