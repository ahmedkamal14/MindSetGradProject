import CountDown from "./CountDown";
import { useSelector } from "react-redux";
import ProductCard from "../Product/ProductCard";
import BigSaleCard from "./BigSaleCard";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const BestDeals = () => {
  const { items: products } = useSelector((state) => state.products);

  return (
    <div className="py-10 px-6 flex flex-col gap-6">
      {/* Count Down Section */}
      <div className="container max-w-screen-2xl mx-auto flex flex-col lg:flex-row items-center gap-6 lg:gap-12 justify-between">
        <div className="title flex flex-col lg:flex-row gap-4 lg:gap-8 items-start lg:items-center">
          <h1 className="text-2xl font-semibold">Best Deals</h1>
          <div className="timer flex flex-col lg:flex-row gap-2 lg:gap-4 items-start lg:items-center">
            <h1 className="text-base">Deals end in</h1>
            <CountDown />
          </div>
        </div>

        <Link
          className="flex gap-2 items-center text-blue-500 font-medium"
          to={"/MindSetGradProject/products"}
        >
          Browse All Products <FaArrowRightLong />
        </Link>
      </div>

      {/* Best Deals Section */}
      <div className="container max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-6">
        <BigSaleCard product={products[100]} className="w-full lg:w-1/2" />
        <div className="items grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-auto w-full">
          {products.slice(101, 109).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestDeals;
