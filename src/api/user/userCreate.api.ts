import { userCreateType } from "@/types";
export const userCreate = async (userDetails: userCreateType) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}user`, {
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
