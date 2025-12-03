import React, { useState } from "react";
import { questions } from "../questions";
import Question from "./Question";

const Quiz=({ finish }) => {

   const [index, setIndex] = useState(0);
   const [selected, setSelected] = useState(null);
   const [score, setScore] = useState(0);
   const [showCorrect, setShowCorrect] = useState(false);

   const qstn = questions[index];

   const checkAnswer = (opt) => {
      if (showCorrect) return; 
      setSelected(opt);
      setShowCorrect(true);
      if (opt === qstn.answer) setScore((s) => s + 1);
   }

   const next=()=> {
      setSelected(null);
      setShowCorrect(false);
      if (index + 1 < questions.length) {
         setIndex(index + 1);
      } else {
         finish({ score, total: questions.length });
      }
   }

   return (
      <div className="card">
         <div className="flex-center">
            <div>
               Question {index + 1} / {questions.length}
            </div>
         </div>

         <Question qstn={qstn} checkAnswer={checkAnswer} selected={selected} showCorrect={showCorrect} />

         <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
            <button className="button" onClick={next}>
               Next
            </button>
         </div>
      </div>
   );
}

export default Quiz