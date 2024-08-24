"use client";
import { SectionHeader } from "@/common";
import { HomeCategories } from "./HomeCategories.component";
import {
  CategoryCard,
  FlashSalesWithArrow,
  ImageWithCountdown,
  ProductCard,
  TitleWithArrows,
} from "./components";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Product } from "@/types";
import { useRef } from "react";
import Link from "next/link";
import { Categories } from "./data/Categories";
interface HomeContentProps {
  products: Product[];
}

export const HomeContent: React.FC<HomeContentProps> = ({ products }) => {
  const scrollableDivRef = useRef<HTMLDivElement>(null);
  const secondScrollableDivRef = useRef<HTMLDivElement>(null);
  const categories = Categories();
  const t = useTranslations("");
  const { locale } = useParams();

  return (
    <>
      <HomeCategories />
      <div className="mx-[8.438rem]">
        <SectionHeader title="title" />
        <FlashSalesWithArrow scrollableDivRef={scrollableDivRef} />
        <div
          className="flex items-center mb-[8.125rem] overflow-x-auto no-scrollbar"
          ref={scrollableDivRef}
        >
          <div className="flex gap-8">
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
        <div className="text-base font-medium text-white bg-red px-12 py-3 mb-[3.75rem]  w-fit mx-auto">
          <Link href={"/products"}>{t("random.viewallproducts")}</Link>
        </div>
        <hr className="mb-[4.4rem]" />
        <SectionHeader title="categories" />
        <TitleWithArrows scrollableDivRef={secondScrollableDivRef} />

        <div
          dir={locale === "en" ? "ltr" : "rtl"}
          className="flex items-center mb-[8.125rem] overflow-x-auto no-scrollbar"
          ref={secondScrollableDivRef}
        >
          <div className="flex gap-8">
            {categories?.map(({ title, image, url }) => (
              <CategoryCard
                image={image}
                title={title}
                url={url}
                key={`title ${title}+ image ${image}`}
              />
            ))}
          </div>
        </div>
        <hr className="mb-[4.4rem]" />
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
                <div
                  key={_id}
                  className={`${index <= 3 ? "block" : "hidden"} `}
                >
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
        <ImageWithCountdown
          imageUrl="https://images.pexels.com/photos/25823790/pexels-photo-25823790/free-photo-of-blocks-of-flats-in-city.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          targetDate="2024-09-12"
        />
      </div>
    </>
  );
};
