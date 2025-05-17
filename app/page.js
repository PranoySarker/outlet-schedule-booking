import React from "react";
import IsLoggedIn from "@/components/IsLoggedIn";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Homepage</h1>
      <IsLoggedIn />
      <Link href="/dashboard/login" className="text-lg">
        Login to Dashboard
      </Link>
    </div>
  );
};

export default Homepage;
