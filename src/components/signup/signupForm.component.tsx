"use client"
import { userCreateType } from "@/types";
import { useState } from "react";

interface SignUpContentProps {
  createUserHandler: (data: userCreateType) => void;
  createUserLoading: boolean;
}
export const SignUpForm: React.FC<SignUpContentProps> = ({
  createUserHandler,
  createUserLoading,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const formDataHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    createUserHandler(formData);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={formDataHandler}
        />
        <input
          name="email"
          type="text"
          placeholder="Email"
          onChange={formDataHandler}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={formDataHandler}
        />
        <button type="submit" disabled={createUserLoading}>
          {createUserLoading ? "Loading..." : "Create User"}
        </button>
      </form>
    </div>
  );
};
