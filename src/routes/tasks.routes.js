import { Router } from "express";
import {getAllTasks, getTask, createTask, deleteTask, updateTask} from "../controllers/tasks.controller.js"
import { isAuth } from "../middlewares/auth.middleware.js";

const router = Router();

// Crud de Tareas 
router.get("/tasks", isAuth, getAllTasks);

router.get("/tasks/:id", isAuth, getTask);

router.post("/tasks/", isAuth, createTask);

router.put("/tasks/:id", isAuth, updateTask);

router.delete("/tasks/:id", isAuth, deleteTask);

export default router;
