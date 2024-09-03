"use client"
import { userCreateType } from "@/types";
import { SignUpForm } from "./signupForm.component";
import { useParams } from "next/navigation";
import Image from "next/image";
import { SideImage } from "@/assets";
interface SignUpContentProps {
  createUserHandler: (data: userCreateType) => void;
  createUserLoading: boolean;
}
export const SignUpContent: React.FC<SignUpContentProps> = ({
  createUserHandler,
  createUserLoading,
}) => {
  const { locale } = useParams();
  return (
    <div
      className={`flex items-center justify-center `}
      dir={locale === "en" ? "ltr" : "rtl"}
    >
      <Image src={SideImage} alt="sideImage" className="w-full" />
      <SignUpForm
        createUserHandler={createUserHandler}
        createUserLoading={createUserLoading}
      />
    </div>
  );
};
