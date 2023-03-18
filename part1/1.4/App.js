const App = () =>{
  const course = 'Half Stack application development'
  const parts =[
    {
      name: "Fundamentals of React",
      exercises : 10
    },
    {
      name:'Using props to pass data',
      exercises : 7
    },
    {
      name:'State of a component',
      exercises : 14
    }  
  ]
  const Header = (props) =>{
    
    return(
      <h1>{props.course}</h1>
    )
  }
  const Part1 = (props) =>{
    return(
      <div>
        <p>{props.name} : {props.exercises}</p>
      </div>
    )
  }
  const Part2 = (props) =>{
    return(
      <div>
        <p>{props.name } : {props.exercises}</p>
      </div>
    )
  }
  const Part3 = (props) =>{
    return(
      <div>
        <p>{props.name } : {props.exercises}</p>
      </div>
    )
  }
  const Content =()=>{
  
    return(
      <div>
        <Part1  name={parts[0].name} exercises={parts[0].exercises}/>
        <Part2  name={parts[1].name} exercises={parts[1].exercises}/>
        <Part3  name={parts[2].name} exercises={parts[2].exercises}/>
      </div>
    )
  }
  const Total = (props) =>{
    return (
      <p>Number of exercises : {parts[0].exercises+parts[1].exercises+parts[2].exercises}</p>
    )
  }

  return(
    <div>
      <Header course={course} />
      <Content parts={parts}/>
      <Total parts={parts}/>
    
    </div>
  )
  
}
export default App

