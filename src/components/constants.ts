export const TILE_COLORS = {
  PLAINS: "#A0DE7E",
  FIELD: "#F0F878",
  QUARRY: "#404040",
  FORREST: "#06440A",
  BRICKYARD: "#773A18",
  DESERT: "#FFD900",
  TEST: "#FF0000",
} as const;
export type TileColorType = (typeof TILE_COLORS)[keyof typeof TILE_COLORS];

export const DEFAULT_TILES = [
  TILE_COLORS.FIELD,
  TILE_COLORS.FORREST,
  TILE_COLORS.PLAINS,
  TILE_COLORS.BRICKYARD,
  TILE_COLORS.QUARRY,
  TILE_COLORS.DESERT,
  TILE_COLORS.FIELD,
  TILE_COLORS.FORREST,
  TILE_COLORS.PLAINS,
  TILE_COLORS.BRICKYARD,
  TILE_COLORS.QUARRY,
  TILE_COLORS.FIELD,
  TILE_COLORS.FORREST,
  TILE_COLORS.PLAINS,
  TILE_COLORS.BRICKYARD,
  TILE_COLORS.QUARRY,
  TILE_COLORS.FIELD,
  TILE_COLORS.FORREST,
  TILE_COLORS.PLAINS,
];

export interface HexSvgInfo {
  pathInfo: PathSvgInfo;
  numberTransform: string | undefined;
  robberSvgInfo: PathSvgInfo;
}

