import {
  DEFAULT_TILES,
  type TileColorType,
  DEFAULT_NUM_TILES,
  DEFAULT_HEXES,
  DEFAULT_EDGES,
  DEFAULT_VERTICES,
} from "./constants";
import { useState, useEffect } from "react";
import type { Builds } from "../Board";
import PlayingArea from "./TileParts/PlayingArea";

interface TilesProps {
  selectedBuild: Builds;
}

const Tiles = (props: TilesProps) => {
  const { selectedBuild } = props;

  interface TileInfo {
    tileColor: TileColorType;
  }

  const [tiles, setTiles] = useState<TileInfo[]>([]);

  useEffect(() => {
    const tileRows = getRows(DEFAULT_NUM_TILES);
    setTiles(tileRows);
  }, []);

  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  const getTileTypes = (numTiles: number): TileColorType[] => {
    // get a copy of the tiles array
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

  const getRows = (numTiles: number): TileInfo[] => {
    let tileColors: TileInfo[] = [];
    let tileTypes = getTileTypes(numTiles);
    for (let rowIndex = 0; rowIndex < numTiles; rowIndex++) {
      const index = getRandomInt(tileTypes.length);
      const color = tileTypes[index];
      const tileInfo = {
        tileColor: color,
      };
      tileColors.push(tileInfo);
      tileTypes.splice(index, 1);
    }
    return tileColors;
  };

  return (
    <PlayingArea
      tileColors={tiles.map((tile) => tile.tileColor)}
      hexes={DEFAULT_HEXES}
      edges={DEFAULT_EDGES}
      vertices={DEFAULT_VERTICES}
      selectedBuild={selectedBuild}
    />
  );
};

export default Tiles;
