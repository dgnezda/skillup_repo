import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 9th at 9:30am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at the Docks',
        day: 'Feb 10th at 2:30am',
        reminder: true,
    },
    {
        id: 3,
        text: 'Goods Shipping',
        day: 'Feb 10th at 3:30am',
        reminder: false,
    }
  ])

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {/* instead of ternary for showAddTask, just use && - because there is no 'else' */}
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
      
    </div>
  );
}


// If you want to use classes:
// import React from 'react'
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }


export default App;
