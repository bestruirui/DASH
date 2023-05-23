import React, { useState, useEffect } from "react";
import "./App.css";
import RUINavbar from "./Navbar";
import Status from "./status";
import Docker from "./docker";
import { ThemeProvider } from "@material-tailwind/react";
import { useApiData } from "./data";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { isLoading } = useApiData();

  useEffect(() => {
    window.addEventListener("load", () => {
      setIsLoaded(true);
    });
  }, []);

  if (!isLoaded || isLoading) {
    return <div>Loading...</div>;
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
