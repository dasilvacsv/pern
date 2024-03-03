import express from "express";
import morgan from "morgan";
import taskRoutes from "./routes/tasks.routes.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

// constructor app express
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get("/api", (req, res) => res.json({ message: "Welcome to my API" }));
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
