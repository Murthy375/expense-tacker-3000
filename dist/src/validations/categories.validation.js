import { string, z } from "zod";
// feat name + http method + req +  body/params + schema
export const categoriesPostRequestBodySchema = z.object({
    categoryName: z.string().lowercase(),
});
//# sourceMappingURL=categories.validation.js.map