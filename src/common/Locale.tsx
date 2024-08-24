"use client";

import { useParams } from "next/navigation";

export const Locale = () => {
  const { locale } = useParams();
  return locale;
};
