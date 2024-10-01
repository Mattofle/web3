import StatisticsLines from "./StatisticsLines"

const Statistics = ({ good, bad, neutral }) => {
  console.log("good", good)
  console.log("bad", bad)
  console.log("neutral", neutral)

  const all = good + bad + neutral
  console.log("all", all)
  const average = all !== 0 ? (good - bad) / all : 0;
  console.log("average", average)
  const positive = all !== 0 ? (good / all) * 100 : 0;
  console.log("positive",positive)

    if (good === 0 && neutral === 0 && bad === 0) {
      return <div>No feedback given</div>
    }
    return <div>
      <StatisticsLines text="good" value={good} />
      <StatisticsLines text="neutral" value={neutral} />
      <StatisticsLines text="bad" value={bad} />
      <StatisticsLines text="all" value={all} />
      <StatisticsLines text="average" value={average} />
      <StatisticsLines text="positive" value={positive} />
    </div>
  }

export default Statistics;