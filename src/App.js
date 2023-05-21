import "./App.css";
import RUINavbar from "./Navbar";
import Status from "./status";
import Docker from "./docker";
import { ThemeProvider } from "@material-tailwind/react";
function App() {
  const customTheme = {
    
  };
  return (
    <ThemeProvider value={customTheme}>
      <div className="App">
        <RUINavbar />
        <div
          className="Body"
          style={{
            display: "flex",
            "flex-flow": "row wrap",
            "justify-content": "center",
            "align-items": "baseline",
          }}
        >
          <Status />
          <Docker />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
