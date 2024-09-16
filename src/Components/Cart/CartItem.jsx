import PropTypes from "prop-types";
import {
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "@/Store/Slices/cartSlice";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineMinus } from "react-icons/ai";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row gap-4 items-center py-4 border-b border-[#E4E7E9]">
      <div className="product flex items-center gap-4 w-full md:w-1/2 lg:w-2/5">
        <button
          className="text-[#929FA5] text-lg hover:text-red-600"
          onClick={() => {
            dispatch(removeFromCart(item.id));
          }}
        >
          <IoIosCloseCircleOutline />
        </button>

        <div className="info flex items-center gap-4 font-semibold w-full">
          <Link to={`/MindSetGradProject/products/${item.id}`}>
            <img src={item.image} alt={item.title} className="w-20 md:w-24" />
          </Link>

          <Link to={`/MindSetGradProject/products/${item.id}`}>
            <h1 className="text-sm md:text-base lg:text-lg">{item.title}</h1>
          </Link>
        </div>
      </div>
      <div className="price text-sm md:text-base lg:text-lg font-medium w-1/6">
        <p>${item.price}</p>
      </div>
      <div className="quantity flex items-center justify-between w-1/4 md:w-1/6">
        <div className="quantity py-2 px-3 border flex justify-between items-center w-full gap-1">
          <button
            onClick={() => {
              dispatch(decreaseQuantity(item.id));
            }}
            className="md:text-lg"
          >
            <AiOutlineMinus />
          </button>
          <span className="text-sm md:text-base">{item.quantity}</span>
          <button
            onClick={() => {
              dispatch(increaseQuantity(item.id));
            }}
            className="md:text-lg"
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="total text-sm md:text-base lg:text-lg w-1/6">
        <p>${item.totalPrice}</p>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default CartItem;