export const DEFAULT_HEXES: Record<string, HexSvgInfo> = {
  "0": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 131.228 107.235)",
    },
    numberTransform: undefined,
    robberSvgInfo: {
      d: "M45.225 26.882h7.66v1.532h-7.66zm7.66-5.096a3.83 6.245 0 0 1-3.83 6.245 3.83 6.245 0 0 1-3.83-6.245 3.83 6.245 0 0 1 3.83-6.244 3.83 6.245 0 0 1 3.83 6.244m-1.149-6.244a2.681 3.064 0 0 1-2.681 3.064 2.681 3.064 0 0 1-2.681-3.064 2.681 3.064 0 0 1 2.681-3.065 2.681 3.064 0 0 1 2.681 3.065",
    },
  },
  "1": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 167.937 107.183)",
    },
    numberTransform: "translate(36.708729,-0.05175909)",
    robberSvgInfo: {
      d: "M81.933 26.83h7.66v1.532h-7.66zm7.66-5.096a3.83 6.245 0 0 1-3.83 6.245 3.83 6.245 0 0 1-3.83-6.245 3.83 6.245 0 0 1 3.83-6.244 3.83 6.245 0 0 1 3.83 6.244m-1.148-6.244a2.681 3.064 0 0 1-2.681 3.064 2.681 3.064 0 0 1-2.681-3.064 2.681 3.064 0 0 1 2.68-3.064 2.681 3.064 0 0 1 2.682 3.064",
    },
  },
  "2": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 204.646 107.131)",
    },
    numberTransform: "translate(73.417459,-0.10351909)",
    robberSvgInfo: {
      d: "M118.642 26.778h7.66v1.532h-7.66zm7.66-5.095a3.83 6.245 0 0 1-3.83 6.244 3.83 6.245 0 0 1-3.83-6.244 3.83 6.245 0 0 1 3.83-6.245 3.83 6.245 0 0 1 3.83 6.245m-1.148-6.245a2.681 3.064 0 0 1-2.682 3.064 2.681 3.064 0 0 1-2.68-3.064 2.681 3.064 0 0 1 2.68-3.064 2.681 3.064 0 0 1 2.682 3.064",
    },
  },
  "3": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 112.919 139.052)",
    },
    numberTransform: "translate(-18.309541,31.816581)",
    robberSvgInfo: {
      d: "M26.915 58.698h7.66v1.532h-7.66zm7.66-5.095a3.83 6.245 0 0 1-3.83 6.244 3.83 6.245 0 0 1-3.83-6.244 3.83 6.245 0 0 1 3.83-6.245 3.83 6.245 0 0 1 3.83 6.245m-1.148-6.245a2.681 3.064 0 0 1-2.682 3.064 2.681 3.064 0 0 1-2.68-3.064 2.681 3.064 0 0 1 2.68-3.064 2.681 3.064 0 0 1 2.682 3.064",
    },
  },
  "4": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 149.627 139)",
    },
    numberTransform: "translate(18.399189,31.764821)",
    robberSvgInfo: {
      d: "M63.624 58.647h7.66v1.532h-7.66Zm7.66-5.096a3.83 6.245 0 0 1-3.83 6.245 3.83 6.245 0 0 1-3.83-6.245 3.83 6.245 0 0 1 3.83-6.245 3.83 6.245 0 0 1 3.83 6.245m-1.149-6.245a2.681 3.064 0 0 1-2.68 3.065 2.681 3.064 0 0 1-2.682-3.065 2.681 3.064 0 0 1 2.681-3.064 2.681 3.064 0 0 1 2.681 3.064",
    },
  },
  "5": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 186.336 138.948)",
    },
    numberTransform: "translate(55.107919,31.713061)",
    robberSvgInfo: {
      d: "M100.333 58.595h7.66v1.532h-7.66zm7.66-5.096a3.83 6.245 0 0 1-3.83 6.245 3.83 6.245 0 0 1-3.83-6.245 3.83 6.245 0 0 1 3.83-6.244 3.83 6.245 0 0 1 3.83 6.244m-1.149-6.244a2.681 3.064 0 0 1-2.681 3.064 2.681 3.064 0 0 1-2.681-3.064 2.681 3.064 0 0 1 2.68-3.065 2.681 3.064 0 0 1 2.682 3.065",
    },
  },
  "6": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 223.045 138.896)",
    },
    numberTransform: "translate(91.816649,31.661291)",
    robberSvgInfo: {
      d: "M137.041 58.543h7.66v1.532h-7.66zm7.66-5.096a3.83 6.245 0 0 1-3.83 6.245 3.83 6.245 0 0 1-3.83-6.245 3.83 6.245 0 0 1 3.83-6.244 3.83 6.245 0 0 1 3.83 6.244m-1.148-6.244a2.681 3.064 0 0 1-2.681 3.064 2.681 3.064 0 0 1-2.682-3.064 2.681 3.064 0 0 1 2.682-3.064 2.681 3.064 0 0 1 2.68 3.064",
    },
  },
  "7": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 94.61 170.868)",
    },
    numberTransform: "translate(-36.619081,63.633151)",
    robberSvgInfo: {
      d: "M8.606 90.515h7.66v1.532h-7.66Zm7.66-5.096a3.83 6.245 0 0 1-3.83 6.245 3.83 6.245 0 0 1-3.83-6.245 3.83 6.245 0 0 1 3.83-6.244 3.83 6.245 0 0 1 3.83 6.244m-1.149-6.244a2.681 3.064 0 0 1-2.681 3.064 2.681 3.064 0 0 1-2.681-3.064 2.681 3.064 0 0 1 2.68-3.064 2.681 3.064 0 0 1 2.682 3.064",
    },
  },
  "8": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 131.318 170.816)",
    },
    numberTransform: "translate(0.08964933,63.581391)",
    robberSvgInfo: {
      d: "M45.314 90.463h7.66v1.532h-7.66zm7.66-5.095a3.83 6.245 0 0 1-3.83 6.244 3.83 6.245 0 0 1-3.83-6.244 3.83 6.245 0 0 1 3.83-6.245 3.83 6.245 0 0 1 3.83 6.245m-1.148-6.245a2.681 3.064 0 0 1-2.681 3.064 2.681 3.064 0 0 1-2.682-3.064 2.681 3.064 0 0 1 2.682-3.064 2.681 3.064 0 0 1 2.68 3.064",
    },
  },
  "9": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 168.027 170.765)",
    },
    numberTransform: "translate(36.798382,63.529629)",
    robberSvgInfo: {
      d: "M82.023 90.411h7.66v1.532h-7.66zm7.66-5.095a3.83 6.245 0 0 1-3.83 6.244 3.83 6.245 0 0 1-3.83-6.244 3.83 6.245 0 0 1 3.83-6.245 3.83 6.245 0 0 1 3.83 6.245m-1.148-6.245a2.681 3.064 0 0 1-2.682 3.064 2.681 3.064 0 0 1-2.68-3.064 2.681 3.064 0 0 1 2.68-3.064 2.681 3.064 0 0 1 2.682 3.064",
    },
  },
  "10": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 204.735 170.713)",
    },
    numberTransform: "translate(73.507109,63.477871)",
    robberSvgInfo: {
      d: "M118.732 90.36h7.66v1.532h-7.66zm7.66-5.096a3.83 6.245 0 0 1-3.83 6.245 3.83 6.245 0 0 1-3.83-6.245 3.83 6.245 0 0 1 3.83-6.245 3.83 6.245 0 0 1 3.83 6.245m-1.149-6.245a2.681 3.064 0 0 1-2.68 3.065 2.681 3.064 0 0 1-2.682-3.065 2.681 3.064 0 0 1 2.681-3.064 2.681 3.064 0 0 1 2.681 3.064",
    },
  },
  "11": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 241.444 170.661)",
    },
    numberTransform: "translate(110.21584,63.426101)",
    robberSvgInfo: {
      d: "M155.44 90.308h7.661v1.532h-7.66zm7.661-5.096a3.83 6.245 0 0 1-3.83 6.245 3.83 6.245 0 0 1-3.83-6.245 3.83 6.245 0 0 1 3.83-6.244 3.83 6.245 0 0 1 3.83 6.244m-1.149-6.244a2.681 3.064 0 0 1-2.681 3.064 2.681 3.064 0 0 1-2.681-3.064 2.681 3.064 0 0 1 2.68-3.065 2.681 3.064 0 0 1 2.682 3.065",
    },
  },
  "12": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 113.008 202.633)",
    },
    numberTransform: "translate(-18.219891,95.397961)",
    robberSvgInfo: {
      d: "M27.005 122.28h7.66v1.532h-7.66zm7.66-5.096a3.83 6.245 0 0 1-3.83 6.245 3.83 6.245 0 0 1-3.83-6.245 3.83 6.245 0 0 1 3.83-6.245 3.83 6.245 0 0 1 3.83 6.245m-1.149-6.245a2.681 3.064 0 0 1-2.68 3.065 2.681 3.064 0 0 1-2.682-3.065 2.681 3.064 0 0 1 2.681-3.064 2.681 3.064 0 0 1 2.681 3.064",
    },
  },
  "13": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 149.717 202.581)",
    },
    numberTransform: "translate(18.488839,95.346201)",
    robberSvgInfo: {
      d: "M63.714 122.228h7.66v1.532h-7.66Zm7.66-5.096a3.83 6.245 0 0 1-3.83 6.245 3.83 6.245 0 0 1-3.83-6.245 3.83 6.245 0 0 1 3.83-6.244 3.83 6.245 0 0 1 3.83 6.244m-1.149-6.244a2.681 3.064 0 0 1-2.681 3.064 2.681 3.064 0 0 1-2.681-3.064 2.681 3.064 0 0 1 2.68-3.064 2.681 3.064 0 0 1 2.682 3.064",
    },
  },
  "14": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 186.426 202.53)",
    },
    numberTransform: "translate(55.197569,95.294441)",
    robberSvgInfo: {
      d: "M100.422 122.176h7.66v1.532h-7.66zm7.66-5.095a3.83 6.245 0 0 1-3.83 6.244 3.83 6.245 0 0 1-3.83-6.244 3.83 6.245 0 0 1 3.83-6.245 3.83 6.245 0 0 1 3.83 6.245m-1.148-6.245a2.681 3.064 0 0 1-2.681 3.064 2.681 3.064 0 0 1-2.682-3.064 2.681 3.064 0 0 1 2.682-3.064 2.681 3.064 0 0 1 2.68 3.064",
    },
  },
  "15": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 223.135 202.478)",
    },
    numberTransform: "translate(91.906309,95.242681)",
    robberSvgInfo: {
      d: "M137.131 122.124h7.66v1.533h-7.66zm7.66-5.095a3.83 6.245 0 0 1-3.83 6.245 3.83 6.245 0 0 1-3.83-6.245 3.83 6.245 0 0 1 3.83-6.245 3.83 6.245 0 0 1 3.83 6.245m-1.149-6.245a2.681 3.064 0 0 1-2.68 3.064 2.681 3.064 0 0 1-2.682-3.064 2.681 3.064 0 0 1 2.681-3.064 2.681 3.064 0 0 1 2.681 3.064",
    },
  },
  "16": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 131.408 234.398)",
    },
    numberTransform: "translate(0.17929933,127.16278)",
    robberSvgInfo: {
      d: "M45.404 154.045h7.66v1.532h-7.66zm7.66-5.096a3.83 6.245 0 0 1-3.83 6.245 3.83 6.245 0 0 1-3.83-6.245 3.83 6.245 0 0 1 3.83-6.245 3.83 6.245 0 0 1 3.83 6.245m-1.149-6.245a2.681 3.064 0 0 1-2.68 3.064 2.681 3.064 0 0 1-2.682-3.064 2.681 3.064 0 0 1 2.681-3.064 2.681 3.064 0 0 1 2.681 3.064",
    },
  },
  "17": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 168.116 234.346)",
    },
    numberTransform: "translate(36.888029,127.11101)",
    robberSvgInfo: {
      d: "M82.113 153.993h7.66v1.532h-7.66zm7.66-5.096a3.83 6.245 0 0 1-3.83 6.245 3.83 6.245 0 0 1-3.83-6.245 3.83 6.245 0 0 1 3.83-6.244 3.83 6.245 0 0 1 3.83 6.244m-1.149-6.244a2.681 3.064 0 0 1-2.681 3.064 2.681 3.064 0 0 1-2.681-3.064 2.681 3.064 0 0 1 2.681-3.065 2.681 3.064 0 0 1 2.681 3.065",
    },
  },
  "18": {
    pathInfo: {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 204.825 234.294)",
    },
    numberTransform: "translate(73.596769,127.05925)",
    robberSvgInfo: {
      d: "M118.822 153.941h7.66v1.532h-7.66zm7.66-5.096a3.83 6.245 0 0 1-3.83 6.245 3.83 6.245 0 0 1-3.83-6.245 3.83 6.245 0 0 1 3.83-6.244 3.83 6.245 0 0 1 3.83 6.244m-1.15-6.244a2.681 3.064 0 0 1-2.68 3.064 2.681 3.064 0 0 1-2.681-3.064 2.681 3.064 0 0 1 2.68-3.064 2.681 3.064 0 0 1 2.682 3.064",
    },
  },
};

