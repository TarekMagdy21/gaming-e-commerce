import { ReactNode } from "react";
import { HeaderContent } from "./Header";
import { FooterContent } from "./Footer";
import { AdWithLanguage } from "./AdWithLanguage";

interface NavbarContentProps {
  children: ReactNode;
}

export const NavbarContent = ({ children }: NavbarContentProps) => {
  return (
    <div className=" min-h-screen font-poppins flex flex-col">
      <AdWithLanguage />
      <HeaderContent />
      <div className="flex-grow "> {children}</div>
      <FooterContent />
    </div>
  );
};
