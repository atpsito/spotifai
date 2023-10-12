import { z } from "zod";

import { searchValidatorSchema } from "@/utils/form.util";

export type SearchFormValues = z.infer<typeof searchValidatorSchema>;
