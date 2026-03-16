import type { Builds, Player } from "../../Table";
import {
  type TileColorType,
  type NumberSvgInfo,
  UNSELECTED_BUILD_COLOR,
  type VertexSvgInfo,
  type PathSvgInfo,
  type HexSvgInfo,
  BOARD_HEIGHT,
  MIN_BOARD_DIMENSIONS,
} from "../../../constants";
import classes from "./BoardSvg.module.css";

interface BoardSvgProps {
  hexes: Record<string, HexInfo>;
  edges: EdgeInfo[];
  vertices: Record<string, VertexInfo>;
  selectedBuild?: Builds;
  buildVertex: (vertexIndex: string) => void;
  buildRoad: (edgeIndex: number) => void;
  currPlayer: Player;
  hexOnClick: (hexKey: string) => void;
}

export interface VertexInfo {
  svgInfo: VertexSvgInfo;
  isSettlement: boolean;
  isCity: boolean;
  owner?: Player;
}

export interface EdgeInfo {
  svgInfo: PathSvgInfo;
  selected: boolean;
  owner?: Player;
}

export interface HexInfo {
  hexSvgInfo: HexSvgInfo;
  color: TileColorType;
  isHighlighted: boolean;
  numberSvgInfo?: NumberSvgInfo;
  hasRobber: boolean;
  isClickable: boolean;
}

export interface NumberInfo {
  numberInfo: NumberSvgInfo;
  index: number;
  transform?: string;
}

