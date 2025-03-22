"use client";

import Input from "../../components/input";
import Button from "../../components/button";
import SocialLogin from "@/components/social-login";
import { useFormState } from "react-dom";
import { createAccount } from "./actions";

export default function CreateAccount() {
  const [state, action] = useFormState(createAccount, null);
  console.log("📌 State:", state);
  return (
    <main className="flex flex-col gap-10 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">안녕하세요!</h1>
        <h2 className="text-xl">Fill in the form below to join!</h2>
      </div>
      <form action={action} className="flex flex-col gap-3">
        <Input
          name="username"
          type="text"
          placeholder="Username"
          minLength={3}
          maxLength={10}
          errors={
            state && "fieldErrors" in state
              ? state.fieldErrors.username
              : undefined
          }
        />
        <Input
          name="email"
          type="email"
          placeholder="Email"
          errors={
            state && "fieldErrors" in state
              ? state.fieldErrors.email
              : undefined
          }
          required
        />
        <Input
          name="password"
          type="password"
          placeholder="Password"
          minLength={4}
          errors={
            state && "fieldErrors" in state
              ? state.fieldErrors.password
              : undefined
          }
          required
        />
        <Input
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          minLength={4}
          errors={
            state && "fieldErrors" in state
              ? state.fieldErrors.confirm_password
              : undefined
          }
          required
        />
        <Button text="Create account" />
      </form>
      <SocialLogin />
    </main>
  );
}
