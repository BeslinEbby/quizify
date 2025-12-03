import React from 'react'

const Question=({ qstn, checkAnswer, selected, showCorrect })=>{
  return (
    <div>
      <h3 style={{margin: "12px 0"}}>{qstn.question}</h3>
      <div className="options">
        {qstn.options.map((opt) => {
          const isSelected = selected === opt
          const correct = showCorrect && qstn.answer === opt
          const wrong = isSelected && showCorrect && qstn.answer !== opt
          return (
             <div
                key={opt}
                className={`option ${correct ? "correct" : wrong ? "wrong" : ""}`}
                onClick={() => checkAnswer(opt)}
             >
                <span>{opt}</span>
                {correct &&<span>Correct Answer</span>}
             </div>
          );
        })}
      </div>
    </div>
  )
}

export default Question