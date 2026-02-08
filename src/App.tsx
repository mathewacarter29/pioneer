import "./App.css";
import Board from "./components/Board/Board";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#444544"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <h2>Pioneer</h2>
        <Board />
      </div>
    </ThemeProvider>
  );
}

export default App;
