import React from "react";

const Loader = () => {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/10 backdrop-blur-sm flex items-center justify-center">
      <svg
        className="animate-spin h-10 w-10 text-teal-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </div>
  );
};

export default Loader;
