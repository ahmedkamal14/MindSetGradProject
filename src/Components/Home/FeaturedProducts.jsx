import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { useSelector } from "react-redux";
import ProductCard from "../Product/ProductCard";

const FeaturedProducts = () => {
  const { items: products } = useSelector((state) => state.products);
  return (
    <div className="pb-[40px] px-6">
      <div className="container max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-12 justify-between">
        <img src="./Home/banner.png" alt="Banner" className="hidden lg:block" />

        <div className="Feats flex flex-col gap-[24px] flex-grow">
          <div className="header flex justify-between items-center">
            <h1 className="text-[24px] font-semibold">Featured Products</h1>
            <Link
              className="flex gap-2 items-center text-[#FA8232] font-medium"
              to={"/MindSetGradProject/products"}
            >
              Browse All Products <FaArrowRightLong />
            </Link>
          </div>

          <div className="items grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto w-full">
            {products.slice(140, 148).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
