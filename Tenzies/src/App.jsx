import React from 'react'
import './App.css'
import Tile from './components/Tile'
import Box from './data/boxes/'
import {nanoid} from 'nanoid'
import Confetti from 'react-confetti'

function App() {
  const [dies, setDies] = React.useState(AllnewDice())

  const [Tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const samevalue = dies.every(die => die.value === dies[0].value)
    const allheld = dies.every(die => die.isHeld)
    if (samevalue && allheld) {
      setTenzies(true)
      console.log("You win!")
    }
  }, [dies])

  function generateNewDie() {
    return {value: Math.ceil(Math.random() * 6), isHeld: false, id: nanoid()}
  }

  function AllnewDice () {
    let arr = []
    for (let i = 0; i < 10; i++) {
      arr.push(generateNewDie())
    }
    return arr
  }

  function newGame () {
    setDies(AllnewDice())
    setTenzies(false)
  }

  function rollDice(dies) {
    setDies(oldDies => oldDies.map(die => {
      return die.isHeld ?
        die :
        generateNewDie() 
    }))
  }

  function holdDie (id) {
    setDies(oldDies => oldDies.map(die => {
      return die.id === id ?
       {...die, isHeld: !die.isHeld} :
        die
      }))
  }

  const square = dies.map(die => (
    <Tile
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDie={()=>holdDie(die.id)}
    />
  ))

  const btnText = Tenzies ? "New Game" : "Roll"

  return (
    <main>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same.
       Click each die to freeze it at its current value between rolls.</p>
      <div className='container'>
          {square}
      </div>
      <button className='roll' onClick={Tenzies ? newGame : rollDice}>{btnText}</button>
     { Tenzies && <Confetti/>}
    </main>
  )
}

export default App
