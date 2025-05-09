const Header = (props) => {
  return (
    <>
      <h1>{props.courseName}</h1>
    </>
  );
};

const Part = (props) => {
  return (
    <>
      <p>
        {props.partDetails.name} {props.partDetails.exercise}
      </p>
    </>
  );
};

const Content = (props) => {
  return (
    <>
      <Part partDetails={props.courseParts[0]} />
      <Part partDetails={props.courseParts[1]} />
      <Part partDetails={props.courseParts[2]} />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>Number of exercises {props.numberExercises}</p>
    </>
  );
};

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
      <Total
        numberExercises={
          parts[0].exercise + parts[1].exercise + parts[2].exercise
        }
      />
    </div>
  );
};

export default App;
