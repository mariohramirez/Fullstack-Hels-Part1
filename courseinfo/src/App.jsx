const Header = (props) => {
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <p>
        {props.courseParts[0].name} {props.courseParts[0].exercise}
      </p>
      <p>
        {props.courseParts[1].name} {props.courseParts[1].exercise}
      </p>
      <p>
        {props.courseParts[2].name} {props.courseParts[2].exercise}
      </p>
    </>
  );
};

const Total = (props) => {
  return(
    <>
      <p>Number of exercises {props.numberExercises}</p>
    </>
  )
}

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    { name: "Fundamentals of React", exercise: 10 },
    { name: "Using props to pass data", exercise: 7 },
    { name: "State of a component", exercise: 14 },
  ];

  return (
    <div>
      <Header courseName={course} />
      <Content courseParts={parts} />
      <Total numberExercises={parts[0].exercise+parts[1].exercise+parts[2].exercise}/>
    </div>
  );
};

export default App;
