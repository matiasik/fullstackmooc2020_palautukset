import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({handleClick, text}) => {
  return(
  <button onClick={handleClick}>{text}</button>
  )
}

const Statistics = ({clicks}) => {

  const average = clicks.value.reduce((a,b ) => a + b, 0) / clicks.value.length
  const positive = clicks.good / clicks.all * 100
  
  if(clicks.value.length === 0) {
    return(
      <div>
        <h1>Tilastot</h1>
        <p>Ei annettua palautetta</p>
      </div>
    )
  }
  
  return(
    <div>
      <h1>Tilastot</h1>
      <table style={{backgroundColor: "salmon"}}>
        <tbody>
      <StatisticLine text='Positiivista' value={clicks.good}/>
      <StatisticLine text='Neutraalia' value={clicks.neutral}/>
      <StatisticLine text='Huonoa' value={clicks.bad}/>
      <StatisticLine text='Keskiarvo' value={average}/>
      <StatisticLine text='Yhteensä' value={clicks.all}/>
      <StatisticLine text='Positiivista' value={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine  = ({text, value}) => {
  return(
    <tr>
      <th style={{textAlign: "left"}}>{text}</th>
      <td>{value}</td>
    </tr>
  )
}

const App = () => {
  const [clicks, setClicks] = useState ({
    good: 0, neutral: 0, bad: 0, all: 0, value: []
  })

  const handleGood = () => {
    setClicks({...clicks, 
      good: clicks.good + 1,
      all: clicks.all + 1,
      value: clicks.value.concat(1)
    })
  }

  const handleNeutral = () => {
    setClicks({...clicks,
      neutral: clicks.neutral + 1,
      all: clicks.all + 1,
      value: clicks.value.concat(0)
    })
  }

  const handleBad = () => {
    setClicks({...clicks,
      bad: clicks.bad + 1,
      all: clicks.all + 1,
      value: clicks.value.concat(-1)
    })
  }

  return (
    <div style={{fontFamily: "Roboto"}}>
      <h1>Anna palautetta :-)</h1>
      <Button handleClick={handleGood} text='Hienoa'/>
      <Button handleClick={handleNeutral} text='Ok...'/>
      <Button handleClick={handleBad} text='Hyi'/>
      <Statistics clicks={clicks}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)