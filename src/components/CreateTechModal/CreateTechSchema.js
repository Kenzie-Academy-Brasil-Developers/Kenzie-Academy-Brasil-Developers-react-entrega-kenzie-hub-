import { z } from 'zod';

const CreateTechSchema = z.object({
  title: z.string().min(1, 'O nome da tecnologia é obrigatório.'),
  status: z.enum(['Iniciante', 'Intermediário', 'Avançado']),
});

export default CreateTechSchema;