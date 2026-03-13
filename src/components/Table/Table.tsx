import { useMemo, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Board from "./Board/Board";
import {
  Button,
  TableContainer,
  Table as MuiTable,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
  tableCellClasses,
} from "@mui/material";
import { getRandomInt } from "../../utils/numbers";
import Die from "./Die/Die";
import {
  BOARD_HEIGHT,
  BOTTOM_BUTTON_DIV_HEIGHT,
  MIN_BOARD_DIMENSIONS,
  PLAYER_BUILD_TEXT,
  PLAYER_ROAD_TEXT,
  PLAYER_ROBBER_TEXT,
  PLAYER_ROLL_TEXT,
  PLAYER_SETTLEMENT_TEXT,
  ROLL_DURATION,
  TILE_FLASH_DURATION,
} from "../constants";

export type Builds = "ROAD" | "CITY" | "SETTLEMENT" | "DEVELOPMENT_CARD" | "";
export type Resource = "SHEEP" | "WHEAT" | "BRICK" | "WOOD" | "ORE" | "";

export interface Player {
  color: string;
  hand: Resource[];
  name: string;
  id: string;
}

const Table = () => {
  const getInstructionText = (text: string, playerIndex: number): string => {
    if (!text.includes("playerName")) {
      throw new Error(
        'getInstructionText replaces "playerName" with the current player name. Ensure it is in the given string.',
      );
    }
    return text.replace("playerName", players[playerIndex].name);
  };
  const getPlayers = (): Player[] => {
    return [
      { color: "#bb0000", hand: [], name: "Player 1", id: uuidv4() },
      { color: "#00bb00", hand: [], name: "Player 2", id: uuidv4() },
    ];
  };
  const [dice, setDice] = useState<[number, number]>([0, 0]);
  const [isRolling, setIsRolling] = useState<boolean>(false);
  const [selectedBuild, setSelectedBuild] = useState<Builds>("SETTLEMENT");
  const [players, setPlayers] = useState<Player[]>(getPlayers());
  const [gameRound, setGameRound] = useState<number>(0);
  const [instructionText, setInstructionText] = useState<string>(getInstructionText(PLAYER_SETTLEMENT_TEXT, 0));
  const [isTurnOngoing, setIsTurnOngoing] = useState<boolean>(false);
  const [isFlashing, setIsFlashing] = useState<boolean>(false);
  const [hasMovedRobber, setHasMovedRobber] = useState<boolean>(true);
  const myPlayerIndex = useMemo<number>(() => {
    return 0;
  }, []);

  const getPlayerIndex = (round: number, numPlayers: number, numInitialPhaseRounds: number) => {
    if (round >= numInitialPhaseRounds) {
      // use >= here since game round starts at 0
      return (round - numInitialPhaseRounds) % numPlayers;
    } else if (round < numInitialPhaseRounds / 2) {
      return Math.floor(round / 2) % numPlayers;
    } else {
      return Math.abs(numPlayers - 1 - (Math.floor(round / 2) % numPlayers));
    }
  };

  // num rounds = # players * # rounds * 2 (1 city build and 1 road build)
  const totalInitialBuildRounds = players.length * 2 * 2;
  const currPlayerIndex = getPlayerIndex(gameRound, players.length, totalInitialBuildRounds);
  const isInitialBuildPhase = gameRound < totalInitialBuildRounds;
  const selectedButtonStyle = {
    backgroundColor: "floralwhite",
    color: "black",
  };
  const sidePanelStyle = {
    margin: "2vw",
    width: "12vw",
    display: "flex",
    flexDirection: "column" as const, // need to do this or else you get typescript error
    height: BOARD_HEIGHT,
    minHeight: MIN_BOARD_DIMENSIONS,
    justifyContent: "space-between",
    padding: "5px",
    backgroundColor: "#1a5725",
  };

  const onClickBuild = (build: Builds) => {
    setSelectedBuild((prev) => {
      return build === prev ? "" : build;
    });
  };

  const getRandomDiceValues = (): [number, number] => {
    return [getRandomInt(6) + 1, getRandomInt(6) + 1];
  };

  const initialBuildPhaseStep = () => {
    setGameRound((prevRound) => {
      const newRound = prevRound + 1;
      if (newRound >= totalInitialBuildRounds) {
        // if this round is more than totalRounds, play the regular game
        setSelectedBuild("");
        setInstructionText(getInstructionText(PLAYER_ROLL_TEXT, currPlayerIndex));
      } else if (newRound % 2 === 1) {
        // if this round is odd, we are building a road
        setSelectedBuild("ROAD");
        setInstructionText(getInstructionText(PLAYER_ROAD_TEXT, currPlayerIndex));
      } else {
        // if even, we are building a settlement
        setSelectedBuild("SETTLEMENT");
        setInstructionText(getInstructionText(PLAYER_SETTLEMENT_TEXT, currPlayerIndex));
      }
      return newRound;
    });
  };

  const onRollDice = () => {
    setIsRolling(true);
    // cycle through dice numbers
    let timerId = setInterval(() => {
      setDice(getRandomDiceValues());
    }, 100);
    setTimeout(() => {
      // stop rolling
      const finalRoll = getRandomDiceValues();
      clearInterval(timerId);
      setIsRolling(false);
      setDice(finalRoll);
      if (finalRoll[0] + finalRoll[1] !== 7) {
        // if normal roll, flash rolled tiles
        setInstructionText(getInstructionText(PLAYER_BUILD_TEXT, currPlayerIndex));
        setIsFlashing(true);
        setTimeout(() => {
          setIsFlashing(false);
          setIsTurnOngoing(true);
        }, TILE_FLASH_DURATION);
      } else {
        // if rolled robber, dont flash
        setInstructionText(getInstructionText(PLAYER_ROBBER_TEXT, currPlayerIndex));
        setHasMovedRobber(false);
        setIsTurnOngoing(true);
      }
    }, ROLL_DURATION);
  };

  const onEndTurn = () => {
    setSelectedBuild("");
    setGameRound((prev) => {
      const nextRound = prev + 1;
      setInstructionText(getInstructionText(PLAYER_ROLL_TEXT, currPlayerIndex));
      return nextRound;
    });
    setIsTurnOngoing(false);
  };

  interface BuildButtonProps {
    buildType: Builds;
    text: string;
  }
  /**
   * @param props Build type and what the button should say
   * @returns A button at the bottom of the screen to build something
   */
  const BuildButton = (props: BuildButtonProps) => {
    return (
      <Button
        fullWidth
        variant="contained"
        onClick={() => onClickBuild(props.buildType)}
        disabled={!isTurnOngoing || !hasMovedRobber}
        style={
          selectedBuild === props.buildType && gameRound >= totalInitialBuildRounds
            ? { ...selectedButtonStyle }
            : undefined
        }
      >
        {props.text}
      </Button>
    );
  };

  /**
   * Shows players what cards they have
   * @returns a table with each resource quantity owned by the player
   */
  const CardTable = () => {
    const Cell = styled(TableCell)(() => ({
      [`&.${tableCellClasses.body}`]: {
        color: "white",
        fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
        innerWidth: '50%'
      },
      [`&.${tableCellClasses.head}`]: {
        color: "white",
        fontSize: 15,
        fontFamily: "system-ui, Avenir, Helvetica, Arial, sans-serif",
        innerWidth: '50%'
      },
    }));

    const getResourceCount = (hand: Resource[], resource: Resource): number => {
      return hand.reduce((acc, curr) => {
        return curr === resource ? acc + 1 : acc;
      }, 0);
    };

    return (
      <TableContainer>
        <MuiTable aria-label="card-table">
          <TableHead>
            <TableRow>
              <Cell>Card Type</Cell>
              <Cell>Quantity</Cell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <Cell>Wheat</Cell>
              <Cell>{getResourceCount(players[myPlayerIndex].hand, "WHEAT")}</Cell>
            </TableRow>
            <TableRow>
              <Cell>Sheep</Cell>
              <Cell>{getResourceCount(players[myPlayerIndex].hand, "SHEEP")}</Cell>
            </TableRow>
            <TableRow>
              <Cell>Wood</Cell>
              <Cell>{getResourceCount(players[myPlayerIndex].hand, "WOOD")}</Cell>
            </TableRow>
            <TableRow>
              <Cell>Brick</Cell>
              <Cell>{getResourceCount(players[myPlayerIndex].hand, "BRICK")}</Cell>
            </TableRow>
            <TableRow>
              <Cell>Ore</Cell>
              <Cell>{getResourceCount(players[myPlayerIndex].hand, "ORE")}</Cell>
            </TableRow>
          </TableBody>
        </MuiTable>
      </TableContainer>
    );
  };

  /**
   * Board.tsx calls this function after the user clicks a hex to move the robber to
   */
  const afterMoveRobber = () => {
    setHasMovedRobber(true);
    setInstructionText(getInstructionText(PLAYER_BUILD_TEXT, currPlayerIndex));
  };

  /**
   * Add resources provided by Board to each players hand
   * @param cardsToGive Map<Player ID, list of resources to add to their hand>
   */
  const giveResources = (cardsToGive: Record<string, Resource[]>) => {
    setPlayers((prev) => {
      return prev.map((player) => {
        return {...player,
          hand: [...player.hand, ...cardsToGive[player.id] ?? []]
        }
      })
    })
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "end" }}>
        <div style={sidePanelStyle}>
          <div>
            <h2>Player Name: {players[myPlayerIndex].name}</h2>
          </div>
          <div>
            <CardTable />
          </div>
        </div>
        <Board
          selectedBuild={selectedBuild}
          onBuild={() => {
            if (gameRound >= players.length * 2 * 2) {
              setSelectedBuild("");
              return;
            }
            initialBuildPhaseStep();
          }}
          numberRolled={isRolling ? 0 : dice[0] + dice[1]}
          currPlayer={players[currPlayerIndex]}
          afterMoveRobber={afterMoveRobber}
          giveResources={giveResources}
        />
        <div style={sidePanelStyle}>
          <div>
            <h4>{isInitialBuildPhase ? "Initial Build Phase" : `Round ${gameRound - totalInitialBuildRounds + 1}`}</h4>
          </div>
          <div>
            <h2>{instructionText}</h2>
          </div>
          <div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "1vw",
                margin: "1vh",
              }}
            >
              <Die value={dice[0]} isRolling={isRolling} />
              <Die value={dice[1]} isRolling={isRolling} />
            </div>
            <Button
              fullWidth
              variant="contained"
              onClick={() => onRollDice()}
              disabled={isTurnOngoing || isInitialBuildPhase || isRolling || isFlashing}
            >
              Roll Dice
            </Button>
          </div>
        </div>
      </div>
      <div style={{ height: BOTTOM_BUTTON_DIV_HEIGHT, marginBottom: "2vh" }} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          gap: "1vw",
          position: "fixed",
          bottom: "2vh",
          left: 0,
          right: 0,
          width: "60%",
          margin: "auto",
          height: BOTTOM_BUTTON_DIV_HEIGHT,
        }}
      >
        <BuildButton buildType="ROAD" text={"Road"} />
        <BuildButton buildType="SETTLEMENT" text={"Settlement"} />
        <BuildButton buildType="CITY" text={"City"} />
        <BuildButton buildType="DEVELOPMENT_CARD" text={"Development Card"} />
        <Button style={{ visibility: "hidden" }} /> {/* For spacing */}
        <Button
          fullWidth
          variant="contained"
          onClick={() => onEndTurn()}
          disabled={!isTurnOngoing || isInitialBuildPhase || isRolling || !hasMovedRobber}
        >
          End Turn
        </Button>
      </div>
    </div>
  );
};

export default Table;
