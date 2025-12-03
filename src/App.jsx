import React, { useState } from 'react'
import Start from './components/Start'
import Quiz from './components/Quiz'

const App = () => {

  const [screen, setScreen]=useState("start")
  const [result, setResult]=useState(null)

  const finishHandler=(res)=>{
    setScreen("result")
    setResult(res)
  }
  return (
    <div className='app-container'>
      {screen == "start" && <Start start={()=>setScreen("quiz")}/>}
      {screen == "quiz" && <Quiz finish={finishHandler}/>}
    </div>
  )
}

export default App