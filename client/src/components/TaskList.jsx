import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasks.api";
import TasksCard from "./TasksCard"

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const loadTasks = async () => {
      try {
        const { data } = await getAllTasks();
        setTasks(data);
      } catch (error) {
        console.log("error.get", error.message);
      }
    };
    loadTasks();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-3 mx-5">
      {tasks.map((task) => (
        <TasksCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
