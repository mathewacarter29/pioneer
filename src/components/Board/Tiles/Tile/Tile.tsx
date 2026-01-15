import type { JSX } from "react";
import {
  type TileColorType,
  type TileEdgeNames,
  type TileVertexNames,
} from "../constants";
import {
  LEFT_SIDE,
  TOP_LEFT_SIDE,
  TOP_RIGHT_SIDE,
  RIGHT_SIDE,
  BOTTOM_LEFT_SIDE,
  BOTTOM_RIGHT_SIDE,
} from "./edges";
import {
  VERTEX_TWELVE,
  VERTEX_TWO,
  VERTEX_FOUR,
  VERTEX_SIX,
  VERTEX_EIGHT,
  VERTEX_TEN,
} from "./vertices";

interface TileProps {
  tileColor: TileColorType;
  shownEdges: TileEdgeNames[];
  shownVertices: TileVertexNames[];
}

const Tile = (props: TileProps) => {
  const { tileColor, shownEdges, shownVertices } = props;

  const ALL_EDGES: { [key in TileEdgeNames]: JSX.Element } = {
    LEFT_SIDE: LEFT_SIDE,
    TOP_LEFT_SIDE: TOP_LEFT_SIDE,
    BOTTOM_RIGHT_SIDE: BOTTOM_RIGHT_SIDE,
    BOTTOM_LEFT_SIDE: BOTTOM_LEFT_SIDE,
    TOP_RIGHT_SIDE: TOP_RIGHT_SIDE,
    RIGHT_SIDE: RIGHT_SIDE,
  };
  const edges = shownEdges.map((edge) => ALL_EDGES[edge]);

  const ALL_VERTICES: { [key in TileVertexNames]: JSX.Element } = {
    VERTEX_TWO: VERTEX_TWO,
    VERTEX_FOUR: VERTEX_FOUR,
    VERTEX_SIX: VERTEX_SIX,
    VERTEX_EIGHT: VERTEX_EIGHT,
    VERTEX_TEN: VERTEX_TEN,
    VERTEX_TWELVE: VERTEX_TWELVE,
  };
  const vertices = shownVertices.map((vertex) => ALL_VERTICES[vertex]);

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg1"
        width="153.973"
        height="175.323"
        version="1.1"
        viewBox="0 0 40.739 46.388"
      >
        <g
          id="layer1"
          fillOpacity="1"
          strokeWidth="0.265"
          transform="translate(-162.04 -167.153)"
        >
          <path
            id="HEX"
            fill={tileColor}
            fillRule="nonzero"
            d="M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z"
            transform="matrix(.28182 0 0 .28182 168.027 170.765)"
          ></path>
          {edges}
        </g>
        <g
          id="layer6"
          strokeWidth="0.263"
          transform="translate(-162.04 -167.153)"
        >
          {vertices}
        </g>
      </svg>
    </div>
  );
};

export default Tile;
