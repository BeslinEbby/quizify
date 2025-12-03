import React, { useState } from "react";
import Start from "./components/Start";
import Quiz from "./components/Quiz";
import Result from "./components/Result";

const App = () => {
   const [screen, setScreen] = useState("start");
   const [result, setResult] = useState(null);

   const finishHandler = (res) => {
      setScreen("result");
      setResult(res);
   };
   const restartHandler = () => {
      setResult(null);
      setScreen("start");
   };

   return (
      <div className="app-container">
         {screen == "start" && <Start start={() => setScreen("quiz")} />}
         {screen == "quiz" && <Quiz finish={finishHandler} />}
         {screen === "result" && <Result result={result} restart={restartHandler} />}
      </div>
   );
};

export default App;
