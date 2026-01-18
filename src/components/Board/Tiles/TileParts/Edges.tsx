import {
  LEFT_SIDE,
  TOP_LEFT_SIDE,
  TOP_RIGHT_SIDE,
  RIGHT_SIDE,
  BOTTOM_LEFT_SIDE,
  BOTTOM_RIGHT_SIDE,
} from "./constants/edges";
import type { JSX } from "react";
import type { TileEdgeNames } from "../constants";

interface EdgesProps {
  shownEdges: TileEdgeNames[];
}

const Edges = (props: EdgesProps) => {

  const ALL_EDGES: { [key in TileEdgeNames]: JSX.Element } = {
    LEFT_SIDE: LEFT_SIDE,
    TOP_LEFT_SIDE: TOP_LEFT_SIDE,
    BOTTOM_RIGHT_SIDE: BOTTOM_RIGHT_SIDE,
    BOTTOM_LEFT_SIDE: BOTTOM_LEFT_SIDE,
    TOP_RIGHT_SIDE: TOP_RIGHT_SIDE,
    RIGHT_SIDE: RIGHT_SIDE,
  };
  const edges = props.shownEdges.map((edge) => ALL_EDGES[edge]);

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
          id="EDGE_LAYER"
          fillOpacity="1"
          strokeWidth="0.265"
          transform="translate(-162.04 -167.153)"
        >
          {edges}
        </g>
      </svg>
    </div>
  );
};

export default Edges;
