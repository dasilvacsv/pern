import { Router } from "express";

const router = Router();

// Crud de Tareas 
router.get("/tasks", (req, res) => res.send("Obteniendo tareas"));

router.get("/tasks/:id", (req, res) => res.send("Obteniendo tarea unica"));

router.post("/tasks/", (req, res) => res.send("Creando tareas"));

router.put("/tasks/:id", (req, res) => res.send("Actualizando tarea unica"));

router.delete("/tasks/:id", (req, res) => res.send("Eliminando tarea"));

export default router;
