import { z } from "zod";

export const TrainModel = z.object({
  name: z.string(),
  type: z.enum(["Man", "Women", "Other"]),
  age: z.number(),
  ethnicity: z.enum([
    "White",
    "Black",
    "East Asian (Chinese, Japanese, Korean)",
    "South Asian (Indian, Pakistani, Bangladeshi)",
    "Asian American",
    "Middle Eastern (Arabic)",
    "Hispanic/Latino",
    "Pacific Islander",
    "Other",
  ]),
  eyeColor: z.enum(["Brown", "Blue", "Green", "Hazel", "Gray"]),
  bald: z.boolean(),
  imageUrls: z.array(z.string()),
});

export const GenerateImage = z.object({
  prompt: z.string(),
  modelId: z.string(),
  num: z.number(),
});

export const GenerateImageFromPack = z.object({
  modelId: z.string(),
  packId: z.string(),
});
