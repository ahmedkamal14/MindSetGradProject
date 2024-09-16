import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import CartItem from "@/Components/Cart/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import { clearCart } from "@/Store/Slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const [discount, setDiscount] = useState(0);
  const [delivery, setDelivery] = useState(25);
  const [tax, setTax] = useState(30);
  const { items: products, totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {
    setTax(totalPrice * 0.14);
  }, [totalPrice]);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="w-full bg-[#F2F4F5] py-4 px-4">
        <div className="container max-w-screen-2xl mx-auto">
          <p className="flex flex-wrap gap-1 md:gap-2 text-xs md:text-sm">
            <Link
              className="flex gap-1 md:gap-2 items-center text-[#5F6C72]"
              to={"/MindSetGradProject/"}
            >
              <GoHome className="text-base md:text-lg" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-[#2DA5F3] capitalize">Shopping Cart</span>
          </p>
        </div>
      </div>

      {/* Cart items */}
      <div className="py-[40px] px-2 md:px-6">
        <div className="max-w-screen-2xl m-auto flex flex-col lg:flex-row gap-[24px] justify-between items-start">
          <div className="cart border-2 w-full lg:w-[65%] flex flex-col border-[#E4E7E9] rounded-[4px]">
            <div className="title py-[20px] px-[16px] md:px-[24px]">
              <h1 className="text-[18px] font-medium">Shopping Cart</h1>
            </div>

            <div className="tags bg-[#F2F4F5] w-full py-[10px] px-[16px] md:px-[24px] text-[#475156] text-[12px] font-medium flex gap-8 sm:gap-4">
              <h1 className="w-full md:w-1/2 lg:w-2/5">PRODUCTS</h1>
              <h1 className="w-1/6">PRICE</h1>
              <h1 className="w-1/4 md:w-1/6">QUANTITY</h1>
              <h1 className="w-1/6">SUB-TOTAL</h1>
            </div>

            {products?.length > 0 ? (
              <div className="cart-items p-[16px] md:p-[24px] flex flex-col gap-[16px] border-b-2">
                {products.map((product) => (
                  <CartItem key={product.id} item={product} />
                ))}
              </div>
            ) : (
              <div className="flex justify-center items-center py-[24px] border-b-2">
                <h1 className="text-[#475156] text-[24px] font-medium">
                  Your cart is empty
                </h1>
              </div>
            )}

            <div className="buttons p-[16px] md:p-[24px] flex justify-between items-center">
              <Link
                className="flex items-center justify-center py-[14px] px-[16px] md:px-[24px] gap-2 text-[#2DA5F3] border-[#2DA5F3] border-2 font-bold"
                to={"/MindSetGradProject/products"}
              >
                <MdOutlineKeyboardBackspace className="text-[24px]" />
                BACK TO SHOP
              </Link>
              <button
                className="flex items-center justify-center py-[14px] px-[16px] md:px-[24px] gap-2 text-red-600 border-red-600 border-2 font-bold disabled:bg-red-200"
                onClick={() => {
                  dispatch(clearCart());
                }}
                disabled={products?.length === 0}
              >
                <FaRegTrashAlt />
                CLEAR CART
              </button>
            </div>
          </div>

          <div className="summary border-2 w-full lg:w-[35%] p-[16px] md:p-[24px] border-[#E4E7E9] gap-[20px] flex flex-col rounded-[4px]">
            <div className="title">
              <h1 className="text-[18px] font-medium">Cart Total</h1>
            </div>

            <div className="prices flex flex-col gap-[12px] border-b-2 pb-6">
              <div className="flex justify-between items-center">
                <span className="text-[#5F6C72]">Sub-total</span>
                <span className="font-medium">${Math.round(totalPrice)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#5F6C72]">Shipping</span>
                <span className="font-medium">${delivery}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#5F6C72]">Discount</span>
                <span className="font-medium">${discount}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#5F6C72]">Tax</span>
                <span className="font-medium">${tax.toFixed(0)}</span>
              </div>
            </div>

            <div className="totalPrice">
              <div className="flex justify-between items-center font-medium">
                <span>Total</span>
                <span>
                  ${Math.round(totalPrice) + delivery + Math.round(tax)}
                </span>
              </div>
            </div>

            <button className="w-full py-[16px] bg-[#FA8232] rounded-[3px] text-white font-bold flex items-center justify-center gap-2">
              PROCEED TO CHECKOUT
              <MdOutlineKeyboardBackspace className="text-[24px] rotate-180" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
