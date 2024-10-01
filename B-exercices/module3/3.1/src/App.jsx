import { useState } from 'react'
import History from './Components/Statistics/Statistics'
import Button from './Components/Buttons/Buttons'


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  

  const handleClick = (e) => {
    if (e.target.className === 'good') {
      setGood(good + 1)
    }
    if (e.target.className === 'neutral') {
      setNeutral(neutral + 1)
    }
    if (e.target.className === 'bad') {
      setBad(bad + 1)
    }
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button value='good' onClick={handleClick} />
      <Button value='neutral' onClick={handleClick} />
      <Button value='bad' onClick={handleClick} />

      <h1>statistics</h1>
      <History good={good} bad={bad} neutral={neutral} />
    </div>
  )
}

export default App