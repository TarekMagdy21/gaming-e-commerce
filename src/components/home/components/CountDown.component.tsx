"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: string;
}

interface TimeLeft {
  days?: string;
  hours?: string;
  minutes?: string;
  seconds?: string;
}

export const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
          2,
          "0"
        ),
        hours: String(
          Math.floor((difference / (1000 * 60 * 60)) % 24)
        ).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
          2,
          "0"
        ),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
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
