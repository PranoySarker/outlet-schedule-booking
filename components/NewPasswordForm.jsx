"use client";

import { resetPassword } from "@/redux/features/actions/resetPassword";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const NewPasswordForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (formData) => {
    if (formData.newPassword !== formData.renewPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    const data = {
      email,
      newPassword: formData.newPassword,
    };
    console.log(data);

    const result = await dispatch(resetPassword(data));

    if (resetPassword.fulfilled.match(result)) {
      toast.success("Password reset successfully!");
      router.push("/login");
    } else {
      toast.error("Password reset failed!");
    }
  };

  return (
    <div className=" w-1/2 mx-auto bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8 border border-gray-200 shadow-md m-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-md space-y-4 mb-5">
        <h2 className="mt-3 text-center text-xl  font-bold text-gray-900">
          Set a new password
        </h2>
        <p className="text-center text-md text-gray-500 font-semibold">
          Create a new password. Ensure it differs from previous ones for
          security
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6">
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            New Password
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              {...register("newPassword", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              id="newPassword"
              name="newPassword"
              type="password"
              placeholder="Enter new password"
              required=""
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
            {errors.newPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.newPassword.message}
              </p>
            )}
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="renewPassword"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Confirm New Password
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              {...register("renewPassword", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              id="renewPassword"
              name="renewPassword"
              type="password"
              placeholder="Enter new password again"
              required=""
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
            {errors.renewPassword && (
              <p className="text-red-500 text-xs mt-1">
                {errors.renewPassword.message}
              </p>
            )}
          </div>
        </div>

        <div className="my-6">
          <span className="block w-36 mx-auto rounded-md shadow-sm">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:border-pink-700 focus:shadow-outline-indigo active:bg-pink-700 transition duration-150 ease-in-out"
            >
              Update Password
            </button>
          </span>
        </div>
      </form>
    </div>
  );
};

export default NewPasswordForm;