export const DEFAULT_EDGES: PathSvgInfo[] = [
  { d: "M126.257 120.843h2v12h-2z" },
  { d: "M163.279-68.669h2v12h-2z", transform: "rotate(60)" },
  { d: "M-19.667 183.486h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-1.268 215.251h2v12h-2z", transform: "rotate(-60)" },
  { d: "M17.132 247.016h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-1.178 278.833h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-19.577 247.068h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-37.976 215.303h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-56.376 183.538h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-93.084 183.59h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-74.685 215.355h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-56.286 247.119h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-37.887 278.884h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-19.488 310.649h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-56.196 310.701h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-74.595 278.936h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-92.995 247.171h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-111.394 215.406h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-129.793 183.642h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-148.103 215.458h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-129.703 247.223h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-111.304 278.988h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-92.905 310.753h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-166.412 247.275h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-148.013 279.04h2v12h-2z", transform: "rotate(-60)" },
  { d: "M-129.614 310.804h2v12h-2z", transform: "rotate(-60)" },
  { d: "M181.588-100.486h2v12h-2z", transform: "rotate(60)" },
  { d: "M199.898-132.302h2v12h-2z", transform: "rotate(60)" },
  { d: "M181.678-36.904h2v12h-2z", transform: "rotate(60)" },
  { d: "M199.987-68.721h2v12h-2z", transform: "rotate(60)" },
  { d: "M218.297-100.537h2v12h-2z", transform: "rotate(60)" },
  { d: "M236.606-132.354h2v12h-2z", transform: "rotate(60)" },
  { d: "M200.077-5.139h2v12h-2z", transform: "rotate(60)" },
  { d: "M218.387-36.956h2v12h-2z", transform: "rotate(60)" },
  { d: "M236.696-68.772h2v12h-2z", transform: "rotate(60)" },
  { d: "M255.006-100.589h2v12h-2z", transform: "rotate(60)" },
  { d: "M273.315-132.406h2v12h-2z", transform: "rotate(60)" },
  { d: "M236.786-5.191h2v12h-2z", transform: "rotate(60)" },
  { d: "M255.095-37.008h2v12h-2z", transform: "rotate(60)" },
  { d: "M273.405-68.824h2v12h-2z", transform: "rotate(60)" },
  { d: "M291.714-100.641h2v12h-2z", transform: "rotate(60)" },
  { d: "M273.494-5.243h2v12h-2z", transform: "rotate(60)" },
  { d: "M291.804-37.059h2v12h-2z", transform: "rotate(60)" },
  { d: "M310.114-68.876h2v12h-2z", transform: "rotate(60)" },
  { d: "M328.423-100.693h2v12h-2z", transform: "rotate(60)" },
  { d: "M310.203-5.295h2v12h-2z", transform: "rotate(60)" },
  { d: "M328.513-37.111h2v12h-2z", transform: "rotate(60)" },
  { d: "M346.822-68.928h2v12h-2z", transform: "rotate(60)" },
  { d: "M310.024-132.457h2v12h-2z", transform: "rotate(60)" },
  { d: "M162.966 120.791h2v12h-2z" },
  { d: "M199.675 120.74h2v12h-2z" },
  { d: "M236.384 120.688h2v12h-2z" },
  { d: "M107.948 152.66h2v12h-2z" },
  { d: "M144.657 152.608h2v12h-2z" },
  { d: "M181.365 152.556h2v12h-2z" },
  { d: "M218.074 152.505h2v12h-2z" },
  { d: "M254.783 152.453h2v12h-2z" },
  { d: "M89.638 184.476h2v12h-2z" },
  { d: "M126.347 184.425h2v12h-2z" },
  { d: "M163.056 184.373h2v12h-2z" },
  { d: "M199.765 184.321h2v12h-2z" },
  { d: "M236.473 184.269h2v12h-2z" },
  { d: "M273.182 184.218h2v12h-2z" },
  { d: "M254.872 216.034h2v12h-2z" },
  { d: "M218.164 216.086h2v12h-2z" },
  { d: "M181.455 216.138h2v12h-2z" },
  { d: "M144.746 216.189h2v12h-2z" },
  { d: "M108.038 216.241h2v12h-2z" },
  { d: "M126.437 248.006h2v12h-2z" },
  { d: "M163.145 247.954h2v12h-2z" },
  { d: "M199.854 247.903h2v12h-2z" },
  { d: "M236.563 247.851h2v12h-2z" },
];

