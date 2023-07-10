import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='header-todo'>
          <h1>To Do :</h1>

          <div className='add-task-content'>
            <input type="text" />
            <button className='button-add-task'>Add Task</button>
          </div>

          <ul className="todo-list">

          </ul>
        </div>
    </>
  )
}

export default App
