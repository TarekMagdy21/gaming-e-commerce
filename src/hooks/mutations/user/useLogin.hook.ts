import { userLogin } from "@/api";
import { authLoginType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useLogin = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["user"],
    mutationFn: (data: authLoginType) => userLogin(data),
    // invalidate queries simply I tell react-query to whenever this mutation is successful, I want to invalidate the query with the key ["user"] >> call this query again >> call this api again and re-update my data

    onSuccess: (result) => {
      if (result?.token) {
        localStorage.setItem("token", result.token);
      }
      queryClient.invalidateQueries({ queryKey: ["user"] });
      if (result?.error) {
        toast.error(result?.error, {
          position: "top-right",
          closeButton: true,
        });
      } else {
        toast.success("Successfully LoggedIn", {
          position: "top-right",
          closeButton: true,
        });
      }
    },
  });
};
