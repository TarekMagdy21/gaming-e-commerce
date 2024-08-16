"use client";
import { LoginContent } from "@/components";
import { useAuthLogin } from "@/hooks/mutations/auth";
interface LoginHocProps {}
export const LoginHoc: React.FC<LoginHocProps> = () => {
  const { mutate, isPending } = useAuthLogin();
  return (
    <LoginContent
      loginHandler={(data) => mutate(data)}
      loginHandlerLoading={isPending}
    />
  );
};
