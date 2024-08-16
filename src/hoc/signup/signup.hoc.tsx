"use client";
import { SignUpContent } from "@/components";
import { useUserCreate } from "@/hooks";
import { userCreateType } from "@/types";

interface SignUpHocProps {}
export const SignUpHoc: React.FC<SignUpHocProps> = () => {
  const { mutate, isPending, data } = useUserCreate();
  return (
    <>
      <SignUpContent
        createUserHandler={(data: userCreateType) => mutate(data)}
        createUserLoading={isPending}
      />
    </>
  );
};
