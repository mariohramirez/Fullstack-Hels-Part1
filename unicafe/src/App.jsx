import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const DisplayStats = (props) => {
  if (props.text === "Positive") {
    return (
      <p>
        {props.text}: {props.value} %
      </p>
    );
  }
  return (
    <p>
      {props.text}: {props.value}
    </p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [total, setTotal] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    const updatedTotal = updatedGood + bad + neutral;
    setTotal(updatedTotal);
    setAverage((updatedGood - bad) / updatedTotal);
    setPositive((updatedGood * 100) / updatedTotal);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    const updatedTotal = updatedNeutral + good + bad;
    setTotal(updatedTotal);
    setAverage((good - bad) / updatedTotal);
    setPositive((good * 100) / updatedTotal);
  };
  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    const updatedTotal = updatedBad + good + neutral;
    setTotal(updatedTotal);
    setAverage((good - updatedBad) / updatedTotal);
    setPositive((good * 100) / updatedTotal);
  };

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button onClick={handleGoodClick} text="Good" />
        <Button onClick={handleNeutralClick} text="Neutral" />
        <Button onClick={handleBadClick} text="Bad" />
      </div>
      <div>
        <h1>Statistics</h1>
        <DisplayStats text="Good" value={good} />
        <DisplayStats text="Neutral" value={neutral} />
        <DisplayStats text="Bad" value={bad} />
        <DisplayStats text="All" value={total} />
        <DisplayStats text="Average" value={average} />
        <DisplayStats text="Positive" value={positive} />
      </div>
    </div>
  );
};

export default App;
