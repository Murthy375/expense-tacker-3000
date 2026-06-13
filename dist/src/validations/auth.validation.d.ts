import { z } from "zod";
export declare const registerPostRequestBodySchema: z.ZodObject<{
    email: z.ZodEmail;
    userName: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=auth.validation.d.ts.map