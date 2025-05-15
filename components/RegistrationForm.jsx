import React from "react";

const RegistrationForm = () => {
  return (
    <div className="min-h-screen w-1/2 mx-auto bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8 border border-gray-200 shadow-md m-4">
      <div className="sm:mx-auto sm:w-full sm:max-w-md space-y-4 mb-5">
        <h2 className="mt-3 text-center text-xl  font-extrabold text-gray-900">
          Sign up to your account
        </h2>
        <p className="text-center text-md text-gray-500 font-semibold">
          Please enter your personal data
        </p>
      </div>

      <form method="POST" action="#">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-5  text-gray-700"
          >
            Name
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="name"
              name="name"
              placeholder="Enter your name"
              type="text"
              required=""
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="email"
              name="email"
              placeholder="Enter your email"
              type="email"
              required=""
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Phone Number
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              type="text"
              required=""
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
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
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              required=""
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>

        <div className="mt-6">
          <label
            htmlFor="password_confirmation"
            className="block text-sm font-medium leading-5 text-gray-700"
          >
            Confirm Password
          </label>
          <div className="mt-1 rounded-md shadow-sm">
            <input
              id="password_confirmation"
              name="password_confirmation"
              type="password"
              placeholder="Confirm your password"
              required=""
              className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
            />
          </div>
        </div>

        <div className="mt-6">
          <span className="block w-36 mx-auto rounded-md shadow-sm">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-pink-600 hover:bg-pink-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
            >
              Sign Up
            </button>
          </span>
        </div>
        <div className="my-2">
          <p className="text-center">
            Have any account? <span className="text-pink-600">Login</span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
