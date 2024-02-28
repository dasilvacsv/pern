import { Router } from "express";

const router = Router();

router.post("/signin", (req, res) => res.send('Ingresando a la app'));

router.post("/signup", (req, res) => res.send('Registrandose en la app'));

router.post("/logout", (req, res) => res.send('cerrando sesion en la app'));

router.get("/profile", (req, res) => res.send('Perfil del usuario'));



export default router;
