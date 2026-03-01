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

/**
 * first number is the index of the hex, second is the svg info for that hex
 */
// TODO rewrite this to be objects with hexinfo, index, numbertransform
export const DEFAULT_HEXES: [number, PathSvgInfo][] = [
  [
    0,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 131.228 107.235)",
    },
  ],
  [
    1,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 167.937 107.183)",
    },
  ],
  [
    2,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 204.646 107.131)",
    },
  ],
  [
    3,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 112.919 139.052)",
    },
  ],
  [
    4,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 149.627 139)",
    },
  ],
  [
    5,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 186.336 138.948)",
    },
  ],
  [
    6,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 223.045 138.896)",
    },
  ],
  [
    7,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 94.61 170.868)",
    },
  ],
  [
    8,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 131.318 170.816)",
    },
  ],
  [
    9,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 168.027 170.765)",
    },
  ],
  [
    10,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 204.735 170.713)",
    },
  ],
  [
    11,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 241.444 170.661)",
    },
  ],
  [
    12,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 113.008 202.633)",
    },
  ],
  [
    13,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 149.717 202.581)",
    },
  ],
  [
    14,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 186.426 202.53)",
    },
  ],
  [
    15,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 223.135 202.478)",
    },
  ],
  [
    16,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 131.408 234.398)",
    },
  ],
  [
    17,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 168.116 234.346)",
    },
  ],
  [
    18,
    {
      d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
      transform: "matrix(.28182 0 0 .28182 204.825 234.294)",
    },
  ],
];

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
  strokeWidth?: number;
  transform?: string;
}

interface SettlementSvgInfo {
  transform: string;
  path: PathSvgInfo;
}

