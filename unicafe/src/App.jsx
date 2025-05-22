import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const DisplayStats = (props) => {
  return(
      <p>{props.text}: {props.value}</p>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    setBad(bad + 1);
  };

  return <div>
    <h1>Give Feedback</h1>
    <div>
      <Button onClick={handleGoodClick} text="Good"/>
      <Button onClick={handleNeutralClick} text="Neutral"/>
      <Button onClick={handleBadClick} text="Bad"/>
    </div>
    <div>
      <h1>Statistics</h1>
      <DisplayStats text="Good" value={good}/>
      <DisplayStats text="Neutral" value={neutral}/>
      <DisplayStats text="Bad" value={bad}/>
    </div>
  </div>;
};

export default App;
