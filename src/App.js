import "./App.css";
import StartPage from "./component/startpage";
import GamePage from "./component/GamePage";
import { useState } from "react";

const App = () => {
  const [isGameRunning, setGameStatus] = useState(false);
  const toggleGameRunner = () => {
    setGameStatus((prev) => !prev);
  };

  return (
    <div>
      {isGameRunning ? <GamePage /> : <StartPage toggle={toggleGameRunner} />}
    </div>
  );
};

export default App;
