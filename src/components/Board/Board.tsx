import { useState } from "react";
import Tiles from "./Tiles/Tiles";
import { Button } from "@mui/material";

export type Builds = "ROAD" | "CITY" | "SETTLEMENT" | "DEVELOPMENT_CARD" | "";

const Board = () => {
  const [selectedBuild, setSelectedBuild] = useState<Builds>("");

  const onClickBuild = (build: Builds) => {
    setSelectedBuild(build);
  };

  return (
    <div>
      <Tiles selectedBuild={selectedBuild} />
      <div
        style={{
          margin: "auto",
          display: "flex",
          justifyContent: "space-around",
          gap: "1vw",
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
          disabled={selectedBuild === ''}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Board;
