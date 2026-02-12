import type { Builds } from "../../Table";
import type {
  EdgeSvgInfo,
  HexSvgInfo,
  TileColorType,
  VertexSvgInfo,
} from "../constants";

interface BoardSvgProps {
  tileColors: TileColorType[];
  hexes: HexSvgInfo[];
  edges: EdgeSvgInfo[];
  vertices: VertexInfo[];
  selectedBuild: Builds;
  buildSettlement: (vertexIndex: number) => void;
}

export interface VertexInfo {
  svgInfo: VertexSvgInfo;
  selected: boolean;
}

const BoardSvg = (props: BoardSvgProps) => {
  const { tileColors, hexes, edges, vertices, selectedBuild, buildSettlement } =
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
            d={hex.d}
            transform={hex.transform}
            fill={tileColors[i]}
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
            d={edge.d}
            transform={edge.transform}
            style={{ opacity: selectedBuild === "ROAD" ? 1 : 0.3 }}
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
              opacity: selectedBuild === "SETTLEMENT" || vertex.selected ? 1 : 0.3,
              fill: vertex.selected ? "red" : "black",
            }}
            onClick={() => buildSettlement(i)}
          />
        ))}
      </g>
    </svg>
  );
};

export default BoardSvg;
