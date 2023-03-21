import React from 'react'
import './App.css'
import Tile from './components/Tile'
import Box from './data/boxes/'

function App() {

  //a function that returns an array of 10 random numbers between 1-6 inclusive
  function AllnewDice () {
    let arr = []
    for (let i = 0; i < 10; i++) {
      arr.push(Math.ceil(Math.random() * 6))
    }
    return arr
  }

  console.log(AllnewDice())

  const [dies, setDies] = React.useState(AllnewDice())

  console.log("die",dies)

  const square = dies.map(die => (
    <Tile
      key={die.id}
      value={die}
    />
  ))

  console.log(square)

  return (
    <main>
      <div className='container'>
          {square}
      </div>
      <button className='roll' onClick={() => setDies(AllnewDice())}>Roll</button>
    </main>
  )
}

export default App
