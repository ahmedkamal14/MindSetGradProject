import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddsSection = () => {
  const { items: products } = useSelector((state) => state.products);
  const [display, setDisplay] = useState([]);

  useEffect(() => {
    // Filter products to find the one with id === 78
    const filteredProducts = products.filter((product) => product.id === 78);
    setDisplay(filteredProducts);
  }, [products]);

  // Check if display is not empty before accessing its elements
  const product = display[0];

  return (
    <div className="py-[40px] px-6">
      <div className="container max-w-screen-2xl mx-auto flex flex-col gap-[72px]">
        <div className="flex flex-col gap-[24px] md:flex-row md:justify-between">
          <img
            src="./Home/add3.png"
            alt="Add"
            className="w-full md:w-[48%] lg:w-[45%] xl:w-[40%] object-cover"
          />
          <img
            src="./Home/add4.png"
            alt="Add"
            className="w-full md:w-[48%] lg:w-[45%] xl:w-[40%] object-cover"
          />
        </div>
        <div className="w-full bg-[#FFE7D6] min-h-[424px] flex flex-col lg:flex-row justify-between rounded-[6px]">
          <div className="data flex flex-col gap-[18px] py-[20px] px-[16px] lg:py-[80px] lg:px-[72px] items-start w-full lg:w-[65%] justify-between">
            {product ? (
              <>
                <span className="bg-[#2DA5F3] py-[6px] px-[12px] text-white font-medium rounded-[2px]">{`Save Up To $${(
                  product.price *
                  (product.discountPercentage / 100)
                ).toFixed(0)}`}</span>
                <h1 className="text-[24px] md:text-[36px] lg:text-[48px] font-semibold">
                  {product.title.slice(0, 17)}
                </h1>
                <span className="text-[14px] md:text-[18px] lg:text-[24px] max-w-[100%] lg:max-w-[60%] text-gray-900 leading-[22px] md:leading-[26px] lg:leading-[30px]">
                  {product.description}
                </span>
                <Link
                  className="bg-[#FA8232] py-[12px] px-[24px] rounded-md text-white font-medium"
                  to={`/MindSetGradProject/products/${product.id}`}
                >
                  Shop Now
                </Link>
              </>
            ) : (
              <span>No product found</span>
            )}
          </div>

          <img
            src={product?.thumbnail}
            alt={product?.title}
            className="w-full lg:w-[35%] h-[300px] lg:h-[500px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AddsSection;
