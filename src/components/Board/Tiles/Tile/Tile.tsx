import { TILE_COLORS } from "../constants";

type TileColorType = (typeof TILE_COLORS)[keyof typeof TILE_COLORS];

interface TileProps {
  tileColor: TileColorType;
}

const Tile = (props: TileProps) => {
  const { tileColor } = props;
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
            id="path1"
            fill={tileColor}
            fillRule="nonzero"
            d="M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z"
            transform="matrix(.28182 0 0 .28182 168.027 170.765)"
          ></path>
          <path
            id="LEFT_SIDE"
            fill="#000"
            strokeDasharray="none"
            d="M163.056 183.373h2v14h-2z"
          ></path>
          <path
            id="TOP_LEFT_SIDE"
            fill="#000"
            strokeDasharray="none"
            d="M236.784-69.437h2v14h-2z"
            transform="rotate(59.92)"
          ></path>
          <path
            id="BOTTOM_RIGHT_SIDE"
            fill="#000"
            strokeDasharray="none"
            d="M273.493-69.437h2v14h-2z"
            transform="rotate(59.92)"
          ></path>
          <path
            id="BOTTOM_LEFT_SIDE"
            fill="#000"
            strokeDasharray="none"
            d="M91.351-260.041h2v14h-2z"
            transform="rotate(119.92)"
          ></path>
          <path
            id="TOP_RIGHT_SIDE"
            fill="#000"
            strokeDasharray="none"
            d="M54.643-260.041h2v14h-2z"
            transform="rotate(119.92)"
          ></path>
          <path
            id="RIGHT_SIDE"
            fill="#000"
            strokeDasharray="none"
            d="M199.765 183.321h2v14h-2z"
          ></path>
        </g>
        <g
          id="layer6"
          strokeWidth="0.263"
          transform="translate(-162.04 -167.153)"
        >
          <path
            id="VERTEX_TEN"
            d="M166.025 179.776a1.984 1.984 0 0 1-1.984 1.984 1.984 1.984 0 0 1-1.985-1.984 1.984 1.984 0 0 1 1.985-1.984 1.984 1.984 0 0 1 1.984 1.984"
          ></path>
          <path
            id="VERTEX_EIGHT"
            d="M166.055 200.97a1.984 1.984 0 0 1-1.984 1.984 1.984 1.984 0 0 1-1.985-1.984 1.984 1.984 0 0 1 1.985-1.985 1.984 1.984 0 0 1 1.984 1.985"
          ></path>
          <path
            id="VERTEX_SIX"
            d="M184.424 211.54a1.984 1.984 0 0 1-1.984 1.985 1.984 1.984 0 0 1-1.984-1.984 1.984 1.984 0 0 1 1.984-1.985 1.984 1.984 0 0 1 1.984 1.985"
          ></path>
          <path
            id="VERTEX_FOUR"
            d="M202.764 200.918a1.984 1.984 0 0 1-1.985 1.984 1.984 1.984 0 0 1-1.984-1.984 1.984 1.984 0 0 1 1.985-1.984 1.984 1.984 0 0 1 1.984 1.984"
          ></path>
          <path
            id="VERTEX_TWO"
            d="M202.734 179.724a1.984 1.984 0 0 1-1.984 1.985 1.984 1.984 0 0 1-1.985-1.985 1.984 1.984 0 0 1 1.985-1.984 1.984 1.984 0 0 1 1.984 1.984"
          ></path>
          <path
            id="VERTEX_TWELVE"
            d="M184.365 169.153a1.984 1.984 0 0 1-1.985 1.985 1.984 1.984 0 0 1-1.984-1.985 1.984 1.984 0 0 1 1.984-1.984 1.984 1.984 0 0 1 1.985 1.984"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Tile;
