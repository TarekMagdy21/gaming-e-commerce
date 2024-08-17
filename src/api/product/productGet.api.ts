import axiosInstance from "@/services/config";

export const productGet = async () => {
  try {
    const response = await axiosInstance.get("product");
    return response;
  } catch (error) {
    console.log(error);
  }
};
