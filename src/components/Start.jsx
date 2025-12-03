import React from 'react'

const Start = ({ start }) => {
  return (
    <div className="card">
      <h1>Quizify</h1>
      <p>Test your knowledge on MERN with a short quiz.</p>
      <button className="button" onClick={start}>Start Quiz</button>
    </div>
  )
}

export default Start
