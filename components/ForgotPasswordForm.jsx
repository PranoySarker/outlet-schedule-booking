"use client";

import { sendOtp } from "@/redux/features/actions/sendOtp";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

const ForgotPasswordForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const result = await dispatch(sendOtp(data));

    if (sendOtp.fulfilled.match(result)) {
      toast.success("OTP sent to email");
      router.push("/verify-code");
    } else {
      toast.error("OTP sending failed!");
    }
  };

  return (
    <div className="min-h-96 w-1/2 mx-auto bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8 border border-gray-200 shadow-md m-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-md space-y-4 mb-5">
        <h2 className="mt-3 text-center text-xl  font-bold text-gray-900">
          Forgot Password?
        </h2>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Email
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              {...register("email", { required: "Email is required" })}
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              required=""
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mt-6">
          <span className="block w-36 mx-auto rounded-md shadow-sm">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-pink active:bg-pink-700 transition duration-150 ease-in-out"
            >
              Send Code
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
