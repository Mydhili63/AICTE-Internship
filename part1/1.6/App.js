import { useState } from "react"

const Good = (props) => {

  return (
    <div>
      Good : {props.good}
    </div>
  )
}
const Bad = (props) => {

  return (
    <div>
      Bad : {props.bad}
    </div>
  )
}
const Neutral = (props) => {

  return (
    <div>
      Neutral : {props.neutral}
    </div>
  )
}
const Button = (props) => {
  console.log(props)
  const { handleClick, text } = props
  return(
    <button onClick={handleClick}>
    {text}
  </button>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handlegoodClick = () => {
    
    setGood(good + 1)
  }
  const handleneutralClick = () => {
    
    setNeutral(bad + 1)
  }
  const handlebadClick = () => {
    
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={handlegoodClick} text='good' />
      <Button handleClick={handleneutralClick} text='neutral' />
      <Button handleClick={handlebadClick} text='bad' />

      <h1>
        Statistics
      </h1>
      <div>
      <Good good ={good}/>
      <Neutral neutral={neutral} />
      <Bad bad = {bad} />
      
      </div>
      
      
      
      
    </div>
  )
}
export default App
