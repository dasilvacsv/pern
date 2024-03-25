import { Card, Button } from "../ui";
import { useTasks } from "../../context/TaskContext";
import { useNavigate } from "react-router-dom";
import { FaTrashCanArrowUp } from "react-icons/fa6";
import { FaPencilAlt } from "react-icons/fa";

function TaskCard({ task }) {
  const { deleteTask } = useTasks();
  const navigate = useNavigate();
  return (
    <Card key={task.id} className="px-7 py-4 flex-col justify-center">
      <div>
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p>{task.description}</p>
      </div>
      <div className="my-2 flex justify-end gap-x-2">
        <Button onClick={() => navigate(`/tasks/${task.id}/edit`)}>
        <FaPencilAlt />
          Editar</Button>
        <Button
          className="bg-red-800 hover:bg-red-600"
          onClick={async () => {
            if (window.confirm("Are you sure you want to delete this task?")) {
              deleteTask(task.id);
            }
          }}
        >
          <FaTrashCanArrowUp />
          Eliminar
        </Button>
      </div>
    </Card>
  );
}

export default TaskCard;
