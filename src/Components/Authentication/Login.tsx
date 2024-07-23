import React from "react";
import Input from "./Input.tsx";
import Button from "./Button.tsx";

// Firebase
import { auth, provider } from "../../firebase.js";
import { signInWithPopup } from "firebase/auth";

// React
import { FormEvent, useRef } from "react";

// Redux
import { setUser } from "../../slices/user.slice.ts";
import { AppDispatch } from "../../store/store.ts";
import { useDispatch } from "react-redux";

// Router
import { Link, useNavigate } from "react-router-dom";

interface RequestBodyType {
  email?: string;
  password?: string;
}

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const submitForm = async (requestBody: RequestBodyType): Promise<void> => {
    try {
      const response = await fetch("/api/auth/signin", {
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
    const password = passwordRef.current?.value;
    await submitForm({ email, password });
  };

  const handleGoogleLogin = async () => {
    const data = await signInWithPopup(auth, provider);
    const { email } = data.user;
    const { uid: password } = data.user.providerData[0];

    if (!email || !password) {
      return;
    }
    await submitForm({ email, password });
  };

  return (
    <section className="py-32 container mx-auto flex flex-col gap-[15px] justify-center items-center w-80">
      <div className="container mx-auto">
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center border border-[#B6B7BC] px-6 py-3 mb-4 w-80 rounded-[4px]"
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
          <Input ref={emailRef} type="email" label="Email" />
          <Input ref={passwordRef} type="password" label="Password" />
          <div className="leading-[24.5px] text-xs font-medium text-[#5C5F6A] mb-6 text-right">
            <Link to="/forget-password">Forgot Password?</Link>
          </div>
          <Button>Login</Button>
        </form>
        {/* Submit Form End */}
        <div className="leading-[24.5px] text-[#5C5F6A] mt-6 text-center">
          Don't have an account? <Link to="/sign-up">Sign up</Link>
        </div>
      </div>
    </section>
  );
};

export default Login;
