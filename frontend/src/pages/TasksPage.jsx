import { useEffect, useState } from 'react'
import {getAllTasksRequest} from '../api/tasks.api'
import TaskCard from "../components/tasks/TaskCard"

function TasksPage() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    getAllTasksRequest()
      .then((response) => {
        setTasks(response.data)
      });
  }, [])
  return (
    <div>
      <h1 className='text-5xl font-bold justify-center'>Tasks</h1>
      <div className="grid grid-cols-3 gap-2">
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  )
}

export default TasksPage