import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css';

const Button = (props) => 
    <button onClick={props.handleClick}>{props.text}</button>

const Winner = ({winner}) => {
  return(
    <div >
      <h2>The winner is:</h2>
      <p className="anecdote" id="red">{winner}</p>
    </div>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))

  const copy = [...points]
  const copyOfSelected = selected
  
  const winner = (votes, arr) => {
    let winningIndex = votes.indexOf(Math.max(...votes))
    let result = arr[winningIndex]
    return (
      result
    )
}

  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * anecdotes.length)
    if(randomNum === selected){
      randomNum = Math.floor(Math.random() * anecdotes.length)
    }
    setSelected(randomNum)
  }

  const addPoints = () => {
     copy[selected] +=1
     setPoints(copy)
  }

  return (
    <div>
      <h3>Current anecdote: {copyOfSelected + 1}</h3>
      <p className="anecdote">{props.anecdotes[selected]}</p>
      <br />
      <Button handleClick={addPoints} text='vote' />
      <Button handleClick={handleClick} text='generate next random anecdote' />
      <h4>Vote results: {copy.join(', ')}</h4>
      <Winner winner={winner(copy, props.anecdotes)}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)