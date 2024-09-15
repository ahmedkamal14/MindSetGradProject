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
  FaInfoCircle,
  FaPhoneAlt,
  FaSearch,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { AiOutlineUser } from "react-icons/ai";
import { PiWarningCircleBold } from "react-icons/pi";

const Header = () => {
  return (
    <div className="bg-[#1B6392]">
      {/* top */}
      <div className=" py-[16px] text-white border-b border-[#5F6C72]">
        <div className="container max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {" "}
          <p>Welcome to Clicon online eCommerce store. </p>
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
                <FaReddit />{" "}
              </a>
              <a
                href="."
                className="hover:scale-125 transition-all duration-300"
              >
                <FaYoutube />{" "}
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
      <div className=" py-[16px] text-white">
        <div className="container max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex justify-center">
            <img src="./Icon.png" alt="." />
            <Link
              className="ml-2 mt-2 font-public-sans text-[32px] font-bold leading-[40px] tracking-[-0.02em] text-white"
              to={"/MindSetGradProject/"}
            >
              Clicon
            </Link>
          </div>
          <div className="relative w-full max-w-[646px] lg:w-[646px] md:w-[400px] sm:w-full">
            <input
              type="text"
              placeholder="Search for anything..."
              className="w-full py-[10px] px-[15px] rounded-[2px] focus:outline-none text-black"
            />
            {/* search button */}
            <button>
              <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500" />
            </button>
          </div>
          <div className="flex justify-center gap-[24px] text-white text-[25px]">
            <div className="relative">
              <div className="w-[15px] h-[15px] bg-white rounded-full font-bold text-[12px] text-center absolute -top-1 -right-1 text-[#1B6392] flex items-center justify-center p-1">
                {}
              </div>
              <Link to={"/MindSetGradProject/cart"}>
                <BsCart3 />
              </Link>
            </div>
            <Link to={"/MindSetGradProject/cart"}>
              <IoMdHeartEmpty />
            </Link>
            <Link to={"/MindSetGradProject/login"}>
              <AiOutlineUser />
            </Link>
          </div>
        </div>
      </div>
      {/* bottom */}
      <div className=" py-[16px] bg-white border-b-[0.5px] border-[#5F6C72]">
        <div className="container max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="flex p-1 space-x-3 justify-between flex-col md:flex-row md:justify-center relative">
            {/* category */}
            <button className="flex bg-[#F2F4F5] p-3 justify-center w-full md:w-[154px]">
              All category{" "}
              <span>
                <FaChevronDown className="ml-1 mt-1" />
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
            <p className="text-[13px]">+1-202-555-0104</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
