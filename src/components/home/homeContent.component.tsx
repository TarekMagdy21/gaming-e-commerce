"use client";
import { SectionHeader } from "@/common";
import { HomeCategories } from "./HomeCategories.component";
import { Countdown, FlashSalesWithArrow, ProductCard, ProductCarousel } from "./components";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import leftArrow from "@/assets/homeProduct/leftArrow.png";
import rightArrow from "@/assets/homeProduct/rightArrow.png";
import Image from "next/image";
interface HomeContentProps {}

export const HomeContent: React.FC<HomeContentProps> = () => {
  const t = useTranslations("header");
  const { locale } = useParams();
  return (
    <>
      <HomeCategories />
      <div className="mx-[8.438rem]">
        <SectionHeader title="title" />
        <FlashSalesWithArrow />
       <ProductCarousel/>
      </div>
    </>
  );
};
