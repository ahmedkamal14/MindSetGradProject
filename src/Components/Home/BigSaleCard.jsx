import { renderStars } from "@/Utils/function.util";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart3 } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { addToCart } from "@/Store/Slices/cartSlice";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const BigSaleCard = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="bigSale flex flex-col gap-[24px] border rounded-[2px] py-[22px] px-[24px] w-full lg:max-w-[330px] relative">
      <img src={product?.thumbnail} alt="" />
      <div className="flex items-center gap-1 text-yellow-500">
        {renderStars(product?.rating)}
        <span className="text-[12px] text-black ms-3">
          {`(${product?.reviews?.length})`}
        </span>
      </div>
      <span className="text-[18px] text-[#191C1F] w-full truncate font-medium">
        {product?.title}
      </span>
      <div className="prices flex gap-2">
        <span className="text-[18px] font-semibold text-gray-400 line-through">
          {`$${(
            product?.price +
            product?.price * (product?.discountPercentage / 100)
          ).toFixed(2)}`}
        </span>
        <span className="text-[18px] font-semibold text-[#2DA5F3]">
          ${product?.price.toFixed(2)}
        </span>
      </div>
      <span className="desc">{product?.description.slice(0, 134)}...</span>
      <div className="btns flex font-medium gap-[8px]">
        <button
          className="w-[18%] bg-[#FFE7D6] p-[12px] flex justify-center items-center rounded-[2px]"
          disabled
        >
          <IoMdHeartEmpty className="text-[24px]" />
        </button>
        <button
          className="bg-[#FA8232] p-[12px] flex justify-center items-center rounded-[2px] flex-grow text-white gap-2"
          onClick={() => {
            dispatch(addToCart({ selectedProduct: product, quantity: 1 }));
            toast.success("Added To Cart");
          }}
        >
          <BsCart3 className="text-[24px]" />
          Add To Cart
        </button>
        <Link
          className="w-[18%] bg-[#FFE7D6] p-[12px] flex justify-center items-center rounded-[2px]"
          to={`/MindSetGradProject/products/${product?.id}`}
        >
          <FaRegEye className="text-[24px]" />
        </Link>
      </div>
    </div>
  );
};

BigSaleCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default BigSaleCard;
