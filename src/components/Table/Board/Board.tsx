import {
  DEFAULT_TILES,
  type TileColorType,
  DEFAULT_HEXES,
  DEFAULT_EDGES,
  DEFAULT_VERTICES,
  type CircleSvgInfo,
  type EdgeSvgInfo,
  type HexSvgInfo,
  type NumberSvgInfo,
  DEFAULT_NUMBERS,
  DEFAULT_NUMBER_TRANSFORMS,
  TILE_COLORS,
  TILE_FLASH_DURATION,
} from "../../constants";
import { useState, useEffect } from "react";
import type { Builds } from "../../Table/Table";
import BoardSvg, {
  type EdgeInfo,
  type HexInfo,
  type NumberInfo,
  type VertexInfo,
} from "./BoardSvg/BoardSvg";
import { getRandomInt } from "../../../utils/numbers";

interface TilesProps {
  selectedBuild: Builds;
  onBuild: () => void;
  numberRolled: number;
}

/**
 * Board component that renders the game board with hexes, vertices, and edges.
 * @param props The properties for the Board component.
 * @returns The Board component.
 */
const Board = (props: TilesProps) => {
  const { selectedBuild, onBuild, numberRolled } = props;

  const [hexes, setHexes] = useState<HexInfo[]>([]);
  const [vertices, setVertices] = useState<VertexInfo[]>([]);
  const [edges, setEdges] = useState<EdgeInfo[]>([]);
  const [numbers, setNumbers] = useState<NumberInfo[]>([]);

  useEffect(() => {
    const coloredHexes = getTiles(DEFAULT_HEXES);
    setHexes(coloredHexes);
    setVertices(getVertices(DEFAULT_VERTICES));
    setEdges(getEdges(DEFAULT_EDGES));
    // pass in hexes to figure out the index of the desert tile and don't put a number there
    setNumbers(
      getNumbers(DEFAULT_NUMBERS, DEFAULT_NUMBER_TRANSFORMS, coloredHexes),
    );
  }, []);

  useEffect(() => {
    if (numberRolled === 0) {
      return;
    }
    // find the hexes with the rolled number
    const rolledIndexes = numbers
      .filter((num) => num.numberInfo.number === numberRolled)
      .map((num) => num.index);
    setHexes((prevHexes) =>
      prevHexes.map((hex) => ({
        ...hex,
        isHighlighted: rolledIndexes.includes(hex.index),
      })),
    );
    setTimeout(() => {
      setHexes((prevHexes) =>
        prevHexes.map((hex) => ({
          ...hex,
          isHighlighted: false,
        })),
      );
    }, TILE_FLASH_DURATION);
  }, [numberRolled]);

  /**
   * Generates an array of NumberInfo objects based on the provided number information, transforms, and hexes.
   * @param numbersSvgInfo The base number information.
   * @param transforms The transforms for each number.
   * @param hexes The hexes on the board.
   * @returns An array of NumberInfo objects.
   */
  const getNumbers = (
    numbersSvgInfo: NumberSvgInfo[],
    transforms: [number, string | undefined][],
    hexes: HexInfo[],
  ): NumberInfo[] => {
    // remove the transform for any desert tiles
    const desertTiles = hexes.filter((hex) => hex.color === TILE_COLORS.DESERT);
    const availableTransforms = transforms.filter(
      ([index, _]) =>
        !desertTiles.some((desertTile) => desertTile.index === index),
    );
    if (
      numbersSvgInfo.length !== transforms.length &&
      numbersSvgInfo.length + desertTiles.length !== hexes.length
    ) {
      throw new Error(
        "The number of numbers, transforms, and hexes must be the same.",
      );
    }
    const shuffledTransforms = shuffle(availableTransforms);
    return numbersSvgInfo.map(
      (numberInfo, i): NumberInfo => ({
        numberInfo,
        index: shuffledTransforms[i][0],
        transform: shuffledTransforms[i][1],
      }),
    );
  };

  /**
   * Generates an array of VertexInfo objects based on the provided vertex information.
   * @param baseVerticesInfo The base vertex information.
   * @returns An array of VertexInfo objects.
   */
  const getVertices = (baseVerticesInfo: CircleSvgInfo[]): VertexInfo[] => {
    return baseVerticesInfo.map((vertex) => ({
      svgInfo: vertex,
      selected: false,
    }));
  };

  /**
   * Generates an array of EdgeInfo objects based on the provided edge information.
   * @param baseEdgesInfo The base edge information.
   * @returns An array of EdgeInfo objects.
   */
  const getEdges = (baseEdgesInfo: EdgeSvgInfo[]): EdgeInfo[] => {
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
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  };

  /**
   * Generates an array of HexInfo objects with randomized colors.
   * @param baseHexInfo The base hex information.
   * @returns An array of HexInfo objects with assigned colors.
   */
  const getTiles = (baseHexInfo: [number, HexSvgInfo][]): HexInfo[] => {
    let tileColors = getTileTypes(baseHexInfo.length);
    if (tileColors.length < baseHexInfo.length) {
      throw new Error(
        "Not enough tile colors provided for the number of hexes.",
      );
    }
    tileColors = shuffle(tileColors);
    return baseHexInfo.map(([index, hex], i) => ({
      svgInfo: hex,
      color: tileColors[i],
      index: index,
      isHighlighted: false,
    }));
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
  const buildSettlement = (vertexIndex: number) => {
    setVertices((prevVertices) =>
      prevVertices.map((vertex, i) =>
        i === vertexIndex ? { ...vertex, selected: true } : vertex,
      ),
    );
    onBuild();
  };

  /**
   * Marks an edge as selected to indicate a road has been built.
   * @param edgeIndex The index of the edge to select.
   */
  const buildRoad = (edgeIndex: number) => {
    setEdges((prevEdges) =>
      prevEdges.map((edge, i) =>
        i === edgeIndex ? { ...edge, selected: true } : edge,
      ),
    );
    onBuild();
  };

  return (
    <BoardSvg
      hexes={hexes}
      edges={edges}
      vertices={vertices}
      numbers={numbers}
      selectedBuild={selectedBuild}
      buildSettlement={buildSettlement}
      buildRoad={buildRoad}
    />
  );
};

export default Board;
