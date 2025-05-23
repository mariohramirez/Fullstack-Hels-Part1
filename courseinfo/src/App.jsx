const Header = (props) => {
  return (
    <>
      <h1>{props.name}</h1>
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
      <Part partDetails={props.parts[0]} />
      <Part partDetails={props.parts[1]} />
      <Part partDetails={props.parts[2]} />
    </>
  );
};

const Total = (props) => {
  return (
    <>
      <p>
        Number of exercises{" "}
        {props.parts[0].exercise +
          props.parts[1].exercise +
          props.parts[2].exercise}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercise: 10 },
      { name: "Using props to pass data", exercise: 7 },
      { name: "State of a component", exercise: 14 },
    ],
  };
  return (
    <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App;
