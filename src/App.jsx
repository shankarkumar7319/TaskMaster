import { useState,useEffect } from 'react';
import Taskform from './Components/Taskform'
import Tasklist from './Components/Tasklist'
import Progresstracker from './Components/Progresstracker'
import './Style.css'

export default function App() {
  const [tasks, setTasks] = useState([]);


  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks));
  });


  const addTask = (task)=>{
    setTasks([...tasks, task])
  }

  const updateTask = (updatedTask, index) => {
    const newtask = [...tasks];
    newtask[index] = updatedTask;
    setTasks(newtask);
  }
  
  const deleteTask = (index)=>{
    setTasks(tasks.filter((_, i) => i !=index))
   }

  const clearTasks = () => {
    setTasks([]);
  }
  return (
    <div className='App'>
      <header>
        <h1>TaskMaster</h1>
        <p><i>Track tasks Transform productivity</i></p>
      </header>
      
      <Taskform addTask = {addTask}/>
      
      <Tasklist tasks = {tasks}
       updateTask = {updateTask} 
       deleteTask = {deleteTask}/>
      
      <Progresstracker tasks = {tasks} />
      {tasks.length > 0 && (<button className='clear-btn' onClick={clearTasks}>Clear All Tasks</button>)}      
    </div>
  )
}
