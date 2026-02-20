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
} from "./constants";
import { useState, useEffect } from "react";
import type { Builds } from "../Table";
import PlayingArea, {
  type EdgeInfo,
  type HexInfo,
  type NumberInfo,
  type VertexInfo,
} from "./BoardSvg/BoardSvg";

interface TilesProps {
  selectedBuild: Builds;
  onBuild: () => void;
}

/**
 * Board component that renders the game board with hexes, vertices, and edges.
 * @param props The properties for the Board component.
 * @returns The Board component.
 */
const Board = (props: TilesProps) => {
  const { selectedBuild, onBuild } = props;

  const [hexes, setHexes] = useState<HexInfo[]>([]);
  const [vertices, setVertices] = useState<VertexInfo[]>([]);
  const [edges, setEdges] = useState<EdgeInfo[]>([]);
  const [numbers, setNumbers] = useState<(NumberInfo | undefined)[]>([]);

  useEffect(() => {
    const coloredHexes = getTiles(DEFAULT_HEXES);
    setHexes(coloredHexes.map(([_, hex]) => hex));
    setVertices(getVertices(DEFAULT_VERTICES));
    setEdges(getEdges(DEFAULT_EDGES));
    setNumbers(
      getNumbers(DEFAULT_NUMBERS, DEFAULT_NUMBER_TRANSFORMS, coloredHexes),
    );
  }, []);

  /**
   * Generates a random integer between 0 (inclusive) and the specified maximum (exclusive).
   * @param max The maximum value (exclusive) for the random integer.
   * @returns A random integer between 0 and max - 1.
   */
  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  const getNumbers = (
    numbersSvgInfo: NumberSvgInfo[],
    transforms: [number, string | undefined][],
    hexes: [number, HexInfo][],
  ): (NumberInfo | undefined)[] => {
    if (
      numbersSvgInfo.length + 1 !== transforms.length &&
      numbersSvgInfo.length + 1 !== hexes.length
    ) {
      throw new Error(
        "The number of numbers, transforms, and hexes must be the same.",
      );
    }
    // remove the transform for any desert tiles
    const desertTiles = hexes.filter(
      ([_, hex]) => hex.color === TILE_COLORS.DESSERT,
    );
    const availableTransforms = transforms.filter(
      ([index, _]) =>
        !desertTiles.some(([desertIndex, _]) => desertIndex === index),
    );
    const shuffledTransforms = shuffle(availableTransforms);
    return numbersSvgInfo.map((numberInfo, i): NumberInfo | undefined => ({
      numberInfo,
      transform: shuffledTransforms[i][1],
    }));
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
  const getTiles = (
    baseHexInfo: [number, HexSvgInfo][],
  ): [number, HexInfo][] => {
    let tileColors = getTileTypes(baseHexInfo.length);
    if (tileColors.length < baseHexInfo.length) {
      throw new Error(
        "Not enough tile colors provided for the number of hexes.",
      );
    }
    tileColors = shuffle(tileColors);
    return baseHexInfo.map(([index, hex], i) => [
      index,
      {
        svgInfo: hex,
        color: tileColors[i],
      },
    ]);
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
    <PlayingArea
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
