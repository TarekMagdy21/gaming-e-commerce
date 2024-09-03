import { userRegister } from "@/api";
import { authRegisterType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useRegister = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["user"],
    mutationFn: (data: authRegisterType) => userRegister(data),
    // invalidate queries simply I tell react-query to whenever this mutation is successful, I want to invalidate the query with the key ["user"] >> call this query again >> call this api again and re-update my data

    onSuccess: (result) => {
      console.log("result", result);
      queryClient.invalidateQueries({ queryKey: ["user"] });
      if (result?.message == "Duplicate email") {
        toast.error("This Email Already Exists", {
          position: "top-right",
          closeButton: true,
        });
      } else if (result?.message == "Duplicate username") {
        toast.error("This UserName Already Exists", {
          position: "top-right",
          closeButton: true,
        });
      } else {
        toast.success("User Created Successfully, Please Verify Your Email", {
          position: "top-right",
          closeButton: true,
        });
      }
    },
  });
};
