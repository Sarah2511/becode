import React, { useState } from 'react';
import './App.css'

function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1 className="title">To Do List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" id="task-input" value={task} onChange={handleChange} />
        <button type="submit" id="add-button">Ajouter</button>
      </form>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            {task}
            <button onClick={() => handleDelete(index)} className="delete-button">Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
