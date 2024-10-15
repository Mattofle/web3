import { Context as CounterContext } from './Contexts/countersContext'
import { useContext, useState } from 'react'

function App() {
  const { counterGood, counterOk, counterBad, increaseGood, increaseOk, increaseBad, resetAll } = useContext(CounterContext)

  return (
    <div>
      <h1>Feedback</h1>
      <button onClick={increaseGood}>Good</button>
      <button onClick={increaseOk}>Ok</button>
      <button onClick={increaseBad}>Bad</button>
      <button onClick={resetAll}>Reset</button>
      <p>Good: {counterGood}</p>
      <p>Ok: {counterOk}</p>
      <p>Bad: {counterBad}</p>
    </div>
  )
}

export default App
