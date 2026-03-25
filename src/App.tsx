import { Route, Routes } from "react-router";
import "./App.css";
import Game from "./pages/Game";
import Start from "./pages/Start";
import { ThemeProvider, createTheme } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#444544",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="pioneer">
          <Route index element={<Start />} />
          <Route path=":gameId" element={<Game />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
