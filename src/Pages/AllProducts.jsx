import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import {
  fetchAllProducts,
  fetchAllCategories,
  setSelectedItems,
} from "@/Store/Slices/productsSlice";
import { useEffect } from "react";
import { GoHome } from "react-icons/go";
import { Link } from "react-router-dom";
import ProductsSection from "@/Components/Product/ProductsSection";
import Filters from "@/Components/Product/Filters";

const AllProducts = () => {
  const dispatch = useDispatch();

  const {
    isLoading,
    error,
    selectedCat,
    items: products,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  useEffect(() => {
    if (selectedCat === "All Products") {
      dispatch(fetchAllProducts());
    } else {
      dispatch(
        setSelectedItems(
          products.filter((product) => {
            return product.category === selectedCat;
          })
        )
      );
    }
  }, [dispatch, selectedCat]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="w-full bg-[#F2F4F5] py-4 px-4">
        <div className="container max-w-screen-2xl mx-auto">
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
            <span className="text-[#2DA5F3] capitalize">{selectedCat}</span>
          </p>
        </div>
      </div>

      {/* Container Section */}
      <div className="py-[40px] px-6">
        <div className="container max-w-screen-2xl mx-auto flex flex-col lg:flex-row gap-[24px]">
          {/* Filters */}
          <Filters />
          {/* Products List */}
          <ProductsSection />
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
