import express from "express";
import morgan from "morgan";
import taskRoutes from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { pool } from "./db.js";
import { ORIGIN } from "./config.js";

// constructor app express
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors({
  origin: ORIGIN,
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/", (req, res) => res.json({ message: "Welcome to my API" }));
// Db connection Testing
app.get("/ping", async (req, res) => {
  const result = await pool.query("SELECT NOW()");
  return res.json(result.rows[0])
});

// Rutas de Tareas
app.use("/api", taskRoutes);
// Rutas de Autenticacion
app.use("/api", authRoutes);

// Middleware Manejador de erorres
app.use((err, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: err.message,
  });
});

export default app;
