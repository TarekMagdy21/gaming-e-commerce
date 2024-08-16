"use client";
import { useParams } from "next/navigation";
import { Countdown } from "./CountDown.component";
import { useTranslations } from "next-intl";
import leftArrow from "@/assets/homeProduct/leftArrow.png";
import rightArrow from "@/assets/homeProduct/rightArrow.png";
import Image from "next/image";

export const FlashSalesWithArrow = () => {
  const { locale } = useParams();
  const t = useTranslations("header");
  return (
    <div
      className=" mt-6 flex items-center gap-20 mb-[4.375rem] "
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      <p className="text-4xl font-semibold">{t("deal")}</p>
      <Countdown targetDate="2024-8-20" />
      <div
        className={`flex items-center gap-2 ${
          locale === "en" ? "ml-auto" : "mr-auto flex-row-reverse"
        }`}
      >
        <Image
          src={leftArrow}
          alt="leftArrow"
          className="cursor-pointer"
          onClick={() => {
            console.log("Left");
          }}
        />
        <Image
          src={rightArrow}
          alt="leftArrow"
          className="cursor-pointer"
          onClick={() => {
            console.log("right");
          }}
        />
      </div>
    </div>
  );
};
