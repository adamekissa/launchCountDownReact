import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(5);
  const display = updateDisplay(count)

  function decrease(){
    if (count >= 1){
      setCount((count) => count - 1)
    } else{
      setCount(0)
  
  }
}

function reset(){
  setCount(5);
}
  function updateDisplay(b){
    if (b === 0 ){
      return "🚀"
    } else if (b === 1 ){
      return "👩🏽‍🚀"
    } else {
      return b
    }
  }

  return (
    <>
    <h3>Launch Count Down App - Mohammed</h3>
      <div className="card">
        <p className="diplay" style={{fontSize: 50}}>{display}</p>
        <p>{count}</p>
        <button onClick={decrease}>
          Decrease
        </button>
        <button onClick={reset}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
