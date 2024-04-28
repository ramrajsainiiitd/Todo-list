import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTask from './Components/AddTask'
import TodayList from './Components/TodayList'
import FutureList from './Components/FutureList'
import CompletedList from './Components/CompletedList'

function App() {
  const [count, setCount] = useState(0)

  const day = new Date;
  return (
    <>
    <h2 style={{textAlign:'center'}} ><b>To-do List</b></h2>
    <AddTask/>
    <TodayList/>
    <FutureList/>
    <CompletedList/>
    </>
  )
}

export default App
