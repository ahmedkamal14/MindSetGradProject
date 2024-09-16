import { Link } from "react-router-dom";
import { GoHome } from "react-icons/go";
import Buttons from "@/Components/SingleProduct/Buttons";
import PriceSection from "@/Components/SingleProduct/PriceSection";
import AboutSection from "@/Components/SingleProduct/AboutSection";
import DescriptionTab from "@/Components/SingleProduct/DescriptionTab";
import ReviewsTab from "@/Components/SingleProduct/ReviewsTab";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "@/Store/Slices/productsSlice";
import { addToCart } from "@/Store/Slices/cartSlice";
import ProductImagePreview from "@/Components/Product/ProductImagePreview";
import { renderStars } from "@/Utils/function.util";
import ClipLoader from "react-spinners/ClipLoader";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineMinus } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import ProductCard from "@/Components/Product/ProductCard";
import { toast } from "react-toastify";
const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const {
    selectedProduct,
    isLoading,
    error,
    items: products,
    selectedCat,
  } = useSelector((state) => state.products);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description"); // State to manage active tab
  const [similar, setSimilar] = useState([]);

  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [dispatch, id]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSimilar(
      products.filter(
        (product) => product.category === selectedProduct.category
      )
    );
  }, [selectedProduct]);

  const handleAddToCart = () => {
    dispatch(addToCart({ selectedProduct, quantity }));
    setQuantity(1);
    toast.success("Added to Cart");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <ClipLoader size={50} color={"#000"} loading={isLoading} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!selectedProduct) {
    return <div>No product found</div>;
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="w-full bg-[#F2F4F5] py-4 px-4">
        <div className="container max-w-screen-2xl mx-auto">
          <p className="flex flex-wrap gap-1 md:gap-2 text-xs md:text-sm">
            {/* Home link */}
            <Link
              className="flex gap-1 md:gap-2 items-center text-[#5F6C72]"
              to={"/MindSetGradProject/"}
            >
              <GoHome className="text-base md:text-lg" />
              <span>Home</span>
            </Link>
            <span>/</span>

            {/* Products link */}
            <Link
              className="text-[#5F6C72] flex items-center"
              to={"/MindSetGradProject/products"}
            >
              Products
            </Link>
            <span>/</span>

            {/* Selected category */}
            <span className="text-[#5F6C72] capitalize">{selectedCat}</span>
            <span>/</span>

            {/* Selected product title */}
            <span className="text-[#2DA5F3] capitalize">
              {selectedProduct.title}
            </span>
          </p>
        </div>
      </div>

      {/* Container Section */}
      <div className="py-[40px] px-6">
        <div className="bigContainer max-w-screen-2xl m-auto flex flex-col gap-[30px]">
          <div className="container flex flex-col lg:flex-row gap-[24px]">
            <ProductImagePreview selectedProduct={selectedProduct} />

            <div className="info flex flex-col gap-[16px] w-full lg:w-[90%]">
              {/* Rating */}
              <div className="flex items-center gap-1">
                {renderStars(selectedProduct.rating)}
                <span className="text-[14px] font-semibold ms-3">{`${selectedProduct.rating} Star Rating`}</span>
                <span className="text-[14px] text-black ms-3">
                  {`(${selectedProduct?.reviews?.length}) User Feedback`}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-[20px] font-medium">
                {selectedProduct.title}
              </h1>

              {/* About */}
              <AboutSection selectedProduct={selectedProduct} />

              {/* Price */}
              <PriceSection selectedProduct={selectedProduct} />

              {/* Buying Buttons */}
              <div className="flex flex-col lg:flex-row gap-4 w-full items-center justify-between">
                {/* Quantity selector */}
                <div className="quantity py-3 px-4 border-2 flex justify-evenly items-center w-full lg:w-1/4">
                  <button
                    onClick={() => setQuantity(quantity - 1)}
                    disabled={quantity <= 1}
                  >
                    <AiOutlineMinus />
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    disabled={quantity >= selectedProduct.stock}
                  >
                    <FaPlus />
                  </button>
                </div>

                {/* Add to Cart button */}
                <button
                  onClick={handleAddToCart}
                  className="bg-[#FA8232] text-white py-3 px-4 rounded font-semibold w-full lg:flex-grow flex items-center gap-2 justify-center"
                >
                  Add to Cart
                  <HiOutlineShoppingCart className="text-lg" />
                </button>

                {/* Buy Now button */}
                <button className="border-[#FA8232] border-2 text-[#FA8232] py-3 px-4 rounded font-semibold w-full lg:w-[20%]">
                  Buy Now
                </button>
              </div>

              {/* Buttons */}
              <Buttons />
            </div>
          </div>

          {/* Tab Section */}
          <div className="container productData w-full border-2">
            {/* Tab Titles */}
            <div className="titles flex max-w-[600px] mx-auto justify-center items-center text-[#5F6C72]">
              <button
                className={`text-[20px] p-[18px] ${
                  activeTab === "Description"
                    ? "border-b-4 border-[#FA8232] text-black font-medium "
                    : ""
                }`}
                onClick={() => setActiveTab("Description")}
              >
                Description
              </button>
              <button
                className={`text-[20px] p-[18px] ${
                  activeTab === "Reviews"
                    ? "border-b-4 border-[#FA8232] text-black font-medium "
                    : ""
                }`}
                onClick={() => setActiveTab("Reviews")}
              >
                Reviews
              </button>
            </div>

            {/* Tab Content */}
            <div className="tab-content p-[40px] border-t-2">
              {activeTab === "Description" && (
                <DescriptionTab selectedProduct={selectedProduct} />
              )}
              {activeTab === "Reviews" && (
                <ReviewsTab selectedProduct={selectedProduct} />
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="flex flex-col items-center">
            <h1 className="text-[32px] font-semibold">Products you may like</h1>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[10px] md:gap-[20px] mt-12 mx-auto">
              {similar?.slice(0, 5).map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
