import { useState } from "react";
import Game from "./components/Game";
import { Landing } from "./components/Landing";

function App() {
  const [started, setStarted] = useState(false);

  return started ? <Game /> : <Landing onStart={() => setStarted(true)} />;
}

export default App;
