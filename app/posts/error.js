"use client";
import React from "react";

const ErrorComponent = ({ error, reset }) => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="size-fit flex flex-col gap-4 justify-center items-center bg-red-50 text-red-700 p-8 rounded-2xl">
        <h2 className="text-xl font-semibold">Something went wrong!</h2>
        <p>{error?.message}</p>
        <button
          onClick={() => reset()}
          className="bg-red-500 hover:bg-red-700 text-white font-bold px-4 py-2 rounded"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorComponent;
