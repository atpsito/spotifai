import { z } from "zod";

export const searchValidatorSchema = z.object({
  search: z.string().nonempty()
});
