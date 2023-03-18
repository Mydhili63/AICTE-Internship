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
const Average = (props) => {

  return (
    <div>
      Average : {props.average}
    </div>
  )
}
const History = (props) => {

  return (
    <div>
      all: {props.allClicks}
    </div>
  )
}

const Positive = (props =>{
  return(
    <div>
      Positive: {props.positive}%
    </div>
  )
})
const Statistics = (props) =>{
  const {good,neutral,bad,allClicks,average,positive} = props
  return(
    <div>
          <Good good={good}/>
          <Neutral neutral={neutral} />
          <Bad bad={bad}/>
          <History allClicks={allClicks} />
          <Average average={average} />
          <Positive positive ={positive}/>

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
  const [allClicks, setAll] = useState(0)
  const [positive,setPositive] = useState(0)
  const [average,setAverage] = useState(0)
  const handlegoodClick = () => {
    setAll(allClicks + 1)
    setGood(good + 1)
    setPositive(((good+1)/(allClicks+1))*100)
    setAverage((((good+1)*1) + (neutral*0) + (bad*-1))/(allClicks+1))
    
  }
  const handleneutralClick = () => {
    setAll(allClicks + 1)
    setNeutral(bad + 1)
    setPositive(((good)/(allClicks+1))*100)
    setAverage((((good)*1) + ((neutral+1)*0) + (bad*-1))/(allClicks+1))
  }
  const handlebadClick = () => {
    setAll(allClicks + 1)
    setBad(bad + 1)
    setPositive(((good)/(allClicks+1))*100)
    setAverage((((good)*1) + (neutral*0) + ((bad+1)*-1))/(allClicks+1))

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
    
      
      <Statistics good ={good} neutral={neutral} bad = {bad}  allClicks={allClicks}  average ={average} positive={positive}/>
      </div>
      
      
      
      
    </div>
  )
}
export default App