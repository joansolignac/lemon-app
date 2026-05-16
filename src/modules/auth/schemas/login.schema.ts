import { email, z } from "zod";

export const loginSchema = z.object({
    email: z
        .email('correo no válido')
        .trim(),
    password: z
        .string()
        .min(8, 'La contraseña debe tener mínimo 8 caracteres')
        .trim(),
})