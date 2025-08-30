import { useEffect, useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid"
import { getTasks } from "./apis/task";
function App() {
  // const [count, setCount] = useState(0)

const [tasks, setTasks] = useState([]);


 
  useEffect(() => {
    const fetchTasks = async () => {
      const data = await getTasks();
      setTasks(data);
    };

    fetchTasks();
  }, []);


  return (
    <>
  <div className="w-1/2 h-1/2  m-auto rounded-md p-4 flex flex-col items-center">

        
       <div className="w-1/2 h-1/2 bg-white m-auto rounded-md flex flex-col items-center justify-center p-4">
  <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center mt-2">
    Lista de Tareas
  </h1>
  <AddTask tasks={tasks} setTasks={setTasks} />
  <Tasks tasks={tasks} setTasks={setTasks} />
</div>


      </div>
    </>
  );
}

function AddTask({tasks, setTasks}) {

  const [description, setDescription] = useState("")


const  handleAddTask =(description)=>{

  setTasks([...tasks,
    {description:description, completed:false}])


  }

  return (
    <>
      <form className="flex">
        <input
          type="text"
          placeholder="Añade tu tarea"
          className="bg-gray-200 px-2 py-2 rounded-l-md focus:outline-none"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="button"
          value="Añadir"
          className="bg-blue-500 px-2 py-2 rounded-r-md text-white"
          onClick={()=>{handleAddTask(description)}}
        />
      </form>
    </>
  );
}

function Tasks({ tasks, setTasks }) {
  return (
 <div className="w-full mt-4 flex flex-col gap-2">
      {tasks.map((task) => (
        <Task
          key={task.id}
          id={task.id}
          description={task.description}
          initStateComplete={task.completed}
          setTasks={setTasks}
          tasks={tasks}
        />
      ))}
    </div>
  );
}

function Task({ id, description, initStateComplete, tasks, setTasks }) {
  const [completed, setCompleted] = useState(initStateComplete);

  const handleDelete = () => {
    setTasks(tasks.filter((task)=>task.id !== id));
  };

  return (
<div className="flex items-center justify-start gap-2 bg-gray-100 p-2 rounded w-full">
      <input
        type="checkbox"
        checked={completed}
        onChange={(e) => setCompleted(e.target.checked)}
      />
      <p>{description}</p>
      <XMarkIcon
        className="w-5 h-5 text-red-500 cursor-pointer ml-auto hover:text-red-700"
        onClick={handleDelete}
      />
    </div>
  );
}

export default App;
