"use client";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

type SectionHeaderProps = {
  title: string;
};
export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const t = useTranslations("header");
  const { locale } = useParams();
  return (
    <div
      className={`${
        locale === "en" ? "flex " : " flex flex-row-reverse"
      } items-center gap-[0.625rem]`}
    >
      <div className="w-5 h-10 bg-red  rounded"></div>
      <p className="font-semibold text-base text-red">{t(title)}</p>
    </div>
  );
};
