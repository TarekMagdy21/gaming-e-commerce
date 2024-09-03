import { authLoginType } from "@/types";
export const userLogin = async (userDetails: authLoginType) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    });

    return response.json();
  } catch (error) {
    console.log(error);
  }
};
