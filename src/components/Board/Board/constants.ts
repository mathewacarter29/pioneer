export const TILE_COLORS = {
  PLAINS: "#A0DE7E",
  FIELD: "#F0F878",
  QUARRY: "#404040",
  FORREST: "#06440A",
  BRICKYARD: "#773A18",
  DESSERT: "#FFD900",
} as const;
export type TileColorType = (typeof TILE_COLORS)[keyof typeof TILE_COLORS];

export const DEFAULT_TILES = [
  TILE_COLORS.FIELD,
  TILE_COLORS.FORREST,
  TILE_COLORS.PLAINS,
  TILE_COLORS.BRICKYARD,
  TILE_COLORS.QUARRY,
  TILE_COLORS.DESSERT,
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
  d: string;
  transform: string;
}
export const DEFAULT_HEXES: HexSvgInfo[] = [
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 168.027 170.765)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 167.937 107.183)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 223.135 202.478)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 168.116 234.346)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 112.919 139.052)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 186.336 138.948)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 149.717 202.581)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 94.61 170.868)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 131.228 107.235)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 241.444 170.661)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 204.825 234.294)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 149.627 139)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 223.045 138.896)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 113.008 202.633)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 186.426 202.53)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 204.735 170.713)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 131.318 170.816)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 204.646 107.131)",
  },
  {
    d: "M116.22 106.995 51.143 144.69l-65.181-37.51-.106-75.203L50.932-5.718l65.181 37.51Z",
    transform: "matrix(.28182 0 0 .28182 131.408 234.398)",
  },
];

