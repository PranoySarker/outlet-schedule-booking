"use client";

import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const IsLoggedIn = () => {
  const userEmail = useSelector((state) => state.auth.user?.data?.email);

  return (
    <>
      {userEmail ? (
        <div>You are logged in as {userEmail}</div>
      ) : (
        <Link href="/login">Login as User</Link>
      )}
    </>
  );
};

export default IsLoggedIn;
