import React, { FormEvent, useRef } from "react";
import Input from "./Input.tsx";
import Button from "./Button.tsx";

// Router
import { useNavigate } from "react-router";

const ForgetPassword = () => {
  const emailRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();
    const email = emailRef.current?.value;

    if (!email) {
      return;
    }

    try {
      const response = await fetch("/api/auth/forget-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data.error);
      }
    } catch (error) {
      console.log(error);
    }

    localStorage.setItem("email", JSON.stringify(email));
  };

  return (
    <section className="py-36 container mx-auto flex flex-col gap-[15px] justify-center items-center w-80">
      <div className="container mx-auto">
        <div className="text-[#474B57] text-sm leading-[24.5px] mb-6">
          Please enter the email address associated with your account. We'll
          promptly send you a link to reset your password.
        </div>
        <form onSubmit={handleSubmit}>
          <Input ref={emailRef} type="email" label="Email" />
          <Button>Send reset link</Button>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;
