import { TILE_COLORS } from "../constants";
import classes from "./Tile.module.css";

type TileColorType = (typeof TILE_COLORS)[keyof typeof TILE_COLORS];

interface TileProps {
  tileColor: TileColorType;
}

const Tile = (props: TileProps) => {
  const { tileColor } = props;
  return (
    <div className={classes.tile}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="svg1"
        width="40mm"
        height="171.082"
        version="1.1"
        viewBox="0 0 40 45.266"
      >
        <g id="layer1" transform="translate(-87.276 -116.217)">
          <path
            id="path1"
            fill={tileColor}
            fillOpacity="1"
            fillRule="nonzero"
            strokeWidth="0.265"
            d="M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z"
            transform="matrix(.28182 0 0 .28182 92.807 119.147)"
          ></path>
        </g>
        <g
          id="layer5"
          strokeWidth="0.055"
          transform="translate(-87.276 -116.217)"
        >
          <path id="LEFT_SIDE" d="M88.01 130.794h1.949v15.074H88.01z"></path>
          <path
            id="RIGHT_SIDE"
            d="M124.392 131.133h1.948v15.075h-1.948z"
          ></path>
          <path
            id="TOP_RIGHT_SIDE"
            d="m109.507 120.042.98-1.684 13.032 7.577-.98 1.684z"
          ></path>
          <path
            id="BOTTOM_LEFT_SIDE"
            d="m91.02 151.65.98-1.685 13.031 7.578-.98 1.684z"
          ></path>
          <path
            id="BOTTOM_RIGHT_SIDE-3"
            d="m110.634 159.457-1.02-1.66 12.845-7.891 1.02 1.66z"
          ></path>
          <path
            id="TOP_LEFT_SIDE"
            d="m91.724 127.85-.986-1.68 13.002-7.629.986 1.68z"
          ></path>
        </g>
        <g
          id="layer6"
          strokeWidth="0.075"
          transform="translate(-87.276 -116.217)"
        >
          <path
            id="VERTEX_TEN"
            d="M90.779 128.384a1.743 1.692 0 0 1-1.743 1.692 1.743 1.692 0 0 1-1.744-1.692 1.743 1.692 0 0 1 1.744-1.693 1.743 1.692 0 0 1 1.743 1.693"
          ></path>
          <path
            id="VERTEX_TWELVE"
            d="M108.909 117.91a1.743 1.692 0 0 1-1.744 1.691 1.743 1.692 0 0 1-1.743-1.692 1.743 1.692 0 0 1 1.743-1.692 1.743 1.692 0 0 1 1.744 1.692"
          ></path>
          <path
            id="VERTEX_TWO"
            d="M127.177 127.933a1.743 1.692 0 0 1-1.743 1.692 1.743 1.692 0 0 1-1.744-1.692 1.743 1.692 0 0 1 1.744-1.693 1.743 1.692 0 0 1 1.743 1.693"
          ></path>
          <path
            id="VERTEX_FOUR"
            d="M127.276 149.165a1.743 1.692 0 0 1-1.743 1.693 1.743 1.692 0 0 1-1.743-1.693 1.743 1.692 0 0 1 1.743-1.692 1.743 1.692 0 0 1 1.743 1.692"
          ></path>
          <path
            id="VERTEX_SIX"
            d="M109.171 159.79a1.743 1.692 0 0 1-1.743 1.693 1.743 1.692 0 0 1-1.743-1.693 1.743 1.692 0 0 1 1.743-1.692 1.743 1.692 0 0 1 1.743 1.692"
          ></path>
          <path
            id="VERTEX_EIGHT"
            d="M90.763 149.356a1.743 1.692 0 0 1-1.743 1.692 1.743 1.692 0 0 1-1.744-1.692 1.743 1.692 0 0 1 1.744-1.692 1.743 1.692 0 0 1 1.743 1.692"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Tile;
