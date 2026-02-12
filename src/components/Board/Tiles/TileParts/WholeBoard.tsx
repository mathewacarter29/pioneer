import type { Builds } from "../../Board";
import type {
  EdgeInfo,
  HexInfo,
  TileColorType,
  VertexInfo,
} from "../constants";

interface GameBoardProps {
  tileColors: TileColorType[];
  hexes: HexInfo[];
  edges: EdgeInfo[];
  vertices: VertexInfo[];
  selectedBuild: Builds;
}

const WholeBoard = (props: GameBoardProps) => {
  const { tileColors, hexes, edges, vertices, selectedBuild } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      id="svg1"
      width="708.939"
      height="656.33"
      version="1.1"
      viewBox="0 0 187.574 173.654"
    >
      <g
        id="HEXES"
        fillOpacity="1"
        fillRule="nonzero"
        strokeWidth="0.265"
        transform="translate(-88.623 -103.52)"
      >
        {/* Hexes */}
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
            cy={vertex.cy}
            cx={vertex.cx}
            r={vertex.r}
            style={{ opacity: selectedBuild === "SETTLEMENT" ? 1 : 0.3 }}
          />
        ))}
      </g>
    </svg>
  );
};

export default WholeBoard;
