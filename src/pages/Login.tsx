import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
const Login = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col">
       
      <Link to="/">
        <button>
          <AiOutlineHome size="2rem" />
          Back to Home(temprory)
        </button>
      </Link> 
      <LoginForm/>
    </div>
  );
};

export default Login;
