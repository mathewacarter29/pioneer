import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { getRandomInt } from "../utils/numbers";
import { PANEL_BACKGROUND_COLOR } from "../components/constants";

const Start = () => {
  let navigate = useNavigate();
  const startGame = () => {
    // navigate to a new game screen with a random game ID
    const keyWords = ["wheat", "sheep", "brick", "ore", "wood", "forest", "pioneer"]
    const suffix = String(getRandomInt(1000)).padStart(4, '0')
    navigate(keyWords[getRandomInt(keyWords.length)] + suffix)
  }

  return (
    <div style={{backgroundColor: PANEL_BACKGROUND_COLOR, padding: '2vw', width: '50%', margin: 'auto'}}>
      <h1 style={{marginTop: 0}}>Welcome to Pioneer!</h1>
      <h2>Rules</h2>
      <p style={{ marginBottom: '2vw'}}>
        Players will take turns rolling dice in order to collect resources.
        Using these resources, players will build Roads, Settlements, and Cities in order to collect points.
        Each Settlement is worth 1 point, each City is worth 2 points.
        A player wins when they reach 10 points.
      </p>

      <Button onClick={startGame} variant="contained">Play Game</Button>
    </div>
  );
}

export default Start