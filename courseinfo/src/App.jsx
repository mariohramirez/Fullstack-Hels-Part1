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
        {props.partDetails.name} {props.partDetails.exercises}
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }
  const parts = [
    part1,
    part2,
    part3
  ];

  return (
    <div>
      <Header courseName={course} />
      <Content courseParts={parts} />
      <Total
        numberExercises={
          part1.exercises + part2.exercises + part3.exercises
        }
      />
    </div>
  );
};

export default App;
