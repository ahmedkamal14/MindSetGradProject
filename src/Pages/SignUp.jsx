import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import { FaRegEye, FaRegEyeSlash, FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

const SignUp = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Password visibility toggle

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="w-full bg-[#F2F4F5] py-4">
        <div className="container max-w-screen-xl mx-auto px-4 md:px-0">
          <p className="flex gap-2">
            <Link
              className="flex gap-2 items-center text-sm text-[#5F6C72]"
              to={"/MindSetGradProject/"}
            >
              <GoHome />
              <span>Home</span>
            </Link>
            <span>/</span>
            <Link className="text-[#2DA5F3]" to={"/MindSetGradProject/login"}>
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="container max-w-screen-xl mx-auto flex justify-center items-center py-10 md:py-24 px-4 md:px-0">
        <div className="form w-full max-w-md md:w-[424px] shadow-lg border">
          <div className="form-header font-semibold flex">
            <div className="login py-4 w-1/2 border-b text-center">
              <Link
                className="text-lg w-full text-[#77878F]"
                to={"/MindSetGradProject/login"}
              >
                Sign In
              </Link>
            </div>
            <div className="signup py-4 w-1/2 border-b-4 text-center border-[#FA8232]">
              <Link className="text-lg" to={"/MindSetGradProject/signup"}>
                Sign Up
              </Link>
            </div>
          </div>

          <div className="form-fields">
            <form className="flex flex-col gap-6 p-6 md:p-10 text-[#191C1F]">
              {/* Username Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="input border px-2 py-2"
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="input border px-2 py-2"
                />
              </div>

              {/* Password Field with Show/Hide */}
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <input
                  type={isPasswordVisible ? "text" : "password"} // Toggle between text and password
                  id="password"
                  className="input border px-2 py-2"
                  placeholder="At least 8 characters"
                />
                <button
                  type="button"
                  className="absolute right-4 top-10 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>

              {/* Confirm Password Field with Show/Hide */}
              <div className="flex flex-col gap-2 relative">
                <label htmlFor="password" className="text-sm font-medium">
                  Confirm Password
                </label>
                <input
                  type={isPasswordVisible ? "text" : "password"} // Toggle between text and password
                  id="password"
                  className="input border px-2 py-2"
                />
                <button
                  type="button"
                  className="absolute right-4 top-10 text-gray-600"
                  onClick={togglePasswordVisibility}
                >
                  {isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                </button>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn-primary" disabled={true}>
                <div className="flex items-center gap-2 text-white bg-[#FA8232]/40 py-3 rounded-md justify-center">
                  SIGN UP <FaArrowRight />
                </div>
              </button>

              {/* "Or" Section */}
              <div className="or border w-full relative my-4">
                <span className="bg-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-4 py-2">
                  Or
                </span>
              </div>

              <Link
                className="w-full text-center text-sm font-bold text-[#FA8232]"
                to={"/MindSetGradProject/login"}
              >
                Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
