"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import searchIcon from "@/assets/navbar/searchIcon.svg";
import Image from "next/image";
import { useParams } from "next/navigation";
export const HeaderContent = () => {
  const { locale } = useParams();
  const t = useTranslations("NavbarHeader");
  //  Home Contact About SignUp
  return (
    <div
      className="flex items-center justify-between px-[8.438rem] pt-[1.375rem] pb-4 border-b"
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <p> {t("Exclusive")}</p>
      <div className="flex items-center justify-between gap-12">
        <Link href={"/"}>{t("Home")}</Link>
        <Link href={`/${locale}/contact`}>{t(`Contact`)}</Link>
        <Link href={`/${locale}/about`}>{t(`About`)}</Link>
        <Link href={`/${locale}/signup`}>{t(`SignUp`)}</Link>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder={t("search")}
          className={`bg-[#F5F5F5]   py-2 rounded-md ${
            locale === "en" ? "pr-10 pl-2" : " pr-2 pl-10"
          }`}
        />
        <Image
          src={searchIcon}
          alt="searchIcon"
          className={`absolute top-3 ${locale === "ar" ? "left-4" : "right-3"}`}
        />
      </div>
    </div>
  );
};
