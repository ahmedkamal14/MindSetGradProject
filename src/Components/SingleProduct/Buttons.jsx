import { IoMdHeartEmpty } from "react-icons/io";
import { FaRotate } from "react-icons/fa6";
const Buttons = () => {
  return (
    <div className="flex gap-[24px] text-[#475156]">
      <button className="flex gap-2 items-center">
        <IoMdHeartEmpty className="text-lg" />
        <span>Add to Wishlist</span>
      </button>
      <button className="flex gap-2 items-center">
        <FaRotate className="text-lg" />
        <span>Compare</span>
      </button>
    </div>
  );
};

export default Buttons;
