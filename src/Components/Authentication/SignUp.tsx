import React from "react";
import Input from "./Input.tsx";
import Button from "./Button.tsx";

// Firebase
import { auth, provider } from "../../firebase.js";
import { signInWithPopup } from "firebase/auth";

// React Hooks
import { useRef, FormEvent } from "react";

// Redux Types
import { AppDispatch } from "../../store/store.ts";

// Redux Hooks
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/user.slice.ts";

// Router
import { Link, useNavigate } from "react-router-dom";

interface RequestBodyType {
  fullName?: string;
  email?: string;
  password?: string;
}

const SignUp = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const fullNameRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const submitForm = async (requestBody: RequestBodyType): Promise<void> => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.error);
        return;
      }

      console.log(data);

      sessionStorage.setItem("user", JSON.stringify(data));

      dispatch(
        setUser({
          email: data.email,
          fullName: data.fullName,
          password: data.password,
          isAdmin: data.isAdmin,
          _id: data._id,
        })
      );

      if (emailRef.current) {
        emailRef.current.value = "";
      }

      if (passwordRef.current) {
        passwordRef.current.value = "";
      }

      if (fullNameRef.current) {
        fullNameRef.current.value = "";
      }

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    event.preventDefault();

    const email = emailRef.current?.value;
    const fullName = fullNameRef.current?.value;
    const password = passwordRef.current?.value;

    await submitForm({ email, fullName, password });
  };

  const handleGoogleSubmit = async (): Promise<void> => {
    const data = await signInWithPopup(auth, provider);
    const { displayName: fullName, email } = data.user;
    const { uid: password } = data.user.providerData[0];

    if (!fullName || !email || !password) {
      return;
    }

    await submitForm({ email, fullName, password });
  };

  return (
    <section className="py-32 container mx-auto flex flex-col gap-[15px] justify-center items-center w-80">
      <div className="container mx-auto">
        <button
          onClick={handleGoogleSubmit}
          className="flex items-center justify-center border border-[#B6B7BC] px-6 py-3 w-80 rounded-[4px]"
        >
          <img
            className="w-[24px] pr-3"
            src={require("../../Images/Google.png")}
            alt=""
          />
          <span className="text-[#5C5F6A] font-medium text-sm leading-[24px]">
            Continue with Google
          </span>
        </button>
        <div className="flex items-center py-4">
          <div className="w-32 h-[1px] bg-[#E6E7E8]"></div>
          <span className="px-4 text-[#5C5F6A] text-xs font-medium">OR</span>
          <div className="w-32 h-[1px] bg-[#E6E7E8]"></div>
        </div>
        {/* Submit Form */}
        <form onSubmit={handleSubmit}>
          <Input ref={fullNameRef} type="text" label="Name" />
          <Input ref={emailRef} type="email" label="Email" />
          <Input ref={passwordRef} type="password" label="Password" />
          <div className="leading-6 text-sm capitalize text-[#5C5F6A] mb-6">
            By creating an account you agree with our Terms of Service, Privacy
            Policy,
          </div>
          <Button>Create account</Button>
        </form>
        {/* Submit Form End */}
        <div className="leading-[24.5px] text-[#5C5F6A] mt-6 text-center">
          Already have an account? <Link to="/sign-in">Log in</Link>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
