"use client";
import { VerticalColumnTextHome } from "@/common";
import { SliderProduct } from "./components";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";

interface HomeCategoriesProps {}
export const HomeCategories: React.FC<HomeCategoriesProps> = () => {
  const { locale } = useParams();
  const t = useTranslations("category");

  return (
    <div
      className={`flex ${
        locale === "en" ? "ml-[8.438rem]" : "mr-[8.438rem]"
      } mb-[4.375rem]`}
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      <div className=" pt-8   ">
        <VerticalColumnTextHome
          text={[
            { text: t("electronics"), url: "/" },
            { text: t("mobiles"), url: "" },
            { text: t("grocery"), url: "" },
            { text: t("beautyHealth"), url: "" },
            { text: t("fashion"), url: "" },
            { text: t("homeKitchen"), url: "" },
            { text: t("sportsFitness"), url: "" },
            { text: t("babyProducts"), url: "" },
          ]}
        />
      </div>
      <div
        className={`w-[0.1rem] h-[24.5rem] bg-gray-200  ${
          locale === "en" ? "ml-6" : "mr-6"
        }`}
      />
      <div className={`${locale === "en" ? "ml-10" : "mr-10"} w-3/4    mt-4`}>
        <SliderProduct />
      </div>
    </div>
  );
};
