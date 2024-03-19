import { useEffect } from "react";
import TaskCard from "../components/tasks/TaskCard";
import { useTasks } from "../context/TaskContext";

function TasksPage() {
  const { tasks, loadTasks } = useTasks();
  useEffect(() => {
    loadTasks();
  }, []) 
  return (
    <div>
      <h1 className="text-5xl font-bold justify-center">Tasks</h1>
      <div className="grid grid-cols-3 gap-2">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TasksPage;
