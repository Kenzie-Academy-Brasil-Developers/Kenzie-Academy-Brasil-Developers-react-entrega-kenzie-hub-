import { z } from 'zod';

const statusSchema = z.enum(['Iniciante', 'Intermediário', 'Avançado']);

const editTechSchema = z.object({
  title: z.string().min(1, { message: "O nome é obrigatório" }), 
  status: statusSchema, 
});

export default editTechSchema;