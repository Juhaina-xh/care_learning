"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import LoginHeader from "@/sections/header";
import { registerUser } from "../lib/auth";
import StatusBar from "@/components/StatusBar";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ message: "", type: "info" });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();
  type RegisterFormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  const onSubmit = async (data: RegisterFormData) => {
    try {
      setLoading(true);

      const response = await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.confirmPassword,
      });

      if (response?.success || response?.status === 200) {
        setStatus({
          message: "Registration successful! Redirecting...",
          type: "success",
        });
        router.push("/login");
      } else if (response?.data) {
        const errors = response.data;
        if (Object.keys(errors).length > 0) {
          const allErrors = Object.values(errors).flat().join(" ");
          setStatus({
            message: allErrors,
            type: "error",
          });
        } else {
          setStatus({
            message:
              response?.message || "Registration failed. Please try again.",
            type: "error",
          });
        }
      } else {
        setStatus({
          message:
            response?.message || "Registration failed. Please try again.",
          type: "error",
        });
      }
    } catch (err: unknown) {
      let errorMessage = "Something went wrong";
      console.log("err", err);
      if (typeof err === "object" && err !== null && "response" in err) {
        const error = err as {
          response?: {
            data?: {
              success?: boolean;
              message?: string;
              data?: Record<string, string[]>;
            };
          };
        };

        const apiData = error.response?.data;

        if (apiData?.data && Object.keys(apiData.data).length > 0) {
          errorMessage = Object.values(apiData.data).flat().join(" ");
        } else if (apiData?.message) {
          errorMessage = apiData.message;
        }
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
          {/* Left layout */}
          <div className="left-layout">
            <div className="layout-txt">
              <h2>Start your Journey</h2>
              <p>Please enter your email and we will send an OTP code in the next step to reset your password</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 img-row">
              {[1, 2, 3].map((i) => (
                <div key={i} className="img-col img-reg-col">
                  <Image
                    src={`/images/img-reg-${i}.png`}
                    alt={`icon ${i}`}
                    width={200}
                    height={200}
                  />
                  <p>Food Safety & Hygiene</p>
                </div>
              ))}
            </div>
          </div>

          <div className="form-col">
            <h2>
              Create an <br /> account
            </h2>

            <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
              <input
                type="text"
                placeholder="Enter name"
                {...register("name", { required: "Name is required" })}
                className="p-3 w-full rounded mb-2 name-inp"
              />
              {errors.name && (
                <p className="error-msg">{errors.name.message as string}</p>
              )}

              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="p-3 w-full rounded mb-2 email-inp"
              />
              {errors.email && (
                <p className="error-msg">{errors.email.message as string}</p>
              )}

              <input
                type="password"
                placeholder="Enter password"
                {...register("password", { required: "Password is required" })}
                className="p-3 w-full rounded mb-2 password-inp"
              />
              {errors.password && (
                <p className="error-msg">{errors.password.message as string}</p>
              )}

              <input
                type="password"
                placeholder="Re-enter password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (val) =>
                    watch("password") === val || "Passwords do not match",
                })}
                className="p-3 w-full rounded mb-2 password-inp"
              />
              {errors.confirmPassword && (
                <p className="error-msg">
                  {errors.confirmPassword.message as string}
                </p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="btn-signup btn-submit flex items-center justify-between mt-4"
              >
                {loading ? "Signing up..." : "Signup"}
                <span className="flex items-center justify-center">
                  <Image
                    src="/images/icons/icon-btn-arrow.svg"
                    alt="arrow"
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
                  alt="apple"
                  width={20}
                  height={20}
                />
              </span>
              With Apple
            </Link>

            <Link className="forgot-link" href="/login">
              Login
            </Link>
            <p className="text-center btm-txt">
              By signing in you agree to our <Link href='' className="terms-link">Terms & Conditions and Privacy
              Policy.</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