export interface PathSvgInfo {
  d: string;
  transform?: string;
}

export interface VertexSvgInfo {
  unsettledSvgInfo: CircleSvgInfo;
  settlementSvgInfo: PathSvgInfo;
  citySvgInfo: PathSvgInfo;
}

interface CircleSvgInfo {
  cx: string;
  cy: string;
  r: number;
}

export const DEFAULT_VERTICES: Record<string, VertexSvgInfo> = {
  "0": {
    unsettledSvgInfo: { cx: "145.582", cy: "105.624", r: 2 },
    settlementSvgInfo: {
      d: "M56.959 1.3v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M54.192 6.496v-4L55.983.104l1.791 2.392v1.528h2.95v2.472z",
    },
  },
  "1": {
    unsettledSvgInfo: { cx: "182.291", cy: "105.572", r: 2 },
    settlementSvgInfo: {
      d: "M93.667 1.248v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M90.901 6.445v-4L92.692.052l1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "2": {
    unsettledSvgInfo: { cx: "218.999", cy: "105.52", r: 2 },
    settlementSvgInfo: {
      d: "M130.376 1.196v-2.392l-2.5 2.392v4h5v-4l-2.5-2.392",
    },
    citySvgInfo: {
      d: "M127.61 6.393v-4L129.4 0l1.792 2.393V3.92h2.95v2.473z",
    },
  },
  "3": {
    unsettledSvgInfo: { cx: "127.243", cy: "116.246", r: 2 },
    settlementSvgInfo: {
      d: "M38.62 11.923V9.53l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M35.853 17.12v-4l1.79-2.394 1.792 2.393v1.528h2.95v2.472z",
    },
  },
  "4": {
    unsettledSvgInfo: { cx: "163.951", cy: "116.195", r: 2 },
    settlementSvgInfo: {
      d: "M75.328 11.871V9.478l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M35.853 17.12v-4l1.79-2.394 1.792 2.393v1.528h2.95v2.472z",
    },
  },
  "5": {
    unsettledSvgInfo: { cx: "200.66", cy: "116.143", r: 2 },
    settlementSvgInfo: {
      d: "M112.037 11.82V9.425l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M109.27 17.016v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "6": {
    unsettledSvgInfo: { cx: "237.369", cy: "116.091", r: 2 },
    settlementSvgInfo: {
      d: "M148.745 11.767V9.375l-2.5 2.392v4h5v-4l-2.5-2.392",
    },
    citySvgInfo: {
      d: "M145.98 16.964v-4l1.79-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "7": {
    unsettledSvgInfo: { cx: "127.272", cy: "137.44", r: 2 },
    settlementSvgInfo: {
      d: "M38.649 33.117v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M35.883 38.313v-4l1.79-2.393 1.792 2.393v1.527h2.95v2.473z",
    },
  },
  "8": {
    unsettledSvgInfo: { cx: "163.981", cy: "137.388", r: 2 },
    settlementSvgInfo: {
      d: "M75.358 33.065v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M72.592 38.261v-4l1.79-2.393 1.792 2.393v1.528h2.95v2.472z",
    },
  },
  "9": {
    unsettledSvgInfo: { cx: "200.69", cy: "137.337", r: 2 },
    settlementSvgInfo: {
      d: "M112.066 33.013V30.62l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M109.3 38.21v-4l1.791-2.393 1.791 2.392v1.528h2.95v2.472z",
    },
  },
  "10": {
    unsettledSvgInfo: { cx: "237.399", cy: "137.285", r: 2 },
    settlementSvgInfo: {
      d: "M148.775 32.961v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M146.009 38.158v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "11": {
    unsettledSvgInfo: { cx: "108.933", cy: "148.063", r: 2 },
    settlementSvgInfo: {
      d: "M20.31 43.74v-2.394l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M17.543 48.936v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "12": {
    unsettledSvgInfo: { cx: "145.642", cy: "148.011", r: 2 },
    settlementSvgInfo: {
      d: "M57.018 43.688v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M54.252 48.884v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "13": {
    unsettledSvgInfo: { cx: "182.35", cy: "147.959", r: 2 },
    settlementSvgInfo: {
      d: "M93.727 43.636v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M90.96 48.832v-4l1.792-2.393 1.79 2.393v1.528h2.951v2.472z",
    },
  },
  "14": {
    unsettledSvgInfo: { cx: "219.059", cy: "147.908", r: 2 },
    settlementSvgInfo: {
      d: "M130.436 43.584v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M127.67 48.78v-4l1.79-2.392 1.792 2.392v1.528h2.95v2.472z",
    },
  },
  "15": {
    unsettledSvgInfo: { cx: "255.768", cy: "147.856", r: 2 },
    settlementSvgInfo: {
      d: "M167.144 43.532V41.14l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M164.378 48.729v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "16": {
    unsettledSvgInfo: { cx: "108.963", cy: "169.257", r: 2 },
    settlementSvgInfo: {
      d: "M20.34 64.933V62.54l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M17.573 70.13v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "17": {
    unsettledSvgInfo: { cx: "145.672", cy: "169.205", r: 2 },
    settlementSvgInfo: {
      d: "M57.048 64.881v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M54.282 70.078v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "18": {
    unsettledSvgInfo: { cx: "182.38", cy: "169.153", r: 2 },
    settlementSvgInfo: {
      d: "M93.757 64.83v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M90.99 70.026v-4l1.792-2.393 1.79 2.393v1.527h2.951v2.473z",
    },
  },
  "19": {
    unsettledSvgInfo: { cx: "219.089", cy: "169.101", r: 2 },
    settlementSvgInfo: {
      d: "M130.466 64.778v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M127.7 69.974v-4l1.79-2.393 1.791 2.393v1.528h2.95v2.472z",
    },
  },
  "20": {
    unsettledSvgInfo: { cx: "255.798", cy: "169.05", r: 2 },
    settlementSvgInfo: {
      d: "M167.174 64.726v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M164.408 69.922v-4l1.791-2.392 1.791 2.392v1.528h2.95v2.472z",
    },
  },
  "21": {
    unsettledSvgInfo: { cx: "90.623", cy: "179.88", r: 2 },
    settlementSvgInfo: {
      d: "M2 75.556v-2.393l-2.5 2.393v4h5v-4L2 73.163",
    },
    citySvgInfo: {
      d: "M-.766 80.752v-4l1.79-2.393 1.792 2.393v1.528h2.95v2.472z",
    },
  },
  "22": {
    unsettledSvgInfo: { cx: "127.332", cy: "179.828", r: 2 },
    settlementSvgInfo: {
      d: "M38.709 75.504v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M35.943 80.7v-4l1.79-2.392 1.792 2.393v1.527h2.95V80.7z",
    },
  },
  "23": {
    unsettledSvgInfo: { cx: "164.041", cy: "179.776", r: 2 },
    settlementSvgInfo: {
      d: "M75.417 75.452V73.06l-2.5 2.392v4h5v-4l-2.5-2.392",
    },
    citySvgInfo: {
      d: "M72.651 80.649v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "24": {
    unsettledSvgInfo: { cx: "200.75", cy: "179.724", r: 2 },
    settlementSvgInfo: {
      d: "M112.126 75.4v-2.392l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M109.36 80.597v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "25": {
    unsettledSvgInfo: { cx: "237.458", cy: "179.672", r: 2 },
    settlementSvgInfo: {
      d: "M148.835 75.349v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M146.069 80.545v-4l1.79-2.393 1.792 2.393v1.528h2.95v2.472z",
    },
  },
  "26": {
    unsettledSvgInfo: { cx: "274.167", cy: "179.621", r: 2 },
    settlementSvgInfo: {
      d: "M185.544 75.297v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M182.777 80.493v-4l1.791-2.392 1.791 2.392v1.528h2.95v2.472z",
    },
  },
  "27": {
    unsettledSvgInfo: { cx: "90.653", cy: "201.073", r: 2 },
    settlementSvgInfo: {
      d: "M2.03 96.75v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M-.736 101.946v-4l1.79-2.393 1.792 2.393v1.527h2.95v2.473z",
    },
  },
  "28": {
    unsettledSvgInfo: { cx: "127.362", cy: "201.022", r: 2 },
    settlementSvgInfo: {
      d: "M38.739 96.698v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M35.972 101.894v-4l1.791-2.393 1.791 2.393v1.528h2.95v2.472z",
    },
  },
  "29": {
    unsettledSvgInfo: { cx: "164.071", cy: "200.97", r: 2 },
    settlementSvgInfo: {
      d: "M75.447 96.646v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M72.681 101.843v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "30": {
    unsettledSvgInfo: { cx: "200.78", cy: "200.918", r: 2 },
    settlementSvgInfo: {
      d: "M112.156 96.594v-2.392l-2.5 2.392v4h5v-4l-2.5-2.392",
    },
    citySvgInfo: {
      d: "M109.39 101.79v-4l1.79-2.392 1.792 2.393v1.527h2.95v2.473z",
    },
  },
  "31": {
    unsettledSvgInfo: { cx: "237.488", cy: "200.866", r: 2 },
    settlementSvgInfo: {
      d: "M148.865 96.543V94.15l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M146.099 101.739v-4l1.79-2.393 1.792 2.393v1.527h2.95v2.473z",
    },
  },
  "32": {
    unsettledSvgInfo: { cx: "274.197", cy: "200.815", r: 2 },
    settlementSvgInfo: {
      d: "M185.574 96.49v-2.392l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M182.807 101.687v-4l1.791-2.393 1.791 2.393v1.528h2.95v2.472z",
    },
  },
  "33": {
    unsettledSvgInfo: { cx: "109.023", cy: "211.644", r: 2 },
    settlementSvgInfo: {
      d: "M20.4 107.32v-2.392l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M17.633 112.517v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "34": {
    unsettledSvgInfo: { cx: "145.731", cy: "211.593", r: 2 },
    settlementSvgInfo: {
      d: "M57.108 107.269v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M54.342 112.465v-4l1.79-2.393 1.792 2.393v1.528h2.95v2.472z",
    },
  },
  "35": {
    unsettledSvgInfo: { cx: "182.44", cy: "211.541", r: 2 },
    settlementSvgInfo: {
      d: "M93.817 107.217v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M91.05 112.414v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "36": {
    unsettledSvgInfo: { cx: "219.149", cy: "211.489", r: 2 },
    settlementSvgInfo: {
      d: "M130.525 107.165v-2.392l-2.5 2.392v4h5v-4l-2.5-2.392",
    },
    citySvgInfo: {
      d: "M127.76 112.362v-4l1.79-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "37": {
    unsettledSvgInfo: { cx: "255.858", cy: "211.437", r: 2 },
    settlementSvgInfo: {
      d: "M167.234 107.114v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M164.468 112.31v-4l1.791-2.393 1.791 2.393v1.527H171v2.473z",
    },
  },
  "38": {
    unsettledSvgInfo: { cx: "109.052", cy: "232.838", r: 2 },
    settlementSvgInfo: {
      d: "M20.43 128.514v-2.392l-2.5 2.392v4h5v-4l-2.5-2.392",
    },
    citySvgInfo: {
      d: "M17.663 133.71v-4l1.79-2.392 1.792 2.393v1.527h2.95v2.473z",
    },
  },
  "39": {
    unsettledSvgInfo: { cx: "145.761", cy: "232.786", r: 2 },
    settlementSvgInfo: {
      d: "M57.138 128.463v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M54.372 133.66v-4l1.79-2.394 1.792 2.393v1.528h2.95v2.472z",
    },
  },
  "40": {
    unsettledSvgInfo: { cx: "182.47", cy: "232.735", r: 2 },
    settlementSvgInfo: {
      d: "M93.847 128.411v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M91.08 133.607v-4l1.791-2.392 1.791 2.392v1.528h2.95v2.472z",
    },
  },
  "41": {
    unsettledSvgInfo: { cx: "219.179", cy: "232.683", r: 2 },
    settlementSvgInfo: {
      d: "M130.555 128.36v-2.394l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M127.79 133.556v-4l1.79-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "42": {
    unsettledSvgInfo: { cx: "255.887", cy: "232.631", r: 2 },
    settlementSvgInfo: {
      d: "M167.264 128.307v-2.392l-2.5 2.392v4h5v-4l-2.5-2.392",
    },
    citySvgInfo: {
      d: "M164.498 133.504v-4l1.79-2.393 1.792 2.393v1.527h2.95v2.473z",
    },
  },
  "43": {
    unsettledSvgInfo: { cx: "127.422", cy: "243.409", r: 2 },
    settlementSvgInfo: {
      d: "M38.798 139.085v-2.392l-2.5 2.392v4h5v-4l-2.5-2.392",
    },
    citySvgInfo: {
      d: "M36.032 144.282v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "44": {
    unsettledSvgInfo: { cx: "164.131", cy: "243.357", r: 2 },
    settlementSvgInfo: {
      d: "M75.507 139.034v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M72.74 144.23v-4l1.792-2.393 1.79 2.393v1.528h2.951v2.472z",
    },
  },
  "45": {
    unsettledSvgInfo: { cx: "200.839", cy: "243.306", r: 2 },
    settlementSvgInfo: {
      d: "M112.216 138.982v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M109.45 144.178v-4l1.79-2.392 1.792 2.392v1.528h2.95v2.472z",
    },
  },
  "46": {
    unsettledSvgInfo: { cx: "237.548", cy: "243.254", r: 2 },
    settlementSvgInfo: {
      d: "M148.925 138.93v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M146.158 144.127v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "47": {
    unsettledSvgInfo: { cx: "127.452", cy: "264.603", r: 2 },
    settlementSvgInfo: {
      d: "M38.828 160.28v-2.394l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M36.062 165.476v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "48": {
    unsettledSvgInfo: { cx: "164.16", cy: "264.551", r: 2 },
    settlementSvgInfo: {
      d: "M75.537 160.228v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M72.77 165.424v-4l1.792-2.393 1.79 2.393v1.527h2.951v2.473z",
    },
  },
  "49": {
    unsettledSvgInfo: { cx: "200.869", cy: "264.499", r: 2 },
    settlementSvgInfo: {
      d: "M112.246 160.176v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M109.48 165.372v-4l1.79-2.393 1.792 2.393v1.528h2.95v2.472z",
    },
  },
  "50": {
    unsettledSvgInfo: { cx: "237.578", cy: "264.448", r: 2 },
    settlementSvgInfo: {
      d: "M148.954 160.124v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M146.188 165.32v-4l1.791-2.392 1.791 2.392v1.528h2.95v2.472z",
    },
  },
  "51": {
    unsettledSvgInfo: { cx: "145.821", cy: "275.174", r: 2 },
    settlementSvgInfo: {
      d: "M57.198 170.85v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M54.431 176.047v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "52": {
    unsettledSvgInfo: { cx: "182.53", cy: "275.122", r: 2 },
    settlementSvgInfo: {
      d: "M93.906 170.799v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M91.14 175.995v-4l1.791-2.393 1.791 2.393v1.527h2.95v2.473z",
    },
  },
  "53": {
    unsettledSvgInfo: { cx: "219.238", cy: "275.07", r: 2 },
    settlementSvgInfo: {
      d: "M130.615 170.747v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
    },
    citySvgInfo: {
      d: "M127.849 175.943v-4l1.79-2.393 1.792 2.393v1.528h2.95v2.472z",
    },
  },
};

interface CoordinateSvgInfo {
  x: string;
  y: string;
}

export interface NumberSvgInfo {
  circleInfo: CircleSvgInfo;
  textInfo: CoordinateSvgInfo;
  tspanInfo: CoordinateSvgInfo;
  number: number;
}

const NUMBER_TWO = {
  number: 2,
  circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
  textInfo: { x: "52.751755", y: "28.059814" },
  tspanInfo: { x: "52.751755", y: "28.059814" },
};
const NUMBER_THREE = {
  number: 3,
  circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
  textInfo: { x: "52.751755", y: "28.059814" },
  tspanInfo: { x: "52.751755", y: "28.059814" },
};
const NUMBER_FOUR = {
  number: 4,
  circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
  textInfo: { x: "53.282574", y: "28.059814" },
  tspanInfo: { x: "53.282574", y: "28.059814" },
};
const NUMBER_FIVE = {
  number: 5,
  circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
  textInfo: { x: "52.751755", y: "28.059814" },
  tspanInfo: { x: "52.751755", y: "28.059814" },
};
const NUMBER_SIX = {
  number: 6,
  circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
  textInfo: { x: "52.751755", y: "28.059814" },
  tspanInfo: { x: "52.751755", y: "28.059814" },
};
const NUMBER_EIGHT = {
  number: 8,
  circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
  textInfo: { x: "52.751755", y: "28.059814" },
  tspanInfo: { x: "52.751755", y: "28.059814" },
};
const NUMBER_NINE = {
  number: 9,
  circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
  textInfo: { x: "52.751755", y: "28.059814" },
  tspanInfo: { x: "52.751755", y: "28.059814" },
};
const NUMBER_TEN = {
  number: 10,
  circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
  textInfo: { x: "47.994209", y: "28.059814" },
  tspanInfo: { x: "47.994209", y: "28.059814" },
};
const NUMBER_ELEVEN = {
  number: 11,
  circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
  textInfo: { x: "49.055847", y: "28.059814" },
  tspanInfo: { x: "49.055847", y: "28.059814" },
};
const NUMBER_TWELVE = {
  number: 12,
  circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
  textInfo: { x: "47.994209", y: "28.059814" },
  tspanInfo: { x: "47.994209", y: "28.059814" },
};

export const DEFAULT_NUMBERS: NumberSvgInfo[] = [
  NUMBER_EIGHT,
  NUMBER_TWELVE,
  NUMBER_TWO,
  NUMBER_THREE,
  NUMBER_FOUR,
  NUMBER_FIVE,
  NUMBER_SIX,
  NUMBER_EIGHT,
  NUMBER_NINE,
  NUMBER_TEN,
  NUMBER_ELEVEN,
  NUMBER_FOUR,
  NUMBER_FIVE,
  NUMBER_SIX,
  NUMBER_TEN,
  NUMBER_NINE,
  NUMBER_ELEVEN,
  NUMBER_THREE,
];

export const TILE_FLASH_DURATION = 3000;

export const ROLL_DURATION = 1000;

export const UNSELECTED_BUILD_COLOR = "#555555";

export const BOTTOM_BUTTON_DIV_HEIGHT = "5vh";

export const BOARD_HEIGHT = "40vh";

export const MIN_BOARD_DIMENSIONS = "600px";

export const PLAYER_SETTLEMENT_TEXT = "Player playerNumber: Build a Settlement";
export const PLAYER_ROAD_TEXT = "Player playerNumber: Build a Road";
export const PLAYER_ROLL_TEXT = "Player playerNumber: Roll the Dice";
export const PLAYER_BUILD_TEXT = "Player playerNumber: Build Stage";
