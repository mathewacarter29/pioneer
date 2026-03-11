import {
  DEFAULT_TILES,
  type TileColorType,
  DEFAULT_HEXES,
  DEFAULT_EDGES,
  DEFAULT_VERTICES,
  type NumberSvgInfo,
  DEFAULT_NUMBERS,
  TILE_COLORS,
  TILE_FLASH_DURATION,
  type VertexSvgInfo,
  type PathSvgInfo,
  type HexSvgInfo,
} from "../../constants";
import { useState, useEffect } from "react";
import type { Builds, Player } from "../../Table/Table";
import BoardSvg, { type EdgeInfo, type HexInfo, type VertexInfo } from "./BoardSvg/BoardSvg";
import { getRandomInt } from "../../../utils/numbers";

interface BoardProps {
  selectedBuild: Builds;
  onBuild: () => void;
  numberRolled: number;
  currPlayer: Player;
}

/**
 * Board component that renders the game board with hexes, vertices, and edges.
 * @param props The properties for the Board component.
 * @returns The Board component.
 */
const Board = (props: BoardProps) => {
  const { selectedBuild, onBuild, numberRolled, currPlayer } = props;

  const [hexes, setHexes] = useState<Record<string, HexInfo>>({});
  const [vertices, setVertices] = useState<Record<string, VertexInfo>>({});
  const [edges, setEdges] = useState<EdgeInfo[]>([]);

  useEffect(() => {
    // dont shuffle the tiles, shuffle the colors
    const coloredHexes = getTiles(DEFAULT_HEXES, DEFAULT_NUMBERS);
    setHexes(coloredHexes);
    setVertices(getVertices(DEFAULT_VERTICES));
    setEdges(getEdges(DEFAULT_EDGES));
  }, []);

  useEffect(() => {
    if (numberRolled === 0) {
      return;
    }
    const hexKeys = Object.keys(hexes);
    // find the hexes with the rolled number
    const rolledIndexes = hexKeys.reduce((accumulator, key) => {
      if (hexes[key].numberSvgInfo?.number === numberRolled) {
        accumulator.push(key);
      }
      return accumulator;
    }, [] as string[]);

    if (numberRolled === 7) {
      // move the robber
      /**
       * TODO make so tiles available to put a robber on flash
       * on tile click, move robber to that tile
       * dont teleport it, make it slide across the screen to it's spot? (REACH)
       */
      // find the current hex with the robber
      const robberIndex = hexKeys.find((i) => hexes[i].hasRobber);
      if (!robberIndex) {
        throw new Error("Could not find robber hex upon rolling a 7");
      }
      // make all available tiles flash
      setHexes(
        hexKeys.reduce(
          (acc, key) => {
            if (key !== robberIndex) {
              acc[key] = { ...hexes[key], isClickable: true };
            } else {
              acc[key] = { ...hexes[key] };
            }
            return acc;
          },
          {} as Record<string, HexInfo>,
        ),
      );
      // in the tile onclick, set old tile to not have robber and new tile to have robber
    } else {
      // set rolled tiles as highlighted
      const rolledTiles = rolledIndexes.reduce(
        (acc, key) => {
          acc[key] = { ...hexes[key], isHighlighted: true };
          return acc;
        },
        {} as Record<string, HexInfo>,
      );
      setHexes((prevHexes) => ({
        ...prevHexes,
        ...rolledTiles,
      }));
      setTimeout(() => {
        setHexes((prevHexes) =>
          hexKeys.reduce(
            (acc, key) => {
              acc[key] = { ...prevHexes[key], isHighlighted: false };
              return acc;
            },
            {} as Record<string, HexInfo>,
          ),
        );
      }, TILE_FLASH_DURATION);
    }
  }, [numberRolled]);

  const moveRobberHere = (clickedHexKey: string) => {
    const hexKeys = Object.keys(hexes);
    // when a hex is clicked after a 7 is rolled, change the location of the robber to the given key
    const robberIndex = hexKeys.find((i) => hexes[i].hasRobber);
    if (!robberIndex) {
      throw new Error("Could not find robber hex after click");
    }
    setHexes(
      hexKeys.reduce(
        (acc, key) => {
          if (key === robberIndex) {
            // make this not the robber hex anymore
            acc[key] = { ...hexes[key], isClickable: false, hasRobber: false };
          } else if (key === clickedHexKey) {
            // new robber hex
            acc[key] = { ...hexes[key], isClickable: false, hasRobber: true };
          } else {
            acc[key] = { ...hexes[key], isClickable: false };
          }
          return acc;
        },
        {} as Record<string, HexInfo>,
      ),
    );
  };

  /**
   * Generates an array of VertexInfo objects based on the provided vertex information.
   * @param baseVerticesInfo The base vertex information.
   * @returns An array of VertexInfo objects.
   */
  const getVertices = (baseVerticesInfo: Record<string, VertexSvgInfo>): Record<string, VertexInfo> => {
    let vertices: Record<string, VertexInfo> = {};
    for (const key in baseVerticesInfo) {
      vertices[key] = {
        svgInfo: baseVerticesInfo[key],
        isSettlement: false,
        isCity: false,
      };
    }
    return vertices;
  };

  /**
   * Generates an array of EdgeInfo objects based on the provided edge information.
   * @param baseEdgesInfo The base edge information.
   * @returns An array of EdgeInfo objects.
   */
  const getEdges = (baseEdgesInfo: PathSvgInfo[]): EdgeInfo[] => {
    return baseEdgesInfo.map((edge) => ({
      svgInfo: edge,
      selected: false,
    }));
  };

  /**
   * Taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   * @param array The array to shuffle
   * @returns The shuffled array
   */
  const shuffle = <T,>(array: T[]): T[] => {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
  };

  /**
   * Generates an array of HexInfo objects with randomized colors.
   * @param baseHexInfo The base hex information.
   * @returns An array of HexInfo objects with assigned colors.
   */
  const getTiles = (baseHexInfo: Record<string, HexSvgInfo>, numbers: NumberSvgInfo[]): Record<string, HexInfo> => {
    // first, get tile colors
    const hexKeys = Object.keys(baseHexInfo);
    let tileColors = getTileTypes(hexKeys.length);
    if (tileColors.length !== hexKeys.length) {
      throw new Error("Not enough tile colors provided for the number of hexes.");
    }
    tileColors = shuffle(tileColors);
    // next, get numbers for each tile
    const desertTileIndexes = tileColors.reduce((accumulator, element, index) => {
      if (element === TILE_COLORS.DESERT) {
        accumulator.push(index);
      }
      return accumulator;
    }, [] as number[]);
    if (hexKeys.length - desertTileIndexes.length !== numbers.length) {
      throw new Error("Not enough numbers for the number of hexes.");
    }
    const shuffledNumbers = shuffle(numbers);
    // return tile info
    let numberIndex = 0;
    let tiles: Record<string, HexInfo> = {};
    let isRobberPlaced = false;
    for (const key in hexKeys) {
      let hasRobber = false;
      const index = Number(key);
      if (index === Number.NaN) {
        throw new Error("Invalid hex key - all keys should be integers representing this hex's index on the board");
      }
      const tileColor = tileColors[index]; // asserted earlier that tileColors and hexKeys have same length
      let tileNumber = undefined;
      if (!desertTileIndexes.includes(index)) {
        // if this tile is not a desert, add a number
        tileNumber = shuffledNumbers[numberIndex];
        numberIndex++;
      } else {
        // if this is a desert, add a robber
        if (!isRobberPlaced) {
          hasRobber = true;
          isRobberPlaced = true;
        }
      }
      tiles[key] = {
        hexSvgInfo: baseHexInfo[key],
        color: tileColor,
        isHighlighted: false,
        numberSvgInfo: tileNumber,
        hasRobber: hasRobber,
        isClickable: false,
      };
    }
    return tiles;
  };

  /**
   * Generates an array of TileColorType objects based on the number of tiles needed.
   * @param numTiles The number of tiles to generate.
   * @returns An array of TileColorType objects.
   */
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

  /**
   * Marks a vertex as selected to indicate a settlement has been built.
   * @param vertexIndex The index of the vertex to select.
   */
  const buildVertex = (vertexIndex: string) => {
    if (selectedBuild === "SETTLEMENT") {
      setVertices((prevVertices) => ({
        ...prevVertices,
        [vertexIndex]: {
          ...prevVertices[vertexIndex],
          isSettlement: true,
          owner: currPlayer,
        },
      }));
    } else if (selectedBuild === "CITY") {
      setVertices((prevVertices) => ({
        ...prevVertices,
        [vertexIndex]: {
          ...prevVertices[vertexIndex],
          isCity: true,
          owner: currPlayer,
        },
      }));
    }
    onBuild();
  };

  /**
   * Marks an edge as selected to indicate a road has been built.
   * @param edgeIndex The index of the edge to select.
   */
  const buildRoad = (edgeIndex: number) => {
    setEdges((prevEdges) =>
      prevEdges.map((edge, i): EdgeInfo => (i === edgeIndex ? { ...edge, selected: true, owner: currPlayer } : edge)),
    );
    onBuild();
  };

  return (
    <BoardSvg
      hexes={hexes}
      edges={edges}
      vertices={vertices}
      selectedBuild={selectedBuild}
      buildVertex={buildVertex}
      buildRoad={buildRoad}
      currPlayer={currPlayer}
      hexOnClick={moveRobberHere}
    />
  );
};

export default Board;
