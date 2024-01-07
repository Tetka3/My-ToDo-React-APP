import "./taskList.scss";
import { useState } from "react";


const initialList = [
    {
        id: 1,
        name: "Task 1",
        description: "Take a walk home"
    },
    {
        id: 2,
        name: "Task 2",
        description: "Take a car home"
    }
];


const TaskList = () => {
    const [list, setList] = useState(initialList);
    const [name, setName] = useState("");

    function handleChange(e) {
        e.preventDefault();
        setName(e.target.value);
      }
    
      function handleAdd() {
        const newList = list.concat({ name });

        setList(newList);
        setName("");
      }


  return (
    <div className="overall">
        <div className="task-list">
            <input type="text" onChange={handleChange} value={name} />
            <button onClick={handleAdd}>Add</button> 
        </div>
        <div className="tasks">
            {list.map((task) => <li key={task.id}>{task.name} <button>Delete</button></li>)} 
            
        </div>
    </div>
  )
}

export default TaskList