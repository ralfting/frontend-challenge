import z from 'zod';

export const signupValidation = z.object({
  firstname: z.string().min(1, 'First name cannot be empty'),
  email: z.string().min(1, 'E-mail cannot be empty').email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  terms: z.literal(true),
  color: z.string().min(1, 'Color cannot be empty'),
});
