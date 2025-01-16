import { useState } from 'react'
import './App.css'
import Todos from './Todos'

function App() {

  const [tasks,setTasks] = useState([]);

  return (
    <>
      <Todos tasks={tasks}  setTasks={setTasks}/>
    </>
  )
}

export default App
