import { authLoginType } from "@/types";
export const authLogin = async (loginData: authLoginType) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};
