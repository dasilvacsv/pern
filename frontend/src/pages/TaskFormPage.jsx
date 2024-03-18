import { Card, Input, TextArea, Label, Button } from "../components/ui";
import { useForm } from "react-hook-form";
import {useNavigate} from 'react-router-dom';
import { createTaskRequest } from "../api/tasks.api";

function TaskFormPage() {
  const { register, handleSubmit, formState: {
    errors
  }  } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(async data => {
    await createTaskRequest(data);
    navigate('/tasks');
  })
  return (
    <div className="flex h-[80vh] justify-center items-center">

      <Card>
        <h2 className="text-3xl font-bold my-4">Create Task</h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            placeholder="title"
            autoFocus
            {...register("title", { required: true })}
          />
          {
            errors.title && <span className="text-red-500">Title is required</span>
          }

          <Label htmlFor="description">Description</Label>
          <TextArea
            placeholder="Description"
            rows={3}
            {...register("description")}
          />
          <Button>Create</Button>

        </form>
      </Card>
    </div>
  );
}

export default TaskFormPage;
