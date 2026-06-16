import { email, z } from "zod";
// feat name + http method + req +  body/params + schema
export const registerPostRequestBodySchema = z.object({
    email: z.email(),
    userName: z.string(),
    password: z.string().min(8),
});
export const loginPostRequestBodySchema = z.object({
    email: z.email(),
    password: z.string().min(8),
});
//# sourceMappingURL=auth.validation.js.map