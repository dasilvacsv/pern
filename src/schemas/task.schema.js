import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "El titulo es requerido",
      invalid_type_error: "El titulo debe ser un string",
    })
    .min(3)
    .max(255),
  description: z
    .string({
      required_error: "La descripcion es requerida",
      invalid_type_error: "La descripcion debe ser un string",
    })
    .min(3)
    .max(255)
    .optional(),
});

export const updateTaskSchema = z.object({
  title: z
    .string({
      required_error: "El titulo es requerido",
      invalid_type_error: "El titulo debe ser un string",
    })
    .min(3)
    .max(255).optional(),
  description: z
    .string({
      required_error: "La descripcion es requerida",
      invalid_type_error: "La descripcion debe ser un string",
    })
    .min(3)
    .max(255)
    .optional(),
});
