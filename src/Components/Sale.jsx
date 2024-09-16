import { FaArrowRight } from "react-icons/fa6";

const Sale = () => {
  return (
    <div className="w-full bg-[#191C1F]">
      <div className="container max-w-screen-2xl flex flex-col md:flex-row justify-between mx-auto items-center py-[10px] px-4">
        <div className="text">
          <div className="flex justify-between space-x-3">
            <div className="h-[40px] w-[74px] bg-[#F3DE6D] rotate-3 p-1.5 px-2.5 font-public-sans text-[20px] font-semibold flex justify-center items-center">
              <p>Black</p>
            </div>
            <h2 className="font-public-sans  text-[24px] font-semibold text-white">
              Friday
            </h2>
          </div>
        </div>
        <div className="discount flex justify-between items-center gap-2">
          <p className="font-public-sans text-white text-[14px]">Up to</p>
          <h2 className="font-public-sans text-[#EBC80C] text-[40px] font-semibold">
            59%
          </h2>
          <p className="font-public-sans text-white text-[20px] font-semibold">
            OFF
          </p>
        </div>
        <div>
          <button className="font-public-sans bg-[#EBC80C] py-[14px] px-[24px] text-[14px] font-bold flex items-center justify-center gap-2 rounded-[2px">
            SHOP NOW <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sale;
