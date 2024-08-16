"use client";
import Image from "next/image";
import LoginForm from "./loginForm.component";
import { SideImage } from "@/assets";
import { useParams } from "next/navigation";
interface LoginContentProps {
  loginHandler: (data: { email: string; password: string }) => void;
  loginHandlerLoading: boolean;
}
export const LoginContent: React.FC<LoginContentProps> = ({
  loginHandler,
  loginHandlerLoading,
}) => {
  const { locale } = useParams();
  return (
    <div
      className={`flex items-center justify-center `}
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      <Image src={SideImage} alt="sideImage" className="w-full" />
      <LoginForm
        loginHandler={loginHandler}
        loginHandlerLoading={loginHandlerLoading}
      />
    </div>
  );
};
