import { Locale } from "@/common/Locale";
import { useTranslations } from "next-intl";
import { CiMobile4 } from "react-icons/ci";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { LiaBookSolid } from "react-icons/lia";
import { MdOutlineSoupKitchen, MdOutlineSportsTennis } from "react-icons/md";
import { PiBabyCarriage } from "react-icons/pi";
import { SlUserFemale } from "react-icons/sl";

export const Categories = () => {
  const t = useTranslations("category");
  const categoriesData = [
    { title: t("mobiles"), image: <CiMobile4 size={50} />, path: "mobiles" },
    { title: t("books"), image: <LiaBookSolid size={50} />, path: "books" },
    {
      title: t("babyProducts"),
      image: <PiBabyCarriage size={50} />,
      path: "baby-products",
    },
    { title: t("fashion"), image: <SlUserFemale size={50} />, path: "fashion" },
    {
      title: t("babyProducts"),
      image: <IoMusicalNotesOutline size={50} />,
      path: "music",
    },
    {
      title: t("music"),
      image: <MdOutlineSportsTennis size={50} />,
      path: "sports",
    },
    {
      title: t("homeKitchen"),
      image: <MdOutlineSoupKitchen size={50} />,
      path: "kitchen",
    },
  ];
  const locale = Locale();

  const categories = categoriesData.map((category) => ({
    ...category,
    url: `/${locale}/${category.path}`,
  }));

  return categories;
};
