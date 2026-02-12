import type { Builds } from "../../Table";
import type {
  EdgeSvgInfo,
  HexSvgInfo,
  TileColorType,
  VertexSvgInfo,
} from "../constants";

interface BoardSvgProps {
  hexes: HexInfo[];
  edges: EdgeInfo[];
  vertices: VertexInfo[];
  selectedBuild: Builds;
  buildSettlement: (vertexIndex: number) => void;
  buildRoad: (edgeIndex: number) => void;
}

export interface VertexInfo {
  svgInfo: VertexSvgInfo;
  selected: boolean;
}

export interface EdgeInfo {
  svgInfo: EdgeSvgInfo;
  selected: boolean;
}

export interface HexInfo {
  svgInfo: HexSvgInfo;
  color: TileColorType;
}

const BoardSvg = (props: BoardSvgProps) => {
  const { hexes, edges, vertices, selectedBuild, buildSettlement, buildRoad } =
    props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg1"
      width="708.939"
      height="656.33"
      version="1.1"
      viewBox="0 0 187.574 173.654"
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
          />
        ))}
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
              pointerEvents: selectedBuild === "SETTLEMENT" ? "inherit" : "none",
            }}
            onClick={() => buildSettlement(i)}
          />
        ))}
      </g>
    </svg>
  );
};

export default BoardSvg;
