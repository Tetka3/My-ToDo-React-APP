import "./tasks.scss";


const Tasks = ({ list }) => {

    
  return (
    <div>
        {list.map((task) => <li key={task.id}>{task.name}</li>) } 
    </div>
  )
}

export default Tasks;