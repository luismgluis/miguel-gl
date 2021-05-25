import React from "react";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import "./App.css";
import Home from "./components/Home/Home";
import { useWindowSize } from "./utils/windowResize";
const App: React.FC<any> = () => {
  const [winX, winY] = useWindowSize();
  const appSize = {
    width: winX,
    height: winY,
    overflow: "hidden",
  };
  return (
    <div className="App" style={appSize}>
      <TopNavBar />
      <div style={{ paddingTop: "50px" }}>
        <Home />
      </div>
    </div>
  );
};
export default App;
