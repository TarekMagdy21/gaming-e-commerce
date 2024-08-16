import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import ReactQueryProvider from "@/utils/ReactQueryProvider";
import { Toaster } from "sonner";
import { NavbarContent } from "@/components";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "Made By Tarek Magdy",
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${inter.className} ${poppins.variable}`}>
        <NextIntlClientProvider messages={messages}>
          <ReactQueryProvider>
            <Toaster richColors />
            <NavbarContent>{children}</NavbarContent>
          </ReactQueryProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
