const App = () =>{
  const course ={
    name:  'Half Stack application development',
    parts :[
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
  }
  const Header = (props) =>{
    
    return(
      <h1>{props.name}</h1>
    )
  }
  const Part1 = (props) =>{
    return(
      <div>
        <p>{props.name1} : {props.parts} </p>
      </div>
    )
  }
  const Part2 = (props) =>{
    return(
      <div>
        <p>{props.name2} : {props.parts}</p>
      </div>
    )
  }
  const Part3 = (props) =>{
    return(
      <div>
        <p>{props.name3} : {props.parts}</p>
      </div>
    )
  }
  const Content =()=>{
  
    return(
      <div>
        <Part1 name1={course.parts[0].name} parts={course.parts[0].exercises}/>
        <Part2  name2 ={course.parts[1].name} parts={course.parts[1].exercises}/>
        <Part3 name3 ={course.parts[2].name} parts={course.parts[2].exercises}/>
      </div>
    )
  }
  const Total = (props) =>{
    return (
      <p>Number of exercises : {course.parts[0].exercises+course.parts[1].exercises+course.parts[2].exercises}</p>
    )
  }

  return(
    <div>
      <Header name={course.name} />
      <Content />
      <Total/>
    
    </div>
  )
  
}
export default App