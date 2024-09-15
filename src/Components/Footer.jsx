const Footer = () => {
  return(
    <div className="gtid grid-row-3 p-6 bg-black">
      <div className="">
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
    </div>
  )
};

export default Footer;
