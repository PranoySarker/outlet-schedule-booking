import React from "react";
import { useForm } from "react-hook-form";

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="min-h-screen w-1/2 mx-auto bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8 border border-gray-200 shadow-md m-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-md space-y-4 mb-5">
        <h2 className="mt-3 text-center text-xl  font-bold text-gray-900">
          Log in to your account
        </h2>
        <p className="text-center text-md text-gray-500 font-semibold">
          Please enter your email and password to continue
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Email address
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
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Password
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required=""
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <input type="checkbox" id="remember" name="remember" value="true" />
            <label htmlFor="remember"> Remember Password</label>
          </div>
          <Link href="/forgot-password" className="text-orange-600">
            Forgot Password?
          </Link>
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
