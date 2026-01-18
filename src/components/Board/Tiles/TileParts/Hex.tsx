import { type TileColorType } from "../constants";

interface HexProps {
  tileColor: TileColorType;
}
const Hex = (props: HexProps) => {
  
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
          id="HEX_LAYER"
          fillOpacity="1"
          strokeWidth="0.265"
          transform="translate(-162.04 -167.153)"
        >
          <path
            id="HEX"
            fill={props.tileColor}
            fillRule="nonzero"
            d="M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z"
            transform="matrix(.28182 0 0 .28182 168.027 170.765)"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default Hex;
