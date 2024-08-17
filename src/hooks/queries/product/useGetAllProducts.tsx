import { productGet } from "@/api";
import { Product } from "@/types";
import { QueryKey, useQuery, UseQueryOptions } from "@tanstack/react-query";
import { toast } from "sonner";

export const useGetAllProducts = () => {
  return useQuery<Product[], Error, Product[], QueryKey>({
    queryKey: ["product"],
    queryFn: async () => {
      const response = await productGet();
      return response?.data?.products as Product[];
    },
    onSuccess: () => {
      toast.success("Product fetched successfully", {
        position: "top-right",
        closeButton: true,
      });
    },
    onError: (error: Error) => {
      toast.error(`Error fetching product: ${error.message}`, {
        position: "top-right",
        closeButton: true,
      });
    },
  } as UseQueryOptions<Product[], Error, Product[], QueryKey>);
};
