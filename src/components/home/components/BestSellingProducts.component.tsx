import React from "react";
import { ProductCard } from "./ProductCard.component";
import { SectionHeader } from "@/common";
import { useParams } from "next/navigation";
import { useTranslations } from "use-intl";
import { Product } from "@/types";

export const BestSellingProducts = ({ products }: { products: Product[] }) => {
  const { locale } = useParams();
  const t = useTranslations();
  return (
    <>
      <SectionHeader title="month" />
      <div
        className="flex items-center justify-between mt-6 mb-[3.75rem]"
        dir={locale === "en" ? "ltr" : "rtl"}
      >
        <p className="text-4xl font-semibold ">{t("header.best")}</p>

        <button className="text-white bg-red px-12 py-4 rounded-lg">
          {t("random.viewall")}
        </button>
      </div>
      <div className="flex items-center mb-[8.125rem] overflow-x-auto no-scrollbar  ">
        <div className="flex gap-8">
          {products?.map(
            (
              { _id, images, name, price, rateAverage, rateCount }: Product,
              index // This is the index from map
            ) => (
              <div key={_id} className={`${index <= 3 ? "block" : "hidden"} `}>
                <ProductCard
                  imageSize={{ height: 250, width: 304 }}
                  key={_id}
                  title={name}
                  price={price}
                  imageUrl={images[0]?.secure_url}
                  rating={rateAverage || 0}
                  reviewsCount={rateCount || 0}
                />
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
};