export interface VertexSvgInfo {
  unsettledSvgInfo: CircleSvgInfo;
  settlementSvgInfo: SettlementSvgInfo;
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
      transform: "matrix(.74378 0 0 .74378 -81.262 -118.641)",
      path: {
        d: "M56.959 1.3v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "1": {
    unsettledSvgInfo: { cx: "182.291", cy: "105.572", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -44.553 -118.693)",
      path: {
        d: "M93.667 1.248v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "2": {
    unsettledSvgInfo: { cx: "218.999", cy: "105.52", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -7.844 -118.745)",
      path: {
        d: "M130.376 1.196v-2.392l-2.5 2.392v4h5v-4l-2.5-2.392",
        strokeWidth: 1
      },
    },
  },
  "3": {
    unsettledSvgInfo: { cx: "127.243", cy: "116.246", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -99.601 -108.019)",
      path: {
        d: "M38.62 11.923V9.53l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "4": {
    unsettledSvgInfo: { cx: "163.951", cy: "116.195", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -62.893 -108.07)",
      path: {
        d: "M75.328 11.871V9.478l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "5": {
    unsettledSvgInfo: { cx: "200.66", cy: "116.143", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -26.184 -108.122)",
      path: {
        d: "M112.037 11.82V9.425l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "6": {
    unsettledSvgInfo: { cx: "237.369", cy: "116.091", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 10.525 -108.174)",
      path: {
        d: "M148.745 11.767V9.375l-2.5 2.392v4h5v-4l-2.5-2.392",
        strokeWidth: 1
      },
    },
  },
  "7": {
    unsettledSvgInfo: { cx: "127.272", cy: "137.44", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -99.571 -86.825)",
      path: {
        d: "M38.649 33.117v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "8": {
    unsettledSvgInfo: { cx: "163.981", cy: "137.388", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -62.863 -86.877)",
      path: {
        d: "M75.358 33.065v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "9": {
    unsettledSvgInfo: { cx: "200.69", cy: "137.337", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -26.154 -86.928)",
      path: {
        d: "M112.066 33.013V30.62l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "10": {
    unsettledSvgInfo: { cx: "237.399", cy: "137.285", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 10.555 -86.98)",
      path: {
        d: "M148.775 32.961v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "11": {
    unsettledSvgInfo: { cx: "108.933", cy: "148.063", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -117.91 -76.202)",
      path: {
        d: "M20.31 43.74v-2.394l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "12": {
    unsettledSvgInfo: { cx: "145.642", cy: "148.011", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -81.202 -76.254)",
      path: {
        d: "M57.018 43.688v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "13": {
    unsettledSvgInfo: { cx: "182.35", cy: "147.959", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -44.493 -76.306)",
      path: {
        d: "M93.727 43.636v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "14": {
    unsettledSvgInfo: { cx: "219.059", cy: "147.908", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -7.785 -76.357)",
      path: {
        d: "M130.436 43.584v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "15": {
    unsettledSvgInfo: { cx: "255.768", cy: "147.856", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 28.924 -76.41)",
      path: {
        d: "M167.144 43.532V41.14l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "16": {
    unsettledSvgInfo: { cx: "108.963", cy: "169.257", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -117.881 -55.008)",
      path: {
        d: "M20.34 64.933V62.54l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "17": {
    unsettledSvgInfo: { cx: "145.672", cy: "169.205", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -81.172 -55.06)",
      path: {
        d: "M57.048 64.881v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "18": {
    unsettledSvgInfo: { cx: "182.38", cy: "169.153", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -44.464 -55.112)",
      path: {
        d: "M93.757 64.83v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "19": {
    unsettledSvgInfo: { cx: "219.089", cy: "169.101", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -7.755 -55.164)",
      path: {
        d: "M130.466 64.778v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "20": {
    unsettledSvgInfo: { cx: "255.798", cy: "169.05", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 28.954 -55.215)",
      path: {
        d: "M130.466 64.778v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "21": {
    unsettledSvgInfo: { cx: "90.623", cy: "179.88", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -136.22 -44.385)",
      path: {
        d: "M2 75.556v-2.393l-2.5 2.393v4h5v-4L2 73.163",
        strokeWidth: 1
      },
    },
  },
  "22": {
    unsettledSvgInfo: { cx: "127.332", cy: "179.828", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -99.512 -44.437)",
      path: {
        d: "M38.709 75.504v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "23": {
    unsettledSvgInfo: { cx: "164.041", cy: "179.776", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -62.803 -44.489)",
      path: {
        d: "M75.417 75.452V73.06l-2.5 2.392v4h5v-4l-2.5-2.392",
        strokeWidth: 1
      },
    },
  },
  "24": {
    unsettledSvgInfo: { cx: "200.75", cy: "179.724", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -26.094 -44.54)",
      path: {
        d: "M112.126 75.4v-2.392l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "25": {
    unsettledSvgInfo: { cx: "237.458", cy: "179.672", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 10.615 -44.593)",
      path: {
        d: "M148.835 75.349v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "26": {
    unsettledSvgInfo: { cx: "274.167", cy: "179.621", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 47.323 -44.644)",
      path: {
        d: "M185.544 75.297v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "27": {
    unsettledSvgInfo: { cx: "90.653", cy: "201.073", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -136.19 -23.192)",
      path: {
        d: "M2.03 96.75v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "28": {
    unsettledSvgInfo: { cx: "127.362", cy: "201.022", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -99.482 -23.243)",
      path: {
        d: "M38.739 96.698v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "29": {
    unsettledSvgInfo: { cx: "164.071", cy: "200.97", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -62.773 -23.295)",
      path: {
        d: "M75.447 96.646v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "30": {
    unsettledSvgInfo: { cx: "200.78", cy: "200.918", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -26.064 -23.347)",
      path: {
        d: "M112.156 96.594v-2.392l-2.5 2.392v4h5v-4l-2.5-2.392",
        strokeWidth: 1
      },
    },
  },
  "31": {
    unsettledSvgInfo: { cx: "237.488", cy: "200.866", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 10.644 -23.399)",
      path: {
        d: "M148.865 96.543V94.15l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "32": {
    unsettledSvgInfo: { cx: "274.197", cy: "200.815", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 47.353 -23.45)",
      path: {
        d: "M185.574 96.49v-2.392l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "33": {
    unsettledSvgInfo: { cx: "109.023", cy: "211.644", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -117.821 -12.62)",
      path: {
        d: "M20.4 107.32v-2.392l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "34": {
    unsettledSvgInfo: { cx: "145.731", cy: "211.593", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -81.112 -12.672)",
      path: {
        d: "M57.108 107.269v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "35": {
    unsettledSvgInfo: { cx: "182.44", cy: "211.541", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -44.404 -12.724)",
      path: {
        d: "M93.817 107.217v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "36": {
    unsettledSvgInfo: { cx: "219.149", cy: "211.489", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -7.695 -12.776)",
      path: {
        d: "M130.525 107.165v-2.392l-2.5 2.392v4h5v-4l-2.5-2.392",
        strokeWidth: 1
      },
    },
  },
  "37": {
    unsettledSvgInfo: { cx: "255.858", cy: "211.437", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 29.014 -12.828)",
      path: {
        d: "M167.234 107.114v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "38": {
    unsettledSvgInfo: { cx: "109.052", cy: "232.838", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -117.791 8.573)",
      path: {
        d: "M20.43 128.514v-2.392l-2.5 2.392v4h5v-4l-2.5-2.392",
        strokeWidth: 1
      },
    },
  },
  "39": {
    unsettledSvgInfo: { cx: "145.761", cy: "232.786", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -81.083 8.521)",
      path: {
        d: "M57.138 128.463v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "40": {
    unsettledSvgInfo: { cx: "182.47", cy: "232.735", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -44.374 8.47)",
      path: {
        d: "M93.847 128.411v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "41": {
    unsettledSvgInfo: { cx: "219.179", cy: "232.683", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -7.665 8.418)",
      path: {
        d: "M130.555 128.36v-2.394l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "42": {
    unsettledSvgInfo: { cx: "255.887", cy: "232.631", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 29.044 8.366)",
      path: {
        d: "M167.264 128.307v-2.392l-2.5 2.392v4h5v-4l-2.5-2.392",
        strokeWidth: 1
      },
    },
  },
  "43": {
    unsettledSvgInfo: { cx: "127.422", cy: "243.409", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -99.422 19.144)",
      path: {
        d: "M38.798 139.085v-2.392l-2.5 2.392v4h5v-4l-2.5-2.392",
        strokeWidth: 1
      },
    },
  },
  "44": {
    unsettledSvgInfo: { cx: "164.131", cy: "243.357", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -62.713 19.092)",
      path: {
        d: "M75.507 139.034v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "45": {
    unsettledSvgInfo: { cx: "200.839", cy: "243.306", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -26.005 19.04)",
      path: {
        d: "M112.216 138.982v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "46": {
    unsettledSvgInfo: { cx: "237.548", cy: "243.254", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 10.704 18.989)",
      path: {
        d: "M148.925 138.93v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "47": {
    unsettledSvgInfo: { cx: "127.452", cy: "264.603", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -99.392 40.338)",
      path: {
        d: "M38.828 160.28v-2.394l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "48": {
    unsettledSvgInfo: { cx: "164.16", cy: "264.551", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -62.683 40.286)",
      path: {
        d: "M75.537 160.228v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "49": {
    unsettledSvgInfo: { cx: "200.869", cy: "264.499", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -25.975 40.234)",
      path: {
        d: "M112.246 160.176v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "50": {
    unsettledSvgInfo: { cx: "237.578", cy: "264.448", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 10.734 40.183)",
      path: {
        d: "M148.954 160.124v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "51": {
    unsettledSvgInfo: { cx: "145.821", cy: "275.174", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -81.023 50.909)",
      path: {
        d: "M57.198 170.85v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "52": {
    unsettledSvgInfo: { cx: "182.53", cy: "275.122", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -44.314 50.857)",
      path: {
        d: "M93.906 170.799v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
    },
  },
  "53": {
    unsettledSvgInfo: { cx: "219.238", cy: "275.07", r: 2 },
    settlementSvgInfo: {
      transform: "matrix(.74378 0 0 .74378 -7.605 50.805)",
      path: {
        d: "M130.615 170.747v-2.393l-2.5 2.393v4h5v-4l-2.5-2.393",
        strokeWidth: 1
      },
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

export const DEFAULT_NUMBERS: NumberSvgInfo[] = [
  {
    number: 8,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "52.751755", y: "28.059814" },
    tspanInfo: { x: "52.751755", y: "28.059814" },
  },
  {
    number: 12,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "47.994209", y: "28.059814" },
    tspanInfo: { x: "47.994209", y: "28.059814" },
  },
  {
    number: 2,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "52.751755", y: "28.059814" },
    tspanInfo: { x: "52.751755", y: "28.059814" },
  },
  {
    number: 3,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "52.751755", y: "28.059814" },
    tspanInfo: { x: "52.751755", y: "28.059814" },
  },
  {
    number: 4,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "53.282574", y: "28.059814" },
    tspanInfo: { x: "53.282574", y: "28.059814" },
  },
  {
    number: 5,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "52.751755", y: "28.059814" },
    tspanInfo: { x: "52.751755", y: "28.059814" },
  },
  {
    number: 6,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "52.751755", y: "28.059814" },
    tspanInfo: { x: "52.751755", y: "28.059814" },
  },
  {
    number: 8,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "52.751755", y: "28.059814" },
    tspanInfo: { x: "52.751755", y: "28.059814" },
  },
  {
    number: 9,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "52.751755", y: "28.059814" },
    tspanInfo: { x: "52.751755", y: "28.059814" },
  },
  {
    number: 10,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "47.994209", y: "28.059814" },
    tspanInfo: { x: "47.994209", y: "28.059814" },
  },
  {
    number: 11,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "49.055847", y: "28.059814" },
    tspanInfo: { x: "49.055847", y: "28.059814" },
  },
  {
    number: 4,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "53.282574", y: "28.059814" },
    tspanInfo: { x: "53.282574", y: "28.059814" },
  },
  {
    number: 5,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "52.751755", y: "28.059814" },
    tspanInfo: { x: "52.751755", y: "28.059814" },
  },
  {
    number: 6,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "52.751755", y: "28.059814" },
    tspanInfo: { x: "52.751755", y: "28.059814" },
  },
  {
    number: 10,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "47.994209", y: "28.059814" },
    tspanInfo: { x: "47.994209", y: "28.059814" },
  },
  {
    number: 9,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "52.751755", y: "28.059814" },
    tspanInfo: { x: "52.751755", y: "28.059814" },
  },
  {
    number: 11,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "49.055847", y: "28.059814" },
    tspanInfo: { x: "49.055847", y: "28.059814" },
  },
  {
    number: 3,
    circleInfo: { cx: "56.988392", cy: "23.297314", r: 10 },
    textInfo: { x: "52.751755", y: "28.059814" },
    tspanInfo: { x: "52.751755", y: "28.059814" },
  },
];

/**
 * The first element is the index of the tile a number could be on second is the transform to place that number
 * undefined is the first spot on the board
 *
 * Needed index to match number's transform up to a hex so we can remove the number from the desert hex
 *
 * This could be just an array in the correct order, but I wanted to be explicit about which transform goes on which tile
 */
export const DEFAULT_NUMBER_TRANSFORMS: [number, string | undefined][] = [
  [0, undefined],
  [1, "translate(36.708729,-0.05175909)"],
  [2, "translate(73.417459,-0.10351909)"],
  [3, "translate(-18.309541,31.816581)"],
  [4, "translate(18.399189,31.764821)"],
  [5, "translate(55.107919,31.713061)"],
  [6, "translate(91.816649,31.661291)"],
  [7, "translate(-36.619081,63.633151)"],
  [8, "translate(0.08964933,63.581391)"],
  [9, "translate(36.798382,63.529629)"],
  [10, "translate(73.507109,63.477871)"],
  [11, "translate(110.21584,63.426101)"],
  [12, "translate(-18.219891,95.397961)"],
  [13, "translate(18.488839,95.346201)"],
  [14, "translate(55.197569,95.294441)"],
  [15, "translate(91.906309,95.242681)"],
  [16, "translate(0.17929933,127.16278)"],
  [17, "translate(36.888029,127.11101)"],
  [18, "translate(73.596769,127.05925)"],
];

export const TILE_FLASH_DURATION = 3000;

export const ROLL_DURATION = 1000;

export const UNSELECTED_BUILD_COLOR = "#555555";

export const SELECTED_BUILD_COLOR = "#bb0000";
