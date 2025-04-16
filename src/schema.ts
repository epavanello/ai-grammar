import * as z from "zod";

export const grammarCheckSchema = z.interface({
  hasErrors: z.boolean(),
  correctedText: z.string().optional(),
  errorDescription: z.string().optional(),
});

export type GrammarCheckResponse = z.infer<typeof grammarCheckSchema>;

export const grammarCheckJsonSchema = z.toJSONSchema(grammarCheckSchema);
