import { useState } from "react";

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticsLine = (props) => {
  if (props.text === "Positive") {
    return (
      <tr>
        <td>{props.text}:</td>
        <td> {props.value} %</td>
      </tr>
    );
  }
  return (
    <tr>
      <td>{props.text}:</td>
      <td> {props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <StatisticsLine text="Good" value={props.good} />
          <StatisticsLine text="Neutral" value={props.neutral} />
          <StatisticsLine text="Bad" value={props.bad} />
          <StatisticsLine text="All" value={props.total} />
          <StatisticsLine text="Average" value={props.average} />
          <StatisticsLine text="Positive" value={props.positive} />
        </tbody>
      </table>
    </div>
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
      <Statistics
        good={good}
        bad={bad}
        neutral={neutral}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