export interface EdgeSvgInfo {
  d: string;
  transform?: string;
}
export const DEFAULT_EDGES: EdgeSvgInfo[] = [
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

export interface CircleSvgInfo {
  cx: string;
  cy: string;
  r: string;
}
export const DEFAULT_VERTICES: CircleSvgInfo[] = [
  { cx: "127.243", cy: "116.246", r: "2" },
  { cx: "145.582", cy: "105.624", r: "2" },
  { cx: "163.951", cy: "116.195", r: "2" },
  { cx: "182.291", cy: "105.572", r: "2" },
  { cx: "200.66", cy: "116.143", r: "2" },
  { cx: "218.999", cy: "105.52", r: "2" },
  { cx: "237.369", cy: "116.091", r: "2" },
  { cx: "127.272", cy: "137.44", r: "2" },
  { cx: "108.933", cy: "148.063", r: "2" },
  { cx: "108.963", cy: "169.257", r: "2" },
  { cx: "90.623", cy: "179.88", r: "2" },
  { cx: "90.653", cy: "201.073", r: "2" },
  { cx: "109.023", cy: "211.644", r: "2" },
  { cx: "109.052", cy: "232.838", r: "2" },
  { cx: "127.422", cy: "243.409", r: "2" },
  { cx: "127.452", cy: "264.603", r: "2" },
  { cx: "145.821", cy: "275.174", r: "2" },
  { cx: "164.16", cy: "264.551", r: "2" },
  { cx: "182.53", cy: "275.122", r: "2" },
  { cx: "200.869", cy: "264.499", r: "2" },
  { cx: "219.238", cy: "275.07", r: "2" },
  { cx: "237.578", cy: "264.448", r: "2" },
  { cx: "237.548", cy: "243.254", r: "2" },
  { cx: "255.887", cy: "232.631", r: "2" },
  { cx: "255.858", cy: "211.437", r: "2" },
  { cx: "274.197", cy: "200.815", r: "2" },
  { cx: "274.167", cy: "179.621", r: "2" },
  { cx: "255.798", cy: "169.05", r: "2" },
  { cx: "255.768", cy: "147.856", r: "2" },
  { cx: "237.399", cy: "137.285", r: "2" },
  { cx: "163.981", cy: "137.388", r: "2" },
  { cx: "182.35", cy: "147.959", r: "2" },
  { cx: "200.69", cy: "137.337", r: "2" },
  { cx: "219.059", cy: "147.908", r: "2" },
  { cx: "219.089", cy: "169.101", r: "2" },
  { cx: "237.458", cy: "179.672", r: "2" },
  { cx: "237.488", cy: "200.866", r: "2" },
  { cx: "219.149", cy: "211.489", r: "2" },
  { cx: "219.179", cy: "232.683", r: "2" },
  { cx: "200.839", cy: "243.306", r: "2" },
  { cx: "182.47", cy: "232.735", r: "2" },
  { cx: "164.131", cy: "243.357", r: "2" },
  { cx: "145.761", cy: "232.786", r: "2" },
  { cx: "145.731", cy: "211.593", r: "2" },
  { cx: "127.362", cy: "201.022", r: "2" },
  { cx: "127.332", cy: "179.828", r: "2" },
  { cx: "145.672", cy: "169.205", r: "2" },
  { cx: "145.642", cy: "148.011", r: "2" },
  { cx: "164.041", cy: "179.776", r: "2" },
  { cx: "182.38", cy: "169.153", r: "2" },
  { cx: "200.75", cy: "179.724", r: "2" },
  { cx: "200.78", cy: "200.918", r: "2" },
  { cx: "182.44", cy: "211.541", r: "2" },
  { cx: "164.071", cy: "200.97", r: "2" },
];

export interface CoordinateSvgInfo {
  x: string;
  y: string;
}

export interface NumberSvgInfo {
  circleInfo: CircleSvgInfo;
  textInfo: CoordinateSvgInfo;
  tspanInfo: CoordinateSvgInfo;
  transform?: string;
}

export const DEFAULT_NUMBERS: NumberSvgInfo[] = [
  { transform: undefined, circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "52.751755", y: "28.059814" }, tspanInfo: { x: "52.751755", y: "28.059814" } },
  { transform: "translate(36.708729,-0.05175909)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "47.994209", y: "28.059814" }, tspanInfo: { x: "47.994209", y: "28.059814" } },
  { transform: "translate(73.417459,-0.10351909)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "52.751755", y: "28.059814" }, tspanInfo: { x: "52.751755", y: "28.059814" } },
  { transform: "translate(-18.309541,31.816581)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "52.751755", y: "28.059814" }, tspanInfo: { x: "52.751755", y: "28.059814" } },
  { transform: "translate(18.399189,31.764821)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "53.282574", y: "28.059814" }, tspanInfo: { x: "53.282574", y: "28.059814" } },
  { transform: "translate(55.107919,31.713061)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "52.751755", y: "28.059814" }, tspanInfo: { x: "52.751755", y: "28.059814" } },
  { transform: "translate(91.816649,31.661291)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "52.751755", y: "28.059814" }, tspanInfo: { x: "52.751755", y: "28.059814" } },
  { transform: "translate(-36.619081,63.633151)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "52.751755", y: "28.059814" }, tspanInfo: { x: "52.751755", y: "28.059814" } },
  { transform: "translate(0.08964933,63.581391)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "52.751755", y: "28.059814" }, tspanInfo: { x: "52.751755", y: "28.059814" } },
  { transform: "translate(36.798382,63.529629)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "47.994209", y: "28.059816" }, tspanInfo: { x: "47.994209", y: "28.059816" } },
  { transform: "translate(73.507109,63.477871)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "49.055847", y: "28.059814" }, tspanInfo: { x: "49.055847", y: "28.059814" } },
  { transform: "translate(110.21584,63.426101)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "53.282574", y: "28.059814" }, tspanInfo: { x: "53.282574", y: "28.059814" } },
  { transform: "translate(91.906309,95.242681)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "47.994209", y: "28.059814" }, tspanInfo: { x: "47.994209", y: "28.059814" } },
  { transform: "translate(55.197569,95.294441)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "52.751755", y: "28.059814" }, tspanInfo: { x: "52.751755", y: "28.059814" } },
  { transform: "translate(18.488839,95.346201)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "52.751755", y: "28.059814" }, tspanInfo: { x: "52.751755", y: "28.059814" } },
  { transform: "translate(-18.219891,95.397961)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "52.751755", y: "28.059814" }, tspanInfo: { x: "52.751755", y: "28.059814" } },
  { transform: "translate(0.17929933,127.16278)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "49.055847", y: "28.059814" }, tspanInfo: { x: "49.055847", y: "28.059814" } },
  { transform: "translate(36.888029,127.11101)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "52.751755", y: "28.059814" }, tspanInfo: { x: "52.751755", y: "28.059814" } },
  { transform: "translate(73.596769,127.05925)", circleInfo: { cx: "56.988392", cy: "23.297314", r: "10" }, textInfo: { x: "52.751755", y: "28.059814" }, tspanInfo: { x: "52.751755", y: "28.059814" } },
];

export const DEFAULT_NUMBER_VALUES: string[] = [
  "8", "12", "2", "3", "4", "5", "6", "8", "9", "10", "11", "4", "10", "9", "6", "5", "11", "3", "7"
];
