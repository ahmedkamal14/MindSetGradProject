import {
  FaTwitter,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaReddit,
  FaPinterest,
  FaChevronDown,
  FaMapMarkerAlt,
  FaSyncAlt,
  FaHeadphonesAlt,
  FaPhoneAlt,
  FaSearch,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { PiWarningCircleBold } from "react-icons/pi";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { logout, fetchUser } from "@/Store/Slices/authSlice";
import Cookies from "js-cookie";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartLength = useSelector((state) => state.cart.totalQuantity);
  const user = useSelector((state) => state.auth.user);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false); // State for search bar visibility

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      dispatch(fetchUser(token));
    }
  }, [dispatch]);

  const handleLogout = () => {
    Cookies.remove("token");
    Cookies.remove("cart");
    dispatch(logout());
    setIsDropdownOpen(false);
    navigate("/MindSetGradProject/login");
    window.location.reload();
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen); // Toggle search bar
  };

  return (
    <div className="bg-[#1B6392]">
      {/* top */}
      <div className="py-[16px] text-white border-b border-[#5F6C72]">
        <div className="container max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <p>Welcome to Clicon online eCommerce store.</p>
          <div className="flex flex-col md:flex-row">
            <div className="flex justify-center gap-2 items-center">
              <p>Follow us:</p>
              <a
                href="."
                className="hover:scale-125 transition-all duration-300"
              >
                <FaTwitter />
              </a>
              <a
                href=".."
                className="hover:scale-125 transition-all duration-300"
              >
                <FaFacebook />
              </a>
              <a
                href="."
                className="hover:scale-125 transition-all duration-300"
              >
                <FaPinterest />
              </a>
              <a
                href="."
                className="hover:scale-125 transition-all duration-300"
              >
                <FaReddit />
              </a>
              <a
                href="."
                className="hover:scale-125 transition-all duration-300"
              >
                <FaYoutube />
              </a>
              <a
                href="."
                className="hover:scale-125 transition-all duration-300"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* middle */}
      <div className="py-[16px] text-white">
        <div className="container max-w-screen-2xl mx-auto flex justify-between items-center px-4">
          {/* Logo */}
          <div className="flex justify-center ps-4 md:ps-0">
            <img src="./Icon.png" alt="Clicon" />
            <Link
              className="ml-2 mt-2 font-public-sans text-[32px] font-bold leading-[40px] tracking-[-0.02em] text-white"
              to={"/MindSetGradProject/"}
            >
              Clicon
            </Link>
          </div>

          {/* Search bar */}
          <div className="hidden lg:flex justify-between items-center bg-white px-4 text-black">
            <input
              type="text"
              name="search"
              id="search"
              className=" py-2 rounded-[2px] focus:outline-none w-[550px]"
              placeholder="Search for products"
            />
            <button className="text-black">
              <FaSearch />
            </button>
          </div>

          {/* Cart, Wishlist, User */}
          <div className="flex justify-center items-center gap-[24px] text-white text-[25px]">
            {/* Search Icon for Small Screens */}
            <button
              className="lg:hidden text-white text-[25px]"
              onClick={toggleSearch}
            >
              <FaSearch />
            </button>
            <div className="relative">
              <div className="w-[15px] h-[15px] bg-white rounded-full font-bold text-[12px] text-center absolute -top-1 -right-1 text-[#1B6392] flex items-center justify-center p-1">
                {cartLength}
              </div>
              <Link to={"/MindSetGradProject/cart"}>
                <BsCart3 />
              </Link>
            </div>
            <Link to={"/MindSetGradProject/cart"}>
              <IoMdHeartEmpty />
            </Link>

            {/* User Icon or Profile Image */}
            <div className="relative">
              {user ? (
                <div className="relative">
                  <img
                    src={user.image}
                    alt="User"
                    className="w-[32px] h-[32px] rounded-full cursor-pointer"
                    onClick={toggleDropdown}
                  />
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg z-20">
                      <button
                        className="block w-full text-left px-4 py-2 text-sm"
                        onClick={handleLogout}
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to={"/MindSetGradProject/login"}>
                  <AiOutlineUser />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar for Small Screens */}
      {isSearchOpen && (
        <div className="lg:hidden bg-white py-4 px-4 text-black">
          <div className="flex justify-between items-center">
            <input
              type="text"
              name="search"
              id="mobile-search"
              className=" py-2 rounded-[2px] focus:outline-none w-full"
              placeholder="Search for products"
            />
            <button className="ml-2 text-black">
              <FaSearch />
            </button>
          </div>
        </div>
      )}

      {/* bottom */}
      <div className="py-[16px] bg-white border-b-[0.5px] border-[#5F6C72] hidden md:block">
        <div className="container max-w-screen-2xl mx-auto hidden md:flex flex-row justify-between items-center px-4">
          <div className="flex p-1 space-x-3 justify-between flex-col md:flex-row md:justify-center relative">
            <button className="flex bg-[#F2F4F5] p-3 justify-center items-center gap-2 w-full md:w-[154px]">
              All category{" "}
              <span>
                <FaChevronDown className="" />
              </span>
            </button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 items-center text-[#5F6C72] text-[14px]">
              <a
                href="."
                className="flex leading-[20px] justify-center items-center gap-2"
              >
                <FaMapMarkerAlt className="text-[20px]" />
                <p>Track Order</p>
              </a>
              <a
                href="."
                className="flex leading-[20px] justify-center items-center gap-2"
              >
                <FaSyncAlt className="text-[20px]" />
                <p>Compare</p>
              </a>
              <a
                href="."
                className="flex leading-[20px] justify-center items-center gap-2"
              >
                <FaHeadphonesAlt className="text-[20px]" />
                <p>Customer Support</p>
              </a>
              <a
                href="."
                className="flex leading-[20px] justify-center items-center gap-2"
              >
                <PiWarningCircleBold className="text-[20px]" />
                <p>Need Help</p>
              </a>
            </div>
          </div>

          <div className="flex justify-center items-center gap-2">
            <FaPhoneAlt className="text-[#5F6C72] text-[20px]" />
            <p className="font-public-sans text-[14px] leading-[20px] text-[#5F6C72]">
              Call Us: +0123456789
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
