import "./App.css";
import Table from "./components/Table/Table";
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
        <Table />
      </div>
    </ThemeProvider>
  );
}

export default App;
