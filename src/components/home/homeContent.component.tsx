"use client";
import { SectionHeader } from "@/common";
import { HomeCategories } from "./HomeCategories.component";
import { FlashSalesWithArrow, ProductCard } from "./components";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Product } from "@/types";
interface HomeContentProps {
  products: Product[];
}

export const HomeContent: React.FC<HomeContentProps> = ({ products }) => {
  const t = useTranslations("header");
  const { locale } = useParams();
  return (
    <>
      <HomeCategories />
      <div className="mx-[8.438rem]">
        <SectionHeader title="title" />
        <FlashSalesWithArrow />
        <div className="flex items-center mb-[8.125rem]">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto gap-8">
            {products?.map(
              ({
                _id,
                images,
                name,
                price,
                rateAverage,
                rateCount,
              }: Product) => (
                <ProductCard
                  key={_id}
                  title={name}
                  price={price}
                  imageUrl={images[0]?.secure_url}
                  rating={rateAverage || 0}
                  reviewsCount={rateCount || 0}
                />
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
