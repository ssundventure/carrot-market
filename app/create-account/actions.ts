"use server";

import { z } from "zod";

const chkPasswords = ({
  password,
  confirm_password,
}: {
  password: string;
  confirm_password: string;
}) => password === confirm_password;

const formSchema = z
  .object({
    username: z
      .string({
        invalid_type_error: "Username must be a string!",
        required_error: "Where is my username??",
      })
      .min(3, "Way too short")
      .max(10, "too looong"),
    email: z.string().email(),
    password: z.string().min(10),
    confirm_password: z.string().min(10),
  })
  .refine(chkPasswords, {
    message: "Both passwords should be same",
    path: ["confirm_password"],
  });
  
export async function createAccount(prevState: unknown, formData: FormData) {
  const data = {
    username: formData.get("username"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirm_password: formData.get("confirm_password"),
  };
  console.log(data);
  const result = formSchema.safeParse(data);
  if (!result.success) {
    console.log(result.error.flatten());
    return result.error.flatten();
  }
}
