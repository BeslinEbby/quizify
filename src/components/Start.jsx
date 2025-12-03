import React from 'react'

export default function Start({ onStart }){
  return (
    <div className="card">
      <h1>Quizify</h1>
      <p>Test your knowledge on MERN with a short quiz.</p>
      <button className="button" onClick={onStart}>Start Quiz</button>
    </div>
  )
}
