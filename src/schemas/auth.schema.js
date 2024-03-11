import {z} from 'zod';

export const signupSchema = z.object({
    username: z.string({
        required_error: 'El username es requerido',
        invalid_type_error: 'El username debe ser un string',
    }).min(1).max(255),
    email: z.string({
        required_error: 'El email es requerido',
        invalid_type_error: 'El email debe ser un string',
    }).email({
        message: 'El email no es válido',
    }),
    password: z.string({
        required_error: 'La contraseña es requerida',
        invalid_type_error: 'La contraseña debe ser un string',
}).min(6,{
    message: 'La contraseña debe tener al menos 6 caracteres',
}).max(255, {
    message: 'La contraseña debe tener como máximo 255 caracteres'
})
});

export const signinSchema = z.object({
    email: z.string({
        required_error: 'El email es requerido',
        invalid_type_error: 'El email debe ser un string',
    }).email({
        message: 'El email no es válido',
    }),
    password: z.string({
        required_error: 'La contraseña es requerida',
        invalid_type_error: 'La contraseña debe ser un string',
}).min(6,{
    message: 'La contraseña debe tener al menos 6 caracteres',
}).max(255, {
    message: 'La contraseña debe tener como máximo 255 caracteres'})
});