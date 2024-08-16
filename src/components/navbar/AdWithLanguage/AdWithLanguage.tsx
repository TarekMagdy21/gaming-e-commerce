"use client";
import { useTranslations } from "next-intl";
import { useParams, usePathname, useRouter } from "next/navigation";

export const AdWithLanguage = () => {
  const t = useTranslations("AdWithLanguage");
  const { locale } = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const handleChange = () => {
    if (locale === "ar") {
      router.push(pathname.replace("/ar", "/en"));
    } else {
      router.push(pathname.replace("/en", "/ar"));
    }
  };
  const navigateHome = () => {
    router.push(`/${locale}`);
  };
  return (
    <div
      className={`bg-black text-white py-3 ${
        locale === "ar" ? "flex-row-reverse" : ""
      } flex `}
    >
      <h1
        className={`text-center ${
          locale === "ar" ? "mr-auto pr-[8.5rem]" : "ml-auto pl-[8.5rem]"
        }`}
      >
        {t("advertisement")}{" "}
        <span
          className="mr-5 font-semibold mx-2 underline cursor-pointer"
          onClick={navigateHome}
        >
          {t("shop")}
        </span>{" "}
      </h1>
      <p
        onClick={handleChange}
        className={`cursor-pointer ${
          locale === "ar" ? "mr-auto pl-[8.5rem]" : "ml-auto pr-[8.5rem]"
        }`}
      >
        {locale === "ar" ? "English" : "عربي"}
      </p>
    </div>
  );
};
