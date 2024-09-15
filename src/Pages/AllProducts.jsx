import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import { fetchAllProducts } from "@/Store/Slices/productsSlice";
import { useState, useEffect } from "react";
import { fetchAllCategories } from "@/Store/Slices/productsSlice";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import ProductCard from "../Components/Product/ProductCard";

const AllProducts = () => {
  const dispatch = useDispatch();
  const [shown, setShown] = useState(20);

  const {
    selectedItems: displayed,
    isLoading,
    error,
    selectedCat,
  } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCat === "All Products") {
      dispatch(fetchAllProducts());
    }
  }, [dispatch, selectedCat]);

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

  return (
    <div className="flex flex-col">
      {/* Header */}
      <div className="w-full bg-[#F2F4F5] py-4">
        <div className="container max-w-screen-2xl mx-auto px-4 md:px-0">
          <p className="flex gap-2">
            <Link
              className="flex gap-2 items-center text-sm text-[#5F6C72]"
              to={"/MindSetGradProject/"}
            >
              <GoHome className="text-lg" />
              <span>Home</span>
            </Link>
            <span>/</span>
            <span className="text-sm text-[#5F6C72] flex items-center">
              Products
            </span>
            <span>/</span>
            <span className="text-[#2DA5F3]" to={"/MindSetGradProject/login"}>
              {selectedCat}
            </span>
          </p>
        </div>
      </div>

      {/* Container Section */}
      <div className="p-6">
        <div className="container max-w-screen-2xl mx-auto flex gap-[24px]  justify-between">
          {/* Filters Here */}
          <div className="filters w-[25%] border"></div>
          <div className="products flex flex-col gap-[16px] w-[72%]">
            <div className="searchHeader flex justify-between ">
              <div className="searchBar flex items-center py-[12px] px-[16px] border min-w-[424px] justify-between">
                <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="Search for anything"
                  className="w-[90%] focus:outline-none"
                />
                <button className="text-lg w-[5%]">
                  <IoSearchOutline />
                </button>
              </div>
              <div className="sorting flex gap-[22px] items-center">
                <label htmlFor="sort" className="text-[14px]">
                  Sort By:
                </label>
                <select
                  name="sort"
                  id="sort"
                  className="py-[12px] px-[16px] border"
                >
                  <option value="default">Default Sorting</option>
                  <option value="priceLowToHigh">Price: Low to High</option>
                  <option value="priceHighToLow">Price: High to Low</option>
                  <option value="nameAtoZ">Name: A to Z</option>
                  <option value="nameZtoA">Name: Z to A</option>
                </select>
              </div>
            </div>
            <div className="infoHeader bg-[#F2F4F5] w-full py-[12px] px-[24px] flex justify-between">
              <div className="ActiveFilters">
                <span className="text-[#5F6C72] text-[14px]">
                  Active Filters:{" "}
                </span>
              </div>
              <div className="resultsCount">
                <span className="font-semibold text-[14px]">
                  {displayed.length}{" "}
                  <span className="text-[#5F6C72]">Results Found.</span>
                </span>
              </div>
            </div>

            <div className="products-list flex flex-col">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-[60px] mt-12">
                {displayed.slice(0, shown).map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
