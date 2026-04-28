import React from "react";

const ErrorElement = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="bg-red-100 text-red-500 rounded-full p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v2m0 4h.01M5.07 19h13.86c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.34 16c-.77 1.33.19 3 1.73 3z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <div className="">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
                404 
            </h1>
            <h1 className="text-2xl font-semibold text-gray-800 mb-2">
                Page Not Found 
            </h1>
        </div>

        {/* Message */}
        <p className="text-gray-500 mb-6">
          We couldn’t load this page. Please try again or go back to the
          homepage.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Retry
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
          >
            Go Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorElement;