//make me a type that takes date and image url

import { TimeLeft } from "@/types";
import { calculateTimeLeft } from "@/utils";
import { useTranslations } from "next-intl";
import React, { useEffect, useState } from "react";
import radio from "@/assets/homeProduct/radioWithBg.svg";
import Image from "next/image";
import { useParams } from "next/navigation";
interface ImageWithCountdownProps {
  targetDate: string;
  imageUrl: string;
}

export const ImageWithCountdown: React.FC<ImageWithCountdownProps> = ({
  targetDate,
  imageUrl,
}) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft({ targetDate })
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft({ targetDate }));
    }, 1000);

    return () => clearTimeout(timer);
  });
  const t = useTranslations("");
  const { locale } = useParams();
  return (
    <div
      className="flex items-center justify-between bg-black p-11 mb-[4.5rem]"
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      <div className="w-1/3">
        <p className="mb-8 text-[#00FF66] text-xl font-semibold">
          {t("header.categories")}
        </p>
        <p className="text-white text-5xl font-semibold mb-8 leading-snug">
          {t("imageWithText.enhance")}{" "}
        </p>
        <div className="flex items-center justify-start gap-6 mb-10">
          <div
            className={`bg-white text-black   flex flex-col items-center  ${
              locale === "en" ? "px-[0.938rem] py-[0.875rem]" : "px-6 py-3"
            } rounded-full`}
          >
            <p className="text-base font-semibold">{timeLeft?.days}</p>
            <p className="text-sm font-poppins ">{t("countdown.day")}</p>
          </div>
          <div
            className={`bg-white text-black   flex flex-col items-center  ${
              locale === "en" ? "px-[1.063rem] py-[0.875rem]" : "px-6 py-3"
            } rounded-full`}
          >
            <p className="text-base font-semibold">{timeLeft?.hours}</p>
            <p className="text-sm font-poppins ">{t("countdown.hour")}</p>
          </div>
          <div
            className={`bg-white text-black   flex flex-col items-center  ${
              locale === "en" ? "px-[0.625rem] py-[0.875rem]" : "px-6 py-3"
            } rounded-full`}
          >
            <p className="text-base font-semibold">{timeLeft?.minutes}</p>
            <p className="text-sm font-poppins ">{t("countdown.minute")}</p>
          </div>
          <div
            className={`bg-white text-black     flex flex-col items-center  ${
              locale === "en" ? "px-[0.438rem] py-[0.875rem]" : "px-6 py-3"
            }  rounded-full`}
          >
            <p className="text-base font-semibold">{timeLeft?.seconds}</p>
            <p className="text-sm font-poppins ">{t("countdown.second")}</p>
          </div>
        </div>
        <button className="text-white font-medium px-12 py-3 bg-[#00FF66] rounded-md">
          {t("imageWithText.buy")}{" "}
        </button>
      </div>
      <div className="relative p-5">
        {/* Blurred background */}
        <div className="absolute inset-0 bg-white bg-opacity-20   rounded-full  blur-2xl"></div>

        {/* Image */}
        <Image src={radio} alt="Radio" className="relative rounded-lg" />
      </div>
    </div>
  );
};
