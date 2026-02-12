import { useEffect, useRef, useState } from "react";
import Board from "./Board/Board";
import { Button } from "@mui/material";

export type Builds = "ROAD" | "CITY" | "SETTLEMENT" | "DEVELOPMENT_CARD" | "";

const Table = () => {
    const [height, setHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
      if (ref !== null && ref.current !== null) {
        if (ref.current.clientHeight) {
          setHeight(ref.current.clientHeight);
        }
      }
    });
  const [selectedBuild, setSelectedBuild] = useState<Builds>("");

  const onClickBuild = (build: Builds) => {
    setSelectedBuild(build);
  };

  return (
    <div>
      <div style={{ margin: "2vw" }}>
        <Board selectedBuild={selectedBuild} />
      </div>
      <div style={{height: height, marginBottom: "2vh"}}/>
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
