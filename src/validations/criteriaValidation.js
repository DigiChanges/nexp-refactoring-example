import z from 'zod';

const criteriaValidation = z.object({
  limit: z.number().min(1),
  page: z.number().min(1)
});

export default criteriaValidation;
