"use client";

import { VerticalColumnElements, VerticalColumnText } from "@/common";
import arrow from "@/assets/footer/arrow.png";
import qrCode from "@/assets/footer/qrCode.png";
import googlePlay from "@/assets/footer/google-play.png";
import appStore from "@/assets/footer/app-store.png";
import facebook from "@/assets/footer/facebook.png";
import instagram from "@/assets/footer/instagram.png";
import twitter from "@/assets/footer/twitter.png";
import linkedin from "@/assets/footer/linkedin.png";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
export const FooterContent = () => {
  const { locale } = useParams();
  const t = useTranslations("footer");

  return (
    <div className={`bg-black`} dir={locale === "en" ? "ltr" : "rtl"}>
      <div className="px-[8.438rem] pt-20 flex gap-[5.438rem] justify-center">
        <VerticalColumnElements>
          <div className="text-[#FAFAFA] text-2xl mb- font-bold">
            {t("exclusive")}
          </div>
          <div className="text-xl font-medium text-[#fafafa] py-6">
            {t("subscribe")}
          </div>
          <div className="text-base  text-[#fafafa] pb-4">{t("discount")}</div>
          <div className="relative">
            <input
              name="email"
              type="text"
              autoComplete="off"
              className={`
                bg-black border border-white p-2 rounded-md text-white 
                                ${locale === "en" ? "pr-10" : "pl-10"}
                `}
              placeholder={t("enterEmail")}
            />
            <Image
              src={arrow}
              alt="arrow"
              className={`
                absolute  top-[0.7rem] cursor-pointer
                ${locale === "en" ? "right-3 " : "rotate-180 left-3"}
                `}
            />
          </div>
        </VerticalColumnElements>
        <VerticalColumnText
          text={[
            { text: `${t("support")}` },
            { text: `${t("address")}` },
            { text: `${t("email")}` },
            { text: `${t("phone")}` },
          ]}
        />

        <VerticalColumnText
          text={[
            { text: `${t("account")}` },
            { text: `${t("myAccount")}`, url: `/${locale}/my-account` },
            { text: `${t("loginRegister")}`, url: `/${locale}/login` },
            { text: `${t("cart")}`, url: `/${locale}/cart` },
            { text: `${t("wishlist")}`, url: `/${locale}/wishlist` },
            { text: `${t("shop")}`, url: `/${locale}/shop` },
          ]}
        />
        <VerticalColumnText
          text={[
            { text: `${t("quickLink")}` },
            { text: `${t("privacyPolicy")}`, url: `/${locale}/privacy-policy` },
            { text: `${t("termsOfUse")}`, url: `/${locale}/terms-of-use` },
            { text: `${t("faq")}`, url: `/${locale}/faq` },
            { text: `${t("contact")}`, url: `/${locale}/contact` },
          ]}
        />
        <VerticalColumnElements>
          <div className="text-[#FAFAFA] text-xl mb- font-medium">
            {t("downloadApp")}
          </div>
          <p className="text-xs font-medium text-[#999898]  pt-6 pb-2">
            {t("saveWithApp")}
          </p>

          <div className="flex gap-3">
            <Image src={qrCode} alt="qrCode" width={100} />
            <div className=" flex flex-col gap-5 mt-1  ml-2">
              <Image src={googlePlay} alt="qrCode" className="cursor-pointer" />

              <Image src={appStore} alt="qrCode" className="cursor-pointer" />
            </div>
          </div>
          <div className="flex items-center justify-start gap-7 pt-6 ">
            <Image src={facebook} alt="socialIcon" className="cursor-pointer" />
            <Image
              src={instagram}
              alt="socialIcon"
              className="cursor-pointer"
            />
            <Image src={twitter} alt="socialIcon" className="cursor-pointer" />
            <Image src={linkedin} alt="socialIcon" className="cursor-pointer" />
          </div>
        </VerticalColumnElements>
      </div>

      <p className="text-[#575757] text-center mt-16 pt-4 pb-6 border-t border-[#252525]">
        © Copyright Tarek 2024. All right reserved
      </p>
    </div>
  );
};
