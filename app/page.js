import React from "react";
import IsLoggedIn from "@/components/IsLoggedIn";

const Homepage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Homepage</h1>
      <IsLoggedIn />
      <p className="text-lg">Login to Dashboard</p>
    </div>
  );
};

export default Homepage;
