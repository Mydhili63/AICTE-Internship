import React, { useState } from 'react'
import { Button } from './components/button'
import { Statistics } from './components/statistics'
import { Title } from './components/title'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Title name={'give feedback'} />
      <Button name={'good'} func={setGood} value={good} />
      <Button name={'neutral'} func={setNeutral} value={neutral} />
      <Button name={'bad'} func={setBad} value={bad} />

      <Statistics name={'statistics'} good={good} neutral={neutral} bad={bad} />
    </div>
  )
}
export default App