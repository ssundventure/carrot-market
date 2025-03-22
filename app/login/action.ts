"use server";

import {
  PASSWORD_MIN_LENGTH,
  PASSWORD_REGEX,
  PASSWORD_REGEX_ERROR_MSG,
} from "@/lib/constants";
import { z } from "zod";

const formSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(PASSWORD_MIN_LENGTH)
    .regex(PASSWORD_REGEX, PASSWORD_REGEX_ERROR_MSG),
});

export async function handleForm(prevState: unknown, formData: FormData) {
  const parsedData = formSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!parsedData.success) {
    console.log("❌ Validation errors:", parsedData.error.format());
    return parsedData.error.flatten();
  }

  console.log("✅ Form is valid!", parsedData.data);
}
