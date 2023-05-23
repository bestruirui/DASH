import "./App.css";
import RUINavbar from "./Navbar";
import Status from "./status";
import Docker from "./docker";
import { ThemeProvider, Spinner } from "@material-tailwind/react";
import { useApiData } from "./data";

function App() {
  const { isLoading } = useApiData();

  if (isLoading) {
    return (
      <div style={{"position": "absolute",
    "top": "50%",
    "left": "50%",
    "transform":" translate(-50%, -50%)"}}>
        <Spinner className="h-12 w-12" />
      </div>
    );
  }
  return (
    <ThemeProvider>
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
