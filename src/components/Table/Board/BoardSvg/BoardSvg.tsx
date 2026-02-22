import type { Builds } from "../../Table";
import type {
  EdgeSvgInfo,
  HexSvgInfo,
  TileColorType,
  CircleSvgInfo,
  NumberSvgInfo,
} from "../constants";

interface BoardSvgProps {
  hexes: HexInfo[];
  edges: EdgeInfo[];
  vertices: VertexInfo[];
  numbers: (NumberInfo | undefined)[];
  selectedBuild: Builds;
  buildSettlement: (vertexIndex: number) => void;
  buildRoad: (edgeIndex: number) => void;
}

export interface VertexInfo {
  svgInfo: CircleSvgInfo;
  selected: boolean;
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
    buildSettlement,
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
      style={{width: '40vw', minWidth: '600px'}}
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
        {edges.map((edge, i) => (
          <path
            key={i}
            id="EDGE"
            d={edge.svgInfo.d}
            transform={edge.svgInfo.transform}
            style={{
              opacity: selectedBuild === "ROAD" || edge.selected ? 1 : 0.3,
              fill: edge.selected ? "red" : "black",
              pointerEvents: selectedBuild === "ROAD" ? "inherit" : "none",
            }}
            onClick={() => buildRoad(i)}
          />
        ))}
      </g>
      {/* SETTLEMENTS */}
      <g
        id="VERTICES"
        fill="#000"
        strokeWidth="0.265"
        transform="translate(-88.623 -103.52)"
      >
        {vertices.map((vertex, i) => (
          <circle
            key={i}
            id="VERTEX"
            cy={vertex.svgInfo.cy}
            cx={vertex.svgInfo.cx}
            r={vertex.svgInfo.r}
            style={{
              opacity:
                selectedBuild === "SETTLEMENT" || vertex.selected ? 1 : 0.3,
              fill: vertex.selected ? "red" : "black",
              pointerEvents:
                selectedBuild === "SETTLEMENT" ? "inherit" : "none",
            }}
            onClick={() => buildSettlement(i)}
          />
        ))}
      </g>
    </svg>
  );
};

export default BoardSvg;
