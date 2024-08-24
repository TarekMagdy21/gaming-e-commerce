"use client";
import { CountdownProps, TimeLeft } from "@/types";
import { calculateTimeLeft } from "@/utils";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    calculateTimeLeft({ targetDate })
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft({ targetDate }));
    }, 1000);

    return () => clearTimeout(timer);
  });
  const t = useTranslations("countdown");
  const { locale } = useParams();
  return (
    <div
      className="flex items-center  gap-4 "
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      <div className="">
        <p className="text-xs font-semibold">{t("day")}</p>
        <p className="font-bold text-[2rem]">{timeLeft.days}</p>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <div className="w-1 h-1 bg-[#E07575] rounded-full" />
        <div className="w-1 h-1 bg-[#E07575] rounded-full" />
      </div>
      <div className="">
        <p className="text-xs font-semibold"> {t("hour")}</p>
        <p className="font-bold text-[2rem]">{timeLeft.hours}</p>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <div className="w-1 h-1 bg-[#E07575] rounded-full" />
        <div className="w-1 h-1 bg-[#E07575] rounded-full" />
      </div>
      <div className="">
        <p className="text-xs font-semibold"> {t("minute")}</p>
        <p className="font-bold text-[2rem]">{timeLeft.minutes}</p>
      </div>
      <div className="flex flex-col gap-2 mt-3">
        <div className="w-1 h-1 bg-[#E07575] rounded-full" />
        <div className="w-1 h-1 bg-[#E07575] rounded-full" />
      </div>
      <div className="">
        <p className="text-xs font-semibold"> {t("second")}</p>
        <p className="font-bold text-[2rem]">{timeLeft.seconds}</p>
      </div>
    </div>
  );
};
