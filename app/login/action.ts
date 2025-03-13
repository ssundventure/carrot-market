"use server";

export async function handleForm(prevState: unknown, formData: FormData) {
  console.log(prevState);
  console.log(formData);
  
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return {
    errors: ["wrong password", "password too short"],
  };
}
