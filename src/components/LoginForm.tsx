/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useState } from "react";

const Login = () => {
  // const [isLogin, setIsLogin] = useState("signup");
  return (
   
      <div className="w-full max-w-xs ">
        <form className="bg-white rounded-xl px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none focus:border-blue-600 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Last Name
            </label>
            <input
              className="shadow appearance-none border focus:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border focus:border-blue-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-semibold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border focus:border-blue-600  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="*************"
            />

            <a
              className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800"
              href=""
            >
              Forgot Password?
            </a>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
          &copy;2023 Task Manager. All rights reserved.
        </p>
      </div>
   
  );
};

export default Login;
