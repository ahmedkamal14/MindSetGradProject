import NewsLetter from "@/Components/Home/NewsLetter";
import Landing from "@/Components/Home/Landing";
import BestDeals from "@/Components/Home/BestDeals";
import FeaturedProducts from "@/Components/Home/FeaturedProducts";
import AddsSection from "@/Components/Home/AddsSection";
import BrowseCategory from "@/Components/Home/BrowseCategory";
import { useSelector, useDispatch } from "react-redux";
import ClipLoader from "react-spinners/ClipLoader";
import {
  fetchAllProducts,
  fetchAllCategories,
} from "@/Store/Slices/productsSlice";
import { useEffect } from "react";
import NotFound from "@/Pages/NotFound";

const Home = () => {
  const dispatch = useDispatch();

  const { isLoading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchAllProducts());
    dispatch(fetchAllCategories());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <ClipLoader size={50} color={"#000"} loading={isLoading} />
      </div>
    );
  }

  if (error) {
    return <NotFound />;
  }

  return (
    <>
      <Landing />
      <BestDeals />
      <BrowseCategory />
      <FeaturedProducts />
      <AddsSection />
      <NewsLetter />
    </>
  );
};

export default Home;
