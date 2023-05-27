import z from 'zod';

const itemCreateValidation = z.object({
  name: z.string().min(10).max(35),
  type: z.number().min(1).max(999)
});

export default itemCreateValidation;
