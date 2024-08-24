import { SectionHeader } from "@/common";
import { useTranslations } from "next-intl";
import ps5 from "@/assets/homeProduct/ps5.svg";
import blackHat from "@/assets/homeProduct/blackHat.svg";
import perfume from "@/assets/homeProduct/perfume.svg";
import speakers from "@/assets/homeProduct/speakers.svg";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export const NewArrival = () => {
  const t = useTranslations("");
  const { locale } = useParams();
  return (
    <div className="mb-[8.75rem]">
      <SectionHeader title="feature" />
      <p
        className="text-4xl font-semibold mt-5 mb-[3.75rem]"
        dir={locale === "en" ? "ltr" : "rtl"}
      >
        {t("header.newArrival")}
      </p>
      <div className="flex gap-[1.875rem]  w-full ">
        <div className="w-full relative">
          <Image src={ps5} alt="ps5" className="  object-cover w-full" />
          <div className="text-white absolute bottom-8 left-8 w-1/2 ">
            <p className="font-medium text-2xl ">PlayStation 5</p>
            <p className="my-4 text-sm">
              Black and white version of the ps5 coming out on sale.
            </p>
            <Link href={"/"} className="underline text-base font-medium">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="w-full relative">
          <Image
            src={speakers}
            alt="speakers"
            className="  object-cover w-full"
          />
          <div className="text-white absolute bottom-8 left-8 w-1/2 ">
            <p className="font-medium text-2xl ">Speakers</p>
            <p className="my-2 text-sm">Amazon wireless speakers</p>
            <Link href={"/"} className="underline text-base font-medium">
              Shop Now
            </Link>
          </div>
        </div>
        <div className="w-full relative">
          <Image
            src={perfume}
            alt="perfume"
            className="  object-cover w-full"
          />
          <div className="text-white absolute bottom-8 left-8 w-1/2 ">
            <p className="font-medium text-2xl ">Perfume</p>
            <p className="my-2 text-sm">GUCCI INTENSE OUD EDP </p>
            <Link href={"/"} className="underline text-base font-medium">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
