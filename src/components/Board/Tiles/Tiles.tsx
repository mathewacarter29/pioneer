import { DEFAULT_TILES } from "./constants";
import Tile from "./Tile/Tile";
import { useRef, useState, useEffect } from "react";

const Tiles = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref !== null && ref.current !== null && ref.current.clientHeight) {
      setHeight(ref.current.clientHeight);
    }
  });

  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  const getTileTypes = (
    startingRowLength: number,
    maxRowLength: number
  ): string[] => {
    // get the number of tiles
    let numTiles = startingRowLength * 2;
    for (let i = startingRowLength + 1; i < maxRowLength; i++) {
      numTiles += i * 2;
    }
    numTiles += maxRowLength;
    // get the correct number of tiles to play with
    let startingTiles = DEFAULT_TILES.slice(0, DEFAULT_TILES.length);
    if (numTiles <= startingTiles.length) {
      // fewer/equal to the default number of tiles
      return startingTiles.slice(0, numTiles);
    }
    // need more tiles
    while (startingTiles.length < numTiles) {
      startingTiles.push(DEFAULT_TILES[getRandomInt(DEFAULT_TILES.length)]);
    }
    return startingTiles;
  };

  const getRows = (startingRowLength: number, maxRowLength: number) => {
    if (startingRowLength >= maxRowLength) {
      throw new Error(
        "starting rows must be less than max row length to create board"
      );
    }

    let rows = [];
    let shouldIncrease = true;
    const increment = (i: number, shouldIncrease: boolean): number => {
      if (shouldIncrease) {
        return i + 1;
      }
      return i - 1;
    };
    let tileTypes = getTileTypes(startingRowLength, maxRowLength);
    for (
      let numTiles = startingRowLength;
      numTiles >= startingRowLength;
      numTiles = increment(numTiles, shouldIncrease)
    ) {
      let row = [];
      for (let i = 0; i < numTiles; i++) {
        const index = getRandomInt(tileTypes.length);
        const color = tileTypes[index];
        row.push(<Tile tileColor={color} key={`row${numTiles - startingRowLength}tile${i}`}/>);
        tileTypes.splice(index, 1);
      }
      rows.push(row);
      if (numTiles == maxRowLength) {
        shouldIncrease = false;
      }
    }
    return rows;
  };

  return (
    <div>
      {getRows(3, 5).map((row, index) => {
        return (
          <div
            key={`row${index}`}
            ref={ref}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: `-${height * 0.25}px`,
            }}
          >
            {row}
          </div>
        );
      })}
    </div>
  );
};

export default Tiles;
