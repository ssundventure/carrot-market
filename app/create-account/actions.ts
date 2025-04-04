"use server";

import { PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR_MSG, PASSWORD_REGEX, PASSWORD_REGEX_ERROR_MSG } from "@/lib/constants";
import { z } from "zod";

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string!",
        required_error: "Please input username",
      })
      .min(3, "Way too short !!!")
      .max(10, "That is too looooong!")
      .trim()
      .toLowerCase()
      .transform((username) => `${username}00`)
      .refine((username) => !username.includes("potato"), "No potato allowed"),
    email: z.string().email(),
    password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR_MSG)
      .regex(
        PASSWORD_REGEX,
        PASSWORD_REGEX_ERROR_MSG
      )
      .refine((password) => !password.includes("1234"), "No 1234 allowed"),
    confirm_password: z
      .string()
      .min(PASSWORD_MIN_LENGTH, PASSWORD_MIN_LENGTH_ERROR_MSG)
  })
  .superRefine(({ password, confirm_password }, ctx) => {
    if (password !== confirm_password) {
      ctx.addIssue({
        code: "custom",
        message: "Two passwords should be equal",
        path: ["confirm_password"],
      });
    }
  });

export async function createAccount(prevState: unknown, formData: FormData) {
  //console.log("🚀 Received form data:", formData);

  const parsedData = formSchema.safeParse({
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  });

  if (!parsedData.success) {
    console.log("❌ Validation errors:", parsedData.error.format());
    return parsedData.error.flatten();
  }

  console.log("✅ Form is valid!", parsedData.data);
}
