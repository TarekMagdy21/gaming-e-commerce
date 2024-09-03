"use client";
import { SignUpContent } from "@/components";
import { useRegister } from "@/hooks";
import { authRegisterType } from "@/types";

interface SignUpHocProps {}
export const SignUpHoc: React.FC<SignUpHocProps> = () => {
  const { mutate, isPending, data } = useRegister();
  return (
    <>
      <SignUpContent
        createUserHandler={(data: authRegisterType) => mutate(data)}
        createUserLoading={isPending}
      />
    </>
  );
};
