"use client";
import { useParams } from "next/navigation";
import { Countdown } from "./CountDown.component";
import { useTranslations } from "next-intl";
import leftArrow from "@/assets/homeProduct/leftArrow.png";
import rightArrow from "@/assets/homeProduct/rightArrow.png";
import Image from "next/image";
import { Ref } from "react";

export const TitleWithArrows = ({
  scrollableDivRef,
}: {
  scrollableDivRef: any;
}) => {
  const { locale } = useParams();
  const t = useTranslations("header");
  // Function to scroll left
  const scrollLeft = () => {
    if (scrollableDivRef?.current) {
      scrollableDivRef?.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollableDivRef?.current) {
      scrollableDivRef?.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  return (
    <div
      className=" mt-6 flex items-center gap-20 mb-[4.375rem] "
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      <p className="text-4xl font-semibold">{t("browse")}</p>
       <div
        className={`flex items-center gap-2 ${
          locale === "en" ? "ml-auto" : "mr-auto flex-row-reverse"
        }`}
      >
        <Image
          src={leftArrow}
          alt="leftArrow"
          className="cursor-pointer"
          onClick={scrollLeft}
        />
        <Image
          src={rightArrow}
          alt="leftArrow"
          className="cursor-pointer"
          onClick={scrollRight}
        />
      </div>
    </div>
  );
};
