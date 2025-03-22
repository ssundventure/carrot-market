"use client";

import FormInput from "../../components/form-input";
import FormButton from "../../components/form-btn";
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
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          errors={state && "fieldErrors" in state ? state.fieldErrors.username : undefined}
        />
        <FormInput
          name="email"
          type="text"
          placeholder="Email"
          errors={state && "fieldErrors" in state ? state.fieldErrors.email : undefined}
          required
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          errors={state && "fieldErrors" in state ? state.fieldErrors.password : undefined}
          required
        />
        <FormInput
          name="confirm_password"
          type="password"
          placeholder="Confirm Password"
          errors={state && "fieldErrors" in state ? state.fieldErrors.confirm_password : undefined}
          required
        />
        <FormButton text="Create account" />
      </form>
      <SocialLogin />
    </main>
  );
}
