import type { Builds } from "../../Table";
import {
  type EdgeSvgInfo,
  type HexSvgInfo,
  type TileColorType,
  type NumberSvgInfo,
  UNSELECTED_BUILD_COLOR,
  SELECTED_BUILD_COLOR,
  type VertexSvgInfo,
} from "../../../constants";
import classes from "./BoardSvg.module.css";

interface BoardSvgProps {
  hexes: HexInfo[];
  edges: EdgeInfo[];
  vertices: VertexInfo[];
  numbers: (NumberInfo | undefined)[];
  selectedBuild: Builds;
  buildVertex: (vertexIndex: number) => void;
  buildRoad: (edgeIndex: number) => void;
}

export interface VertexInfo {
  svgInfo: VertexSvgInfo;
  isSettlement: boolean;
  isCity: boolean;
}

export interface EdgeInfo {
  svgInfo: EdgeSvgInfo;
  selected: boolean;
}

export interface HexInfo {
  svgInfo: HexSvgInfo;
  color: TileColorType;
  index: number;
  isHighlighted: boolean;
}

export interface NumberInfo {
  numberInfo: NumberSvgInfo;
  index: number;
  transform?: string;
}

const BoardSvg = (props: BoardSvgProps) => {
  const {
    hexes,
    edges,
    vertices,
    numbers,
    selectedBuild,
    buildVertex,
    buildRoad,
  } = props;
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

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg1"
      // width="100%"
      version="1.1"
      viewBox="0 0 187.574 173.654"
      style={{ width: "40vw", minWidth: "600px" }}
    >
      {/* HEXES */}
      <g
        id="HEXES"
        fillOpacity="1"
        fillRule="nonzero"
        strokeWidth="0.265"
        transform="translate(-88.623 -103.52)"
      >
        {hexes.map((hex, i) => (
          <path
            key={i}
            id="HEX"
            d={hex.svgInfo.d}
            transform={hex.svgInfo.transform}
            fill={hex.color}
            filter={hex.isHighlighted ? "brightness(2.0)" : "none"}
          />
        ))}
      </g>
      {/* NUMBERS */}
      <g id="NUMBERS">
        {numbers.map((info, i) => {
          if (!info) {
            return null;
          }
          const color =
            info.numberInfo.number === 6 || info.numberInfo.number === 8
              ? "#da0000"
              : "black";
          return (
            <g id="NUMBER" key={i} transform={info.transform}>
              <circle
                style={{ ...circleStyle, stroke: color }}
                cx={info.numberInfo.circleInfo.cx}
                cy={info.numberInfo.circleInfo.cy}
                r={info.numberInfo.circleInfo.r}
              />
              <text
                xmlSpace="preserve"
                style={{ ...textStyle, fill: color, stroke: color }}
                x={info.numberInfo.textInfo.x}
                y={info.numberInfo.textInfo.y}
              >
                <tspan
                  style={{
                    ...tspanStyle,
                    fill: color,
                  }}
                  x={info.numberInfo.tspanInfo.x}
                  y={info.numberInfo.tspanInfo.y}
                >
                  {info.numberInfo.number}
                </tspan>
              </text>
            </g>
          );
        })}
      </g>
      {/* ROADS */}
      <g
        id="EDGES"
        fill="#000"
        strokeWidth="0.265"
        transform="translate(-88.623 -103.52)"
      >
        {edges.map((edge, i) => {
          const shouldFlash = selectedBuild === "ROAD" && !edge.selected;
          return (
            <path
              key={i}
              id="EDGE"
              d={edge.svgInfo.d}
              transform={edge.svgInfo.transform}
              style={{
                opacity: selectedBuild === "ROAD" || edge.selected ? 1 : 0.3,
                fill: edge.selected
                  ? SELECTED_BUILD_COLOR
                  : UNSELECTED_BUILD_COLOR,
                pointerEvents: selectedBuild === "ROAD" ? "inherit" : "none",
              }}
              className={shouldFlash ? classes.flashSvg : ""}
              onClick={() => buildRoad(i)}
            />
          );
        })}
      </g>
      {/* SETTLEMENTS */}
      {vertices.map((vertex) => {
        let color = UNSELECTED_BUILD_COLOR;
        const canBecomeCity =
          vertex.isSettlement && selectedBuild === "CITY" && !vertex.isCity;
        if (vertex.isCity) {
          color = "blue";
          return (
            <g
              id="VERTICES"
              strokeWidth="0.265"
              transform="translate(-88.623 -103.52)"
              key={vertex.svgInfo.index}
            >
              <circle
                key={vertex.svgInfo.index}
                id="VERTEX"
                cy={vertex.svgInfo.unsettledSvgInfo.cy}
                cx={vertex.svgInfo.unsettledSvgInfo.cx}
                r={vertex.svgInfo.unsettledSvgInfo.r}
                style={{
                  opacity: 1,
                  fill: color,
                  pointerEvents: "none",
                }}
                onClick={() => buildVertex(vertex.svgInfo.index)}
              />
            </g>
          );
        }
        if (vertex.isSettlement) {
          color = SELECTED_BUILD_COLOR;
          return (
            <g
              id="layer3"
              transform="translate(36.709 -.052)"
              key={vertex.svgInfo.index}
            >
              <g
                id="SETTLEMENT"
                transform={vertex.svgInfo.settlementSvgInfo.transform}
                style={{
                  opacity: 1,
                  fill: color,
                  pointerEvents: canBecomeCity ? "inherit" : "none",
                }}
                className={selectedBuild === "CITY" ? classes.flashSvg : ""}
                onClick={() => buildVertex(vertex.svgInfo.index)}
              >
                <path
                  id="BASE"
                  strokeWidth={
                    vertex.svgInfo.settlementSvgInfo.basePaths[0].strokeWidth
                  }
                  d={vertex.svgInfo.settlementSvgInfo.basePaths[0].d}
                ></path>
                <path
                  id="ROOF"
                  strokeWidth={
                    vertex.svgInfo.settlementSvgInfo.basePaths[1].strokeWidth
                  }
                  d={vertex.svgInfo.settlementSvgInfo.basePaths[1].d}
                ></path>
              </g>
            </g>
          );
        }
        return (
          // not a city or settlement yet
          <g
            id="VERTICES"
            strokeWidth="0.265"
            transform="translate(-88.623 -103.52)"
            key={vertex.svgInfo.index}
          >
            <circle
              key={vertex.svgInfo.index}
              id="VERTEX"
              cy={vertex.svgInfo.unsettledSvgInfo.cy}
              cx={vertex.svgInfo.unsettledSvgInfo.cx}
              r={vertex.svgInfo.unsettledSvgInfo.r}
              style={{
                opacity: selectedBuild === "SETTLEMENT" ? 1 : 0.3,
                fill: color,
                pointerEvents:
                  selectedBuild === "SETTLEMENT" ? "inherit" : "none",
              }}
              className={selectedBuild === "SETTLEMENT" ? classes.flashSvg : ""}
              onClick={() => buildVertex(vertex.svgInfo.index)}
            />
          </g>
        );
      })}
    </svg>
  );
};

export default BoardSvg;