const BoardSvg = (props: BoardSvgProps) => {
  const { hexes, edges, vertices, selectedBuild = "", buildVertex, buildRoad, currPlayer, hexOnClick } = props;
  const textStyle: React.CSSProperties = {
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    fontStretch: "normal",
    fontSize: "12.7px",
    fontFamily: "Krungthep",
    fontVariantLigatures: "normal",
    fontVariantCaps: "normal",
    fontVariantNumeric: "normal",
    fontVariantEastAsian: "normal",
    direction: "ltr",
    strokeWidth: 1,
    strokeDasharray: "none",
    strokeOpacity: 0.997409,
  };
  const tspanStyle: React.CSSProperties = {
    fontStyle: "normal",
    fontVariant: "normal",
    fontWeight: "normal",
    fontStretch: "normal",
    fontSize: "12.7px",
    fontFamily: "Krungthep",
    fontVariantLigatures: "normal",
    fontVariantCaps: "normal",
    fontVariantNumeric: "normal",
    fontVariantEastAsian: "normal",
    strokeWidth: 1,
  };
  const circleStyle: React.CSSProperties = {
    fill: "none",
    strokeWidth: 1,
    strokeDasharray: "none",
    strokeOpacity: 0.997409,
  };

  const canBuildCity = (vertex: VertexInfo) => {
    return selectedBuild === "CITY" && vertex.owner?.id == currPlayer.id;
  };

  const canBuildRoad = (road: EdgeInfo) => {
    return selectedBuild === "ROAD" && !road.selected;
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg1"
      version="1.1"
      viewBox="0 0 188.574 176.047"
      style={{
        width: "40vw",
        minWidth: MIN_BOARD_DIMENSIONS,
        height: BOARD_HEIGHT,
        minHeight: MIN_BOARD_DIMENSIONS,
      }}
    >
      {Object.entries(hexes).map(([key, hex]) => {
        const color = hex.numberSvgInfo?.number === 6 || hex.numberSvgInfo?.number === 8 ? "#da0000" : "black";
        return (
          <g key={key}>
            {/* HEXES */}
            <g
              id="HEXES"
              fillOpacity="1"
              fillRule="nonzero"
              strokeWidth="0.265"
              transform="translate(-87.357237,-102.32365)"
            >
              <path
                id="HEX"
                d={hex.hexSvgInfo.pathInfo.d}
                transform={hex.hexSvgInfo.pathInfo.transform}
                fill={hex.color}
                filter={hex.isHighlighted ? "brightness(140%)" : "none"}
                className={hex.isClickable ? classes.flashHex : ""}
                style={{ pointerEvents: hex.isClickable ? "inherit" : "none" }}
                onClick={() => hexOnClick(key)}
              />
            </g>
            {/* NUMBERS */}
            {hex.numberSvgInfo && (
              <g transform="translate(1.2661766,1.1964232)">
                <g id="NUMBER" transform={hex.hexSvgInfo.numberTransform} onClick={() => hexOnClick(key)}>
                  <circle
                    style={{ ...circleStyle, stroke: color }}
                    cx={hex.numberSvgInfo.circleInfo.cx}
                    cy={hex.numberSvgInfo.circleInfo.cy}
                    r={hex.numberSvgInfo.circleInfo.r}
                  />
                  <text
                    xmlSpace="preserve"
                    style={{ ...textStyle, fill: color, stroke: color }}
                    x={hex.numberSvgInfo.textInfo.x}
                    y={hex.numberSvgInfo.textInfo.y}
                  >
                    <tspan
                      style={{
                        ...tspanStyle,
                        fill: color,
                      }}
                      x={hex.numberSvgInfo.tspanInfo.x}
                      y={hex.numberSvgInfo.tspanInfo.y}
                    >
                      {hex.numberSvgInfo.number}
                    </tspan>
                  </text>
                </g>
              </g>
            )}
            {/* ROBBER */}
            {hex.hasRobber && <path d={hex.hexSvgInfo.robberSvgInfo.d} />}
          </g>
        );
      })}
      {/* ROADS */}
      <g id="EDGES" fill="#000" strokeWidth="0.265" transform="translate(-87.357237,-102.32365)">
        {edges.map((edge, i) => {
          return (
            <path
              key={i}
              id="EDGE"
              d={edge.svgInfo.d}
              transform={edge.svgInfo.transform}
              style={{
                opacity: selectedBuild === "ROAD" || edge.selected ? 1 : 0.3,
                fill: edge.owner?.color ?? UNSELECTED_BUILD_COLOR,
                pointerEvents: canBuildRoad(edge) ? "inherit" : "none",
              }}
              className={canBuildRoad(edge) ? classes.flashSvg : ""}
              onClick={() => buildRoad(i)}
            />
          );
        })}
      </g>
      {Object.entries(vertices).map(([index, vertex]) => {
        // CITIES
        if (vertex.isCity) {
          return (
            <g transform="translate(.766)" key={index}>
              <g id="CITY" style={{ opacity: 1, fill: vertex.owner?.color ?? UNSELECTED_BUILD_COLOR }}>
                <path d={vertex.svgInfo.citySvgInfo.d}></path>
              </g>
            </g>
          );
        }
        // SETTLEMENTS
        if (vertex.isSettlement) {
          return (
            <g transform="translate(1.2661766,1.1964232)" key={index}>
              <g
                id="SETTLEMENT"
                style={{
                  opacity: 1,
                  fill: vertex.owner?.color ?? UNSELECTED_BUILD_COLOR,
                  pointerEvents: canBuildCity(vertex) ? "inherit" : "none",
                }}
                className={canBuildCity(vertex) ? classes.flashSvg : ""}
                onClick={() => buildVertex(index)}
              >
                <path d={vertex.svgInfo.settlementSvgInfo.d}></path>
              </g>
            </g>
          );
        }
        // UNSETTLED
        return (
          // not a city or settlement yet
          <g id="VERTICES" strokeWidth="0.265" transform="translate(-87.357237,-102.32365)" key={index}>
            <circle
              key={index}
              cy={vertex.svgInfo.unsettledSvgInfo.cy}
              cx={vertex.svgInfo.unsettledSvgInfo.cx}
              r={vertex.svgInfo.unsettledSvgInfo.r}
              style={{
                opacity: selectedBuild === "SETTLEMENT" ? 1 : 0.3,
                fill: vertex.owner?.color ?? UNSELECTED_BUILD_COLOR,
                pointerEvents: selectedBuild === "SETTLEMENT" ? "inherit" : "none",
              }}
              className={selectedBuild === "SETTLEMENT" ? classes.flashSvg : ""}
              onClick={() => buildVertex(index)}
            />
          </g>
        );
      })}
    </svg>
  );
};

export default BoardSvg;
