"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import LoginHeader from "@/sections/header";
import { loginUser } from "../lib/auth";
import { useAuth } from "../context/AuthContext";
import { isAxiosError } from "../lib/axios";

import StatusBar from "@/components/StatusBar";

type LoginFormData = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ message: string; type: string }>({
    message: "",
    type: "info",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      setLoading(true);
      const response = await loginUser(data);

      if (!response.success) {
        setStatus({
          message: response.message || "Login failed. Please try again.",
          type: "error",
        });
        return;
      }

      login(response?.data?.user, response?.data?.token);
      setStatus({
        message: "Login successful! Redirecting...",
        type: "success",
      });
      router.push("/");
    } catch (error: unknown) {
      console.log("error", error);
      let errorMessage = "Login failed. Please try again.";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      setStatus({
        message: errorMessage,
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <StatusBar
        message={status.message}
        type={status.type}
        onClose={() => setStatus({ message: "", type: "info" })}
      />

      <div className="authPage">
        <div className="container-fluid">
          <LoginHeader />
        </div>

        <div className="auth-row container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2">
          {/* LEFT SECTION */}
          <div className="left-layout">
            <div className="layout-txt">
              <h2>Start your Journey</h2>
              <p>Log in with your credentials to continue learning.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 img-row">
              {[1, 2, 3].map((i) => (
                <div
                  className="img-col flex items-center justify-center"
                  key={i}
                >
                  <Image
                    src={`/images/icons/icon-login-${i}.png`}
                    alt={`care learning ${i}`}
                    width={200}
                    height={200}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="form-col">
            <h2>
              Welcome <br /> Back
            </h2>

            <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder="Email"
                className="p-3 w-full rounded mb-2 email-inp"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email",
                  },
                })}
              />
              {errors.email && (
                <p className="error-msg">{errors.email.message}</p>
              )}

              <input
                type="password"
                placeholder="Password"
                className="p-3 w-full rounded mb-2 password-inp"
                {...register("password", { required: "Password is required" })}
              />
              {errors.password && (
                <p className="error-msg">{errors.password.message}</p>
              )}

              <Link href="/forgot-password" className="forgot-link">
                Forgot Your password?
              </Link>

              <button
                type="submit"
                disabled={loading}
                className="btn-submit flex items-center justify-between mt-4"
              >
                {loading ? "Logging in..." : "Login"}
                <span className="flex items-center justify-center">
                  <Image
                    src="/images/icons/icon-btn-arrow.svg"
                    alt="care learning"
                    width={20}
                    height={20}
                  />
                </span>
              </button>
            </form>

            <p className="or-txt">or login with</p>
            <Link
              className="btn-apple flex items-center justify-center gap-2"
              href="#"
            >
              <span>
                <Image
                  src="/images/icons/icon-apple.svg"
                  alt="care learning"
                  width={20}
                  height={20}
                />
              </span>
              With Apple
            </Link>

            <p className="or-txt">Don&apos;t have an account?</p>
            <Link className="forgot-link forgot-link-2" href="/register">
              Create Account
            </Link>

            <p className="text-center btm-txt">
              By signing in you agree to our{" "}
              <Link href="" className="terms-link">
                Terms & Conditions and Privacy Policy.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
