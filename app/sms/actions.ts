"use server";
import { z } from "zod";
import validator from "validator";
import { redirect } from "next/navigation";

type SmsLoginState = {
  token: boolean;
  error?: {
    fieldErrors?: {
      [key: string]: string[] | undefined;
    };
    formErrors?: string[];
  };
};

const phoneSchema = z
  .string()
  .trim()
  .refine(
    (phone) => validator.isMobilePhone(phone, "ko-KR"),
    "Wrong phone format"
  );
const tokenSchema = z.coerce.number().min(100000).max(999999);

export async function smsLogIn(
  prevState: SmsLoginState,
  formData: FormData
): Promise<SmsLoginState> {
  const phone = formData.get("phone");
  const token = formData.get("token");

  if (!prevState.token) {
    //phone검증
    const result = phoneSchema.safeParse(phone);
    if (result.success) {
      return { token: true };
    } else {
      console.log("에러확인F", result.error.flatten());
      return {
        token: false,
        error: result.error.flatten(),
      };
    }
  } else {
    const result = tokenSchema.safeParse(token);
    if (result.success) {
      redirect("/");
    } else {
      return {
        token: true,
        error: result.error.flatten(),
      };
    }
  }
}
