import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <h1 className="text-3xl mb-10">Login Page</h1>
      <Link to="/">
        <button>
          <AiOutlineHome size="2rem" />
          Back to Home(temprory)
        </button>
      </Link>
    </div>
  );
};

export default Login;
