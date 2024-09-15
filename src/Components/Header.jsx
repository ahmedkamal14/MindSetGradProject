import { FaTwitter, FaFacebook, FaYoutube, FaInstagram, FaReddit, FaPinterest , FaChevronDown , FaCartShopping , FaLocationDot, FaArrowsRotate, FaEye, FaHeadphones, FaInfo ,  FaPhone} from 'react-icons/fa6';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div className="flex flex-col w-full text-center">
      {/* top */}
      <div className="flex flex-col md:flex-row justify-around align-center space-y-2 bg-[#1B6392] p-6 font-public-sans text-[14px] text-white">
        <p className='mt-1'>Welcome to Clicon online eCommerce store. </p>
          <div className='flex flex-col md:flex-row'>
            <div className='flex space-x-3 justify-center'>
              <p>Follow us:</p> 
              <a href="."><FaTwitter className='mt-1'/></a> 
              <a href=".."><FaFacebook className='mt-1'/></a> 
              <a href="."><FaPinterest className='mt-1'/></a> 
              <a href="."><FaReddit className='mt-1'/> </a>
              <a href="."><FaYoutube className='mt-1'/> </a>
              <a href="."><FaInstagram className='mt-1'/></a>  
              <div className="h-[28px] w-[1px] bg-white "></div>
            </div>
            <div className='flex space-x-1 justify-center md:ml-3'>
              <a href="." className='flex justify-between'>Eng  <span><FaChevronDown className="ml-1 mt-1" /></span></a>
              <a href="." className='flex justify-between'>USD  <span><FaChevronDown className="ml-1 mt-1" /></span></a>
            </div>
          </div>
      </div>
      {/* devider */}
      <div className="w-full h-[1px] bg-white"></div>
      {/* middle */}
      <div className="flex flex-col md:flex-row md:justify-around justify-center bg-[#1B6392] align-center p-6 space-y-2">
        <div className="flex justify-center">
          <img src="./Icon.png" alt="." />
          <h2 className='ml-2 mt-2 font-public-sans text-[32px] font-bold leading-[40px] tracking-[-0.02em] text-white'>Clicon</h2>
        </div>
        <div className="relative w-full max-w-[646px] lg:w-[646px] md:w-[400px] sm:w-full">
          <input 
            type="text" 
            placeholder="Search for anything..." 
            className="w-full h-[48px] pr-10 pl-5 py-3.5 rounded-tl-sm border focus:outline-none focus:ring-0"
          />
          {/* search button */}
          <button>
              <FontAwesomeIcon 
              icon={faMagnifyingGlass} 
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
            />
          </button>
        </div>
        <div className="flex justify-center space-x-6 text-white mt-3 text-[32px]">
          <div className='relative'>
            <div className='w-[20px] h-[20px] bg-slate-200 rounded-full text-[12px] text-center absolute -top-[4px] left-[16px] text-[#1B6392] flex items-center justify-center p-1' p-1>2</div>
            <a href="." className=''><FaCartShopping/></a>
          </div>
          <a href="."><img src="./Heart.png" alt="" /></a>
          <a href="."><img src="./User.png" alt="" /></a>
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col md:flex-row justify-evenly align-center mt-3 border-b-2">
        <div className="flex p-1 space-x-3 justify-between max-w-[695px] flex-col md:flex-row md:justify-center">
          <button className='flex bg-[#F2F4F5] p-3 justify-center w-full md:w-[154px]'>All category  <span><FaChevronDown className="ml-1 mt-1" /></span></button>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">
            <a href="." className='flex font-public-sans text-[14px] font-normal leading-[20px] text-[#5F6C72] mt-2 space-x-1'>
              <FaLocationDot className='text-[24px]'/> 
              <p>Track Order</p>
            </a>
            <a href="." className='flex font-public-sans text-[14px] font-normal leading-[20px] text-[#5F6C72] mt-2 space-x-1'>
              <FaArrowsRotate className='text-[24px]'/> 
              <p>Compare</p>
            </a>
            <a href="." className='flex font-public-sans text-[14px] font-normal leading-[20px] text-[#5F6C72] mt-2 space-x-1'>
              <FaHeadphones className='text-[24px]'/> 
              <p>Customer Support</p>
            </a>
            <a href="." className='flex font-public-sans text-[14px] font-normal leading-[20px] text-[#5F6C72] mt-2 space-x-1'>
              <div className="flex items-center justify-center border rounded-full h-[24px] w-[24px] p-2 border-3">
                <FaInfo className="text-xl" />
              </div>
              Need Help
            </a>
          </div>
        </div>
        <div className='flex space-x-2 mt-2 justify-center'>
          <FaPhone className='text-[#5F6C72] text-[24px]'/>
          <p className='text-[13px]'>+1-202-555-0104</p>
        </div>
      </div> 
    </div>
  )
};

export default Header;
