import { FaArrowRight ,  FaXmark  } from 'react-icons/fa6';

const Sale = () => {
  return(
    <div className="w-full bg-[#191C1F] p-5 flex flex-col md:flex-row justify-around items-center space-y-5 relative">
      <div className="text">
        <div className="flex justify-between space-x-3">
          <div className="h-[40px] w-[74px] bg-[#F3DE6D] rotate-3 p-1.5 px-2.5 font-public-sans text-[20px] font-semibold flex justify-between">
            <p>Black</p>
          </div>
          <h2 className="font-public-sans  text-[24px] font-semibold text-white">Friday</h2>
        </div>
      </div>
      <div className="discount flex justify-between space-x-2">
        <p className="font-public-sans text-white text-[14px]">Up to</p>
        <h2 className="font-public-sans text-[#EBC80C] text-[40px] font-semibold">59%</h2>
        <p className="font-public-sans text-white text-[14px]">OFF</p>
      </div>
      <div>
        <button className="font-public-sans bg-[#EBC80C] w-[156px] h-[48px] text-[14px] font-bold flex items-center justify-center">Shop Now <FaArrowRight className='ml-2'/></button>
      </div>
      <button className='w-[32px] h-[32px] bg-[#303639] p-1 absolute right-1 top-1 md:top-8 md:right-6'><FaXmark className="text-xl text-white text-center" /></button>
    </div>
  );
};

export default Sale;
