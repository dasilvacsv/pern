import { Router } from "express";
import {getAllTasks, getTask, createTask, deleteTask, updateTask} from "../controllers/tasks.controller.js"

const router = Router();

// Crud de Tareas 
router.get("/tasks", getAllTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks/", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

export default router;
