import type { TileVertexNames } from "../constants";
import { useState, type JSX } from "react";

interface VerticesProps {
  shownVertices: TileVertexNames[];
  opacity: string;
  isBuilding: boolean;
}

const Vertices = (props: VerticesProps) => {
  const { shownVertices, opacity, isBuilding } = props;
  const [highlighted, setHighlighted] = useState<TileVertexNames[]>([]);
  const addHighlighted = (name: TileVertexNames) => {
    console.log(name)
    if (!isBuilding) {
      return;
    }
    setHighlighted((prev) => {
      const newList = [...prev, name];
      return newList;
    });
  };
  const VERTEX_TEN = (
    <path
      id="VERTEX_TEN"
      d="M166.025 179.776a1.984 1.984 0 0 1-1.984 1.984 1.984 1.984 0 0 1-1.985-1.984 1.984 1.984 0 0 1 1.985-1.984 1.984 1.984 0 0 1 1.984 1.984"
      key="VERTEX_TEN"
      onClick={() => addHighlighted("VERTEX_TEN")}
      style={{
        fill: highlighted.includes("VERTEX_TEN") ? "red" : "inherit",
        opacity: highlighted.includes("VERTEX_TEN") ? "100%" : opacity,
      }}
    ></path>
  );
  const VERTEX_EIGHT = (
    <path
      id="VERTEX_EIGHT"
      d="M166.055 200.97a1.984 1.984 0 0 1-1.984 1.984 1.984 1.984 0 0 1-1.985-1.984 1.984 1.984 0 0 1 1.985-1.985 1.984 1.984 0 0 1 1.984 1.985"
      key="VERTEX_EIGHT"
      onClick={() => addHighlighted("VERTEX_EIGHT")}
      style={{
        fill: highlighted.includes("VERTEX_EIGHT") ? "red" : "inherit",
        opacity: highlighted.includes("VERTEX_EIGHT") ? "100%" : opacity,
      }}
    ></path>
  );
  const VERTEX_SIX = (
    <path
      id="VERTEX_SIX"
      d="M184.424 211.54a1.984 1.984 0 0 1-1.984 1.985 1.984 1.984 0 0 1-1.984-1.984 1.984 1.984 0 0 1 1.984-1.985 1.984 1.984 0 0 1 1.984 1.985"
      key="VERTEX_SIX"
      onClick={() => addHighlighted("VERTEX_SIX")}
      style={{
        fill: highlighted.includes("VERTEX_SIX") ? "red" : "inherit",
        opacity: highlighted.includes("VERTEX_SIX") ? "100%" : opacity,
      }}
    ></path>
  );
  const VERTEX_FOUR = (
    <path
      id="VERTEX_FOUR"
      d="M202.764 200.918a1.984 1.984 0 0 1-1.985 1.984 1.984 1.984 0 0 1-1.984-1.984 1.984 1.984 0 0 1 1.985-1.984 1.984 1.984 0 0 1 1.984 1.984"
      key="VERTEX_FOUR"
      onClick={() => addHighlighted("VERTEX_FOUR")}
      style={{
        fill: highlighted.includes("VERTEX_FOUR") ? "red" : "inherit",
        opacity: highlighted.includes("VERTEX_FOUR") ? "100%" : opacity,
      }}
    ></path>
  );
  const VERTEX_TWO = (
    <path
      id="VERTEX_TWO"
      d="M202.734 179.724a1.984 1.984 0 0 1-1.984 1.985 1.984 1.984 0 0 1-1.985-1.985 1.984 1.984 0 0 1 1.985-1.984 1.984 1.984 0 0 1 1.984 1.984"
      key="VERTEX_TWO"
      onClick={() => addHighlighted("VERTEX_TWO")}
      style={{
        fill: highlighted.includes("VERTEX_TWO") ? "red" : "inherit",
        opacity: highlighted.includes("VERTEX_TWO") ? "100%" : opacity,
      }}
    ></path>
  );
  const VERTEX_TWELVE = (
    <path
      id="VERTEX_TWELVE"
      d="M184.365 169.153a1.984 1.984 0 0 1-1.985 1.985 1.984 1.984 0 0 1-1.984-1.985 1.984 1.984 0 0 1 1.984-1.984 1.984 1.984 0 0 1 1.985 1.984"
      key="VERTEX_TWELVE"
      onClick={() => addHighlighted("VERTEX_TWELVE")}
      style={{
        fill: highlighted.includes("VERTEX_TWELVE") ? "red" : "inherit",
        opacity: highlighted.includes("VERTEX_TWELVE") ? "100%" : opacity,
      }}
    ></path>
  );
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
