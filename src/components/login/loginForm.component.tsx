"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

interface LoginFormProps {
  loginHandler: (data: { email: string; password: string }) => void;
  loginHandlerLoading: boolean;
}
const LoginForm: React.FC<LoginFormProps> = ({
  loginHandler,
  loginHandlerLoading,
}) => {
  const { locale } = useParams();
  const t = useTranslations("Login");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const formDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginHandler(formData);
  };
  return (
    <div
      className={`w-full mx-28 flex flex-col`}
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      <h1 className="text-4xl font-medium whitespace-nowrap">{t("log")}</h1>
      <p className="mt-6 text-base">{t("enter")}</p>
      <form onSubmit={onSubmit} className="mt-12">
        <input
          className="border-b w-full p-2"
          name="email"
          type="text"
          placeholder={t("email")}
          onChange={formDataHandler}
        />
        <input
          className="mt-10 border-b w-full p-2"
          name="password"
          type="password"
          placeholder={t("password")}
          onChange={formDataHandler}
        />
        <div className="mt-10 flex items-center justify-between">
          <button
            type="submit"
            disabled={loginHandlerLoading}
            className="text-white bg-red py-4 px-10 rounded-lg"
          >
            {loginHandlerLoading
              ? `${locale === "en" ? "Loading..." : "تحميل..."}`
              : `${t("login")}`}
          </button>
          <Link href={"/"} className="text-red">
            {t("forget")}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
