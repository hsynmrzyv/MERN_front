import React, { useRef, FormEvent } from "react";
import Input from "./Input.tsx";
import Button from "./Button.tsx";

// Router
import { useNavigate } from "react-router";

const ResetPassword = () => {
  const newPasswordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const newPassword = newPasswordRef.current?.value;
    const confirmPassword = confirmPasswordRef.current?.value;

    const emailString = localStorage.getItem("email");
    const email = emailString ? JSON.parse(emailString) : null;

    const response = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, newPassword, confirmPassword }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.log(data.error);
      return;
    }

    localStorage.removeItem("email");
    navigate("/sign-in");
  };

  return (
    <section className="py-32 container mx-auto flex flex-col gap-[15px] justify-center items-center w-80">
      <div className="container mx-auto">
        <form onSubmit={handleSubmit}>
          <Input ref={newPasswordRef} type="password" label="New password" />
          <Input
            ref={confirmPasswordRef}
            type="password"
            label="Confirm password"
          />
          <Button>Reset password</Button>
        </form>
      </div>
    </section>
  );
};

export default ResetPassword;
