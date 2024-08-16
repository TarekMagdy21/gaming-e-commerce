import { userCreateType } from "@/types";
import { SignUpForm } from "./signupForm.component";
interface SignUpContentProps {
  createUserHandler: (data: userCreateType) => void;
  createUserLoading: boolean;
}
export const SignUpContent: React.FC<SignUpContentProps> = ({
  createUserHandler,
  createUserLoading,
}) => {
  return (
    <div>
      <SignUpForm
        createUserHandler={createUserHandler}
        createUserLoading={createUserLoading}
      />
    </div>
  );
};
