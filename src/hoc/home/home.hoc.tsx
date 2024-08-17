"use client";

import { Loader } from "@/common";
import { HomeContent } from "@/components";
import { useGetAllProducts } from "@/hooks";

interface HomeHocProps {}
export const HomeHoc: React.FC<HomeHocProps> = () => {
  const { data, isLoading } = useGetAllProducts();
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
      <HomeContent products={data || []} />
    </>
  );
};
