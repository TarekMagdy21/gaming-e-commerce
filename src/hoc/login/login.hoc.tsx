"use client";
import { LoginContent } from "@/components";
import { useLogin } from "@/hooks/mutations";
interface LoginHocProps {}
export const LoginHoc: React.FC<LoginHocProps> = () => {
  const { mutate, isPending } = useLogin();
  return (
    <LoginContent
      loginHandler={(data) => mutate(data)}
      loginHandlerLoading={isPending}
    />
  );
};
