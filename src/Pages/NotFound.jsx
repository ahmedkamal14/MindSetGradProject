import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col px-4 md:px-6 lg:px-8 py-10 lg:py-20 mx-auto">
      <img src="./404.png" alt="Error" />
      <div className="text flex flex-col justify-center items-center text-center gap-6 md:gap-8 lg:gap-10">
        <h1 className="text-[24px] md:text-[30px] lg:text-[36px] font-semibold text-[#191C1F]">
          404, Page not found
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-[#5F6C72] px-4 md:px-10">
          Something went wrong. It looks like the page you requested could not
          be found. The link may be broken or the page may have been removed.
        </p>

        <Link
          className="flex items-center gap-2 text-[14px] md:text-[16px] lg:text-[18px] font-bold text-[#FA8232] border-[#FFE7D6] border-2 py-[10px] md:py-[12px] lg:py-[14px] px-[20px] md:px-[24px]"
          to={"/MindSetGradProject/"}
        >
          <GoHome className="text-lg md:text-xl lg:text-2xl" /> GO TO HOME
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
