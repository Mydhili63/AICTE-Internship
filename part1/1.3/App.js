const App = () =>{
  const course = 'Half Stack application development'
  const part1 = {
    name: "Fundamentals of React",
    exercises : 10
  }
  const part2 = {
    name:'Using props to pass data',
    exercises : 7
  } 
  const part3 = {
    name:'State of a component',
    exercises : 14
  } 
  const Header = (props) =>{
    
    return(
      <h1>{props.course}</h1>
    )
  }
  const Part1 = (props) =>{
    return(
      <div>
        <p>{props.part1} : {props.exercises}</p>
      </div>
    )
  }
  const Part2 = (props) =>{
    return(
      <div>
        <p>{props.part2 } : {props.exercises}</p>
      </div>
    )
  }
  const Part3 = (props) =>{
    return(
      <div>
        <p>{props.part3 } : {props.exercises}</p>
      </div>
    )
  }
  const Content =()=>{
  
    return(
      <div>
        <Part1  part1={part1.name} exercises={part1.exercises}/>
        <Part2  part2={part2.name} exercises={part2.exercises}/>
        <Part3 part3={part3.name} exercises={part3.exercises}/>
      </div>
    )
  }
  const Total = (props) =>{
    return (
      <p>Number of exercises : {part1.exercises+part2.exercises+part3.exercises}</p>
    )
  }

  return(
    <div>
      <Header course={course} />
      <Content />
      <Total />
    
    </div>
  )
  
}
export default App

