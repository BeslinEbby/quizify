import React from 'react'

const Result=({ result, restart })=>{
  if(!result) return null
  return (
    <div className="card">
      <h1>Quiz Result</h1>
      <p>Your score: {result.score} / {result.total}</p>
      <button className="button" onClick={restart}>Restart Quiz</button>
    </div>
  )
}

export default Result