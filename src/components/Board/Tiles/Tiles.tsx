import {
  DEFAULT_TILES,
  TILE_EDGES,
  TILE_BORDER_WIDTH,
  type TileColorType,
  type TileEdgeNames,
  type TileVertexNames,
  TILE_VERTICES,
} from "./constants";
import Tile from "./Tile/Tile";
import { useRef, useState, useEffect, type JSX } from "react";

const Tiles = () => {
  const [rows, setRows] = useState<JSX.Element[][]>([]);
  const [height, setHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref !== null && ref.current !== null && ref.current.clientHeight) {
      setHeight(ref.current.clientHeight);
    }
  });

  useEffect(() => {
    const tileRows = getRows(3, 5);
    setRows(tileRows);
  }, []);

  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  const getTileTypes = (
    startingRowLength: number,
    maxRowLength: number
  ): TileColorType[] => {
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

  const getShownEdges = (
    row: number,
    col: number,
    maxRows: number,
    tilesInRow: number
  ): TileEdgeNames[] => {
    let result = JSON.parse(JSON.stringify(TILE_EDGES));
    if (col > 0) {
      delete result.LEFT_SIDE;
    }
    if (row > maxRows / 2 || (row > 0 && col != tilesInRow - 1)) {
      delete result.TOP_RIGHT_SIDE;
    }
    if (row < maxRows - 1 && (row <= maxRows / 2 - 1 || col < tilesInRow - 1)) {
      delete result.BOTTOM_RIGHT_SIDE;
    }
    return Object.values(result);
  };

  const getShownVertices = (
    row: number,
    col: number,
    maxRows: number,
    tilesInRow: number
  ): TileVertexNames[] => {
    let result = JSON.parse(JSON.stringify(TILE_VERTICES));
    if (col > 0) {
      // left side vertices
      delete result.VERTEX_EIGHT;
      delete result.VERTEX_TEN;
    }
    if (row > maxRows / 2 || (row > 0 && col != tilesInRow - 1)) {
      // top right side vertices
      delete result.VERTEX_TWELVE;
      delete result.VERTEX_TWO;

    }
    if (row < maxRows - 1 && (row <= maxRows / 2 - 1 || col < tilesInRow - 1)) {
      // bottom right side vertices
      delete result.VERTEX_FOUR;
      delete result.VERTEX_SIX;
    }
    return Object.values(result);
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
    let rowIndex = 0;
    for (
      let numTiles = startingRowLength;
      numTiles >= startingRowLength;
      numTiles = increment(numTiles, shouldIncrease)
    ) {
      let row = [];
      for (let i = 0; i < numTiles; i++) {
        const index = getRandomInt(tileTypes.length);
        const color = tileTypes[index];
        const shownEdges = getShownEdges(
          rowIndex,
          i,
          (maxRowLength - startingRowLength) * 2 + 1,
          numTiles
        );
        const shownVertices = getShownVertices(
          rowIndex,
          i,
          (maxRowLength - startingRowLength) * 2 + 1,
          numTiles
        );
        row.push(
          <div
            key={`row${numTiles - startingRowLength}tile${i}`}
            style={{ marginRight: `-${TILE_BORDER_WIDTH}px` }}
          >
            <Tile
              tileColor={color}
              shownEdges={shownEdges}
              shownVertices={shownVertices}
            />
          </div>
        );
        tileTypes.splice(index, 1);
      }
      rows.push(row);
      if (numTiles == maxRowLength) {
        shouldIncrease = false;
      }
      rowIndex++;
    }
    return rows;
  };

  return (
    <div>
      {rows.map((row, index) => {
        return (
          <div
            key={`row${index}`}
            ref={ref}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: `-${height * 0.25 + TILE_BORDER_WIDTH}px`,
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
