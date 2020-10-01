import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';



const Button = (props) => {
  return(
  <button onClick={props.onClick}>{props.text}</button>
  )
}

const Stats = ({feedback}) => {
  
  const total = bad + good + neutral
  const average = total / 3
  const positive = good / total * 100
  
  return (
    <div>
      <h1>Palautetilastot</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const addGood = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const addNeutral= () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const addBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  const feedback = [good,neutral,bad]

  return (
    <div>
      <h1>Anna palautetta</h1>
      <Button onClick={addGood} text='good'/>
      <Button onClick={addNeutral} text='neutral'/>
      <Button onClick={addBad} text='bad'/>
      <Stats feedback={feedback}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))