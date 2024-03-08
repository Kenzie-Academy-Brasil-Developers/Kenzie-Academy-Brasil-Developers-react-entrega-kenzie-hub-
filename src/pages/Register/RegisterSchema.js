import { z } from "zod";

export const RegisterSchema = z
  .object({
    name: z.string().min(1, "O nome é obrigatório"),
    email: z
      .string()
      .min(1, "O e-mail é obrigatório")
      .email("Forneça um e-mail válido"),
    password: z
      .string()
      .min(8, "A senha é obrigatória e deve ter pelo menos 8 caracteres")
      .regex(/(?=.*[A-Z])/, "A senha precisa de pelo menos uma letra maiúscula")
      .regex(/(?=.*[a-z])/, "A senha precisa de pelo menos uma letra minúscula")
      .regex(/(?=.*\d)/, "A senha precisa de pelo menos um número")
      .regex(
        /(?=.*[!@#$%^&*(),.?":{}|<>])/,
        "A senha precisa de pelo menos um caractere especial"
      ),
    confirmPassword: z.string().min(1, "A confirmação da senha é obrigatória"),
    bio: z.string().min(1, "A bio é obrigatória"),
    contact: z.string().min(1, "O contato é obrigatório"),
    course_module: z.enum(
      [
        "Primeiro módulo (Introdução ao Frontend)",
        "Segundo módulo (Frontend Avançado)",
        "Terceiro módulo (Introdução ao Backend)",
        "Quarto módulo (Backend Avançado)",
      ],
      "O módulo do curso é obrigatório"
    ),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });
