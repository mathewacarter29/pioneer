import type { TileVertexNames } from "../constants";
import type { JSX } from "react";
import {
  VERTEX_TWELVE,
  VERTEX_TWO,
  VERTEX_FOUR,
  VERTEX_SIX,
  VERTEX_EIGHT,
  VERTEX_TEN,
} from "./constants/vertices";

interface VerticesProps {
  shownVertices: TileVertexNames[];
}

const Vertices = (props: VerticesProps) => {
  const ALL_VERTICES: { [key in TileVertexNames]: JSX.Element } = {
    VERTEX_TWO: VERTEX_TWO,
    VERTEX_FOUR: VERTEX_FOUR,
    VERTEX_SIX: VERTEX_SIX,
    VERTEX_EIGHT: VERTEX_EIGHT,
    VERTEX_TEN: VERTEX_TEN,
    VERTEX_TWELVE: VERTEX_TWELVE,
  };
  const vertices = props.shownVertices.map((vertex) => ALL_VERTICES[vertex]);

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
          id="VERTEX_LAYER"
          strokeWidth="0.263"
          transform="translate(-162.04 -167.153)"
        >
          {vertices}
        </g>
      </svg>
    </div>
  );
};

export default Vertices;
