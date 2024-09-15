import { FaArrowRight , FaApple, FaGooglePlay} from 'react-icons/fa6';
const Footer = () => {
  return(
    <div>
      <div className="gtid grid-row-3 p-14 bg-black grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center">
        <div className="space-y-3">
          <div className="flex space-x-2">
            <img src="./fav.png" alt="" />
            <p className="text-[32px] font-bold text-white">CLICON</p>
          </div>
          <div>
            <p className="text-[14px] text-[#77878F]">Customer Supports:</p>
            <h2 className="text-[18px] text-white font-bold">(629) 555-0129</h2>
          </div>
          <div>
            <p className="text-[14px] text-[#77878F]">4517 Washington Ave. </p>
            <p className="text-[14px] text-[#77878F]">Manchester, Kentucky 39495</p>
          </div>
          <p className="text-[16px] text-white">info@kinbo.com</p>
        </div>

        <div className='space-y-3'>
          <h2 className='text-[16px] font-bold text-white'>Top Category</h2>
          <p className="text-[14px] text-[#77878F]">Computer & Laptop</p>
          <p className="text-[14px] text-[#77878F]">SmartPhone</p>
          <p className="text-[14px] text-[#77878F]">Headphone</p>
          <div className="flex align-center">
            <div className="h-[2px] w-[24px] bg-[#EBC80C] mt-3"></div>
            <p className="ml-3 text-[14px] text-white">Accessories</p>
          </div>
          <p className="text-[14px] text-[#77878F]">Camera & Photo</p>
          <p className="text-[14px] text-[#77878F]">TV & Homes</p>
          <button className='flex text-[14px] font-bold text-[#EBC80C]'><h2>Browse All Product</h2> < FaArrowRight className='ml-1 mt-1'/> </button>
        </div>

        <div className='space-y-3'>
          <h2 className='text-[16px] font-bold text-white'>Quick links</h2>
          <div className='text-[14px] text-[#77878F] space-y-3'>
            <p>Shop Product</p>
            <p>Shoping Cart</p>
            <p>Wishlist</p>
            <p>Compare</p>
            <p>Track Order</p>
            <p>Customer Help</p>
            <p>About Us</p>
          </div>
        </div>

        <div className='space-y-3 mt-2'>
          <h2 className='text-[16px] font-bold text-white'>Download APP</h2>
          <div>
            <div className='flex bg-[#303639] p-3 max-w-[176px]'>
              <FaGooglePlay className='text-[32px] text-white'/>
              <div className='ml-3'>
                <p className='text-[13px] text-white'>Get it now</p>
                <h2 className='text-[20px] text-white'>Google Play</h2>
              </div>
            </div> 
            {/* google play */}
            <div className='flex bg-[#303639] p-3 max-w-[176px] mt-2'>
              <FaApple className='text-[32px] text-white'/>
              <div className='ml-3'>
                <p className='text-[13px] text-white'>Get it now</p>
                <h2 className='text-[20px] text-white'>App Store</h2>
              </div>
            </div>
            {/* app store */}
          </div>
        </div>

        <div className='space-y-3 mt-2'>
          <h2 className='text-[16px] font-bold text-white'>Popular Tag</h2>
          <div className='max-w-[312px]'>
            <div className="grid grid-flow-col auto-cols-auto gap-2 ">
              <div className='p-2 border text-white text-[14px] text-center border-[#929FA5]'>Game</div>
              <div className='p-2 border text-white text-[14px] text-center border-[#929FA5]'>iPhone</div>
              <div className='p-2 border text-white text-[14px] text-center border-[#929FA5]'>TV</div>
              <div className='p-2 border text-white text-[14px] text-center border-[#929FA5]'>Asus Laptops</div>
            </div>
            <div className="grid grid-flow-col auto-cols-auto gap-2 mt-2">
              <div className='p-2 border text-white text-[14px] text-center border-[#929FA5]'>Macbook </div>
              <div className='p-2 border text-white text-[14px] text-center border-[#929FA5]'>SSD</div>
              <div className='p-2 border-2 text-white text-[14px] text-center border-white bg-[#303639]' >Graphics Card </div>
            </div>
            <div className="grid grid-flow-col auto-cols-auto gap-2 mt-2">
              <div className='p-2 border text-white text-[14px] text-center border-[#929FA5]'>Power Bank </div>
              <div className='p-2 border text-white text-[14px] text-center border-[#929FA5]'>Smart TV</div>
              <div className='p-2 border text-white text-[14px] text-center border-[#929FA5]'>Speaker</div>
            </div>
            <div className="grid grid-flow-col auto-cols-auto gap-2 mt-2">
              <div className='p-2 border text-white text-[14px] text-center border-[#929FA5]'>Tablet</div>
              <div className='p-2 border text-white text-[14px] text-center border-[#929FA5]'>Microwave</div>
              <div className='p-2 border text-white text-[14px] text-center border-[#929FA5]'>Samsung</div>
            </div>
          </div>
        </div>
      </div>

      <div className='border-t text-center p-4 text-[#ADB7BC] text-[14px] bg-black'>
        <p>Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
      </div>
    </div>
    
  )
};

export default Footer;
