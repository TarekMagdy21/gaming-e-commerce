import { userCreate } from "@/api";
import { userCreateType } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

export const useUserCreate = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["user"],
    mutationFn: (data: userCreateType) => userCreate(data),
    // invalidate queries simply I tell react-query to whenever this mutation is successful, I want to invalidate the query with the key ["user"] >> call this query again >> call this api again and re-update my data

    onSuccess: (result) => {
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
        toast.success("User Created Successfully", {
          position: "top-right",
          closeButton: true,
        });
      }
    },
  });
};
