"use client";

import React from "react";
import { useForm, Controller } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { verifyOtp } from "@/redux/features/actions/verifyOtp";

const VerifyCodeForm = () => {
  const dispatch = useDispatch();
  const { email } = useSelector((state) => state.auth);

  const { handleSubmit, control, setValue, getValues } = useForm({
    defaultValues: {
      otp0: "",
      otp1: "",
      otp2: "",
      otp3: "",
    },
  });

  const onSubmit = async (data) => {
    const code = `${data.otp0}${data.otp1}${data.otp2}${data.otp3}`;

    const result = await dispatch(verifyOtp({ email, otp: code }));

    if (verifyOtp.fulfilled.match(result)) {
      toast.success("OTP verified successfully");
      router.push("/reset-password");
    } else {
      toast.error(result.payload || "OTP verification failed!");
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    setValue(`otp${index}`, value);

    if (value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  return (
    <div className="w-1/2 mx-auto border border-gray-200 mt-20 rounded">
      <div className="sm:mx-auto sm:w-full sm:max-w-md space-y-4 mb-5">
        <h2 className="mt-3 text-center text-xl font-bold text-gray-900">
          Verification code
        </h2>
        <p className="text-center text-sm text-gray-500 font-semibold">
          We sent a reset link to your email, enter the 4-digit code from the
          email.
        </p>
      </div>

      <form className="shadow-md px-4 py-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-center gap-2 mb-6">
          {[0, 1, 2, 3].map((index) => (
            <Controller
              key={index}
              name={`otp${index}`}
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  {...field}
                  className="w-12 h-12 text-center border rounded-md shadow-sm focus:border-gray-300 focus:ring-gray-500"
                  type="text"
                  maxLength="1"
                  inputMode="numeric"
                  autoComplete="one-time-code"
                  onChange={(e) => handleChange(e, index)}
                  value={getValues(`otp${index}`)}
                  required
                />
              )}
            />
          ))}
        </div>

        <div className="flex flex-col justify-center items-center">
          <button
            className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Verify
          </button>
          <p className="text-sm text-gray-700 ml-4">
            You haven't received the email?{" "}
            <button className="text-pink-600 underline" type="button">
              Resend
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default VerifyCodeForm;
