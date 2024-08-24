import React from "react";
import truck from "@/assets/services/truck.svg";
import shield from "@/assets/services/sheild.svg";
import headphones from "@/assets/services/headphones.svg";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
export const Services = () => {
  const { locale } = useParams();
  return (
    <div
      dir={locale === "en" ? "ltr" : "rtl"}
      className="flex items-center mx-28 justify-around mb-[8.75rem]"
    >
      <ServiceCard
        icon={truck}
        title="services.freeShipping"
        description="services.freeShippingDesc"
      />
      <ServiceCard
        icon={headphones}
        title="services.support24"
        description="services.support24Desc"
      />

      <ServiceCard
        icon={shield}
        title="services.moneyBack"
        description="services.moneyBackDesc"
      />
    </div>
  );
};

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}
const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  const t = useTranslations("");

  return (
    <div className="text-center flex flex-col justify-center items-center">
      <Image src={icon} alt="title" />
      <p className="text-xl font-semibold mt-6 mb-2">{t(title)}</p>
      <p className="text-sm">{t(description)}</p>
    </div>
  );
};
