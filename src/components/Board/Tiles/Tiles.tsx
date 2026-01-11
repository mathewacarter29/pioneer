import { TILE_COLORS } from "./constants";
import Tile from "./Tile/Tile";
import classes from './Tiles.module.css';

const Tiles = () => {
  const getRows = (startingRowLength: number, maxRowLength: number) => {
    if (startingRowLength >= maxRowLength) {
      throw new Error('starting rows must be less than max row length to create board')
    }
    let rows = [];
    for (let numTiles = startingRowLength; numTiles <= maxRowLength; numTiles++) {
      let row = [];
      for (let i = 0; i < numTiles; i++) {
        row.push(<Tile tileColor={TILE_COLORS.BRICKYARD} />)
      }
      rows.push(row);
    }
    return rows;
  }

  return (
    <div>
      <h3>Tiles</h3>
      

        {getRows(3,5).map((row) => {
          return (
            <div style={{display: 'grid', 'gridTemplateColumns': 'auto '.repeat(row.length)}}>
              {row}
            </div>
          );
        })}

    </div>
  );
};

export default Tiles;
