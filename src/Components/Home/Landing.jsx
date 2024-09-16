import AddsSwiper from "./AddsSwiper";
import { TfiPackage } from "react-icons/tfi";
import { TfiCup } from "react-icons/tfi";
import { CiCreditCard1 } from "react-icons/ci";
import { PiHeadphones } from "react-icons/pi";

const Landing = () => {
  return (
    <div className="py-[40px] px-6 flex flex-col gap-[24px]">
      {/* Adds Section */}
      <div className="container max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between gap-[16px]">
        <div className="swiper w-full lg:w-[55%]">
          <AddsSwiper />
        </div>
        <div className="adds flex flex-col justify-between gap-[16px] w-full lg:w-[25%]">
          <img
            src="./Home/add1.png"
            alt="Add"
          />
          <img
            src="./Home/add2.png"
            alt="Add"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="container max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-[16px] border-2 rounded-[6px] gap-[24px] lg:gap-[56px]">
        <div className="feat flex gap-[21px] items-center px-[16px] py-[18px]">
          <TfiPackage className="text-[30px]" />
          <div className="text flex flex-col gap-[4px] text-[14px]">
            <h1 className="font-medium">FAST DELIVERY</h1>
            <span className="text-gray-600">Delivery in 24/H</span>
          </div>
        </div>
        <div className="feat flex gap-[21px] items-center px-[16px] py-[18px]">
          <TfiCup className="text-[30px]" />
          <div className="text flex flex-col gap-[4px] text-[14px]">
            <h1 className="font-medium">24 HOURS RETURN</h1>
            <span className="text-gray-600">100% money-back guarantee</span>
          </div>
        </div>
        <div className="feat flex gap-[21px] items-center px-[16px] py-[18px]">
          <CiCreditCard1 className="text-[30px]" />
          <div className="text flex flex-col gap-[4px] text-[14px]">
            <h1 className="font-medium">SECURE PAYMENT</h1>
            <span className="text-gray-600">Your money is safe</span>
          </div>
        </div>
        <div className="feat flex gap-[21px] items-center px-[16px] py-[18px]">
          <PiHeadphones className="text-[30px]" />
          <div className="text flex flex-col gap-[4px] text-[14px]">
            <h1 className="font-medium">SUPPORT 24/7</h1>
            <span className="text-gray-600">Live contact/message</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
