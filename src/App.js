import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import "./App.css";
import makeLogo from "./makeathon logo transparent.png";
import particlesOptions from "./particles.json";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit} />
      <div>
        <img className="logo" src={makeLogo}></img>
      </div>
    </div>
  );
}

export default App;
