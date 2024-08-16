import { authLogin } from "@/api";
import { authLoginType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useAuthLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["user"],
    mutationFn: (data: authLoginType) => authLogin(data),
    // invalidate queries simply I tell react-query to whenever this mutation is successful, I want to invalidate the query with the key ["user"] >> call this query again >> call this api again and re-update my data

    onSuccess: (result) => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      if (
        result?.message == "Email Not Found" ||
        result?.message == "Invalid Email or Password"
      ) {
        toast.error("Invalid Email or Password", {
          position: "top-right",
          closeButton: true,
        });
      } else if (
        result?.message ==
        "Too many login attempts from this IP, please try again after a 60 second pause"
      ) {
        toast.error("Too Many Login Attempts, try in 60 seconds", {
          position: "top-right",
          closeButton: true,
        });
      } else {
        toast.success("Successfully Logged In", {
          position: "top-right",
          closeButton: true,
        });
      }
    },
  });
};
