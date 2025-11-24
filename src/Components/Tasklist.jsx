
export default function Tasklist({tasks , updateTask, deleteTask}) {
  const toggleComplete = (index) => {
   const updatedTask = {...tasks[index], 
    completed: !tasks[index].completed};
   updateTask(updatedTask, index);
  }
  return (
    <ul className="task-list">
      {tasks.map((task, index)=>(
        <li key={index}>
          <div className="container">
            <span>{task.text}</span> <br />
            <small>({task.priority} , 
              {task.category})</small>
          </div>
          <div>
            <button className="complete" onClick={()=>{toggleComplete(index)}}>
              {task.completed ? "Undo" : "Complete"}</button>
              <button className="delete" onClick={() => deleteTask(index)}>
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  )
}