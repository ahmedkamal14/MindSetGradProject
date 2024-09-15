import { IoSearchOutline } from "react-icons/io5";
import ProductsList from "@/Components/Product/ProductsList";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedItems } from "@/Store/Slices/productsSlice"; // Adjust the import according to your setup

const ProductsSection = () => {
  const { selectedItems: displayed, selectedCat } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();
  const [shown, setShown] = useState(20);
  const [sortOption, setSortOption] = useState("default");

  useEffect(() => {
    let sorted = [...displayed];

    if (selectedCat !== "All Products") {
      sorted = sorted.filter((product) => product.category === selectedCat);
    }

    switch (sortOption) {
      case "priceLowToHigh":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "nameAtoZ":
        sorted.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "nameZtoA":
        sorted.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    dispatch(setSelectedItems(sorted)); // Update the displayed items in the Redux store
  }, [sortOption]);

  return (
    <div className="products flex flex-col gap-4 w-full px-[1px] lg:px-4">
      <div className="searchHeader flex flex-col lg:flex-row lg:justify-between items-center mb-4">
        <div className="searchBar flex items-center py-3 px-4 border w-full lg:w-2/3 lg:mr-4">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search for anything"
            className="w-full focus:outline-none"
          />
          <button className="text-lg ml-2">
            <IoSearchOutline />
          </button>
        </div>
        <div className="sorting mt-4 lg:mt-0 flex gap-4 items-center w-full lg:w-auto">
          <label htmlFor="sort" className="text-sm">
            Sort By:
          </label>
          <select
            name="sort"
            id="sort"
            className="py-2 px-4 border"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default Sorting</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="nameAtoZ">Name: A to Z</option>
            <option value="nameZtoA">Name: Z to A</option>
          </select>
        </div>
      </div>
      <div className="infoHeader bg-gray-200 w-full py-3 px-4 flex flex-col lg:flex-row lg:justify-between items-center mb-4">
        <div className="ActiveFilters mb-2 lg:mb-0">
          <span className="text-gray-600 text-sm">
            Active Filters:{" "}
            <span className="text-black font-medium capitalize">
              {selectedCat}
            </span>
          </span>
        </div>
        <div className="resultsCount flex flex-col gap-1 lg:flex-row lg:gap-4">
          <span className="font-semibold text-sm">
            {displayed.length}{" "}
            <span className="text-gray-600">Results Found.</span>
          </span>
          <span className="font-semibold text-sm">
            <span className="text-gray-600">Showing</span>{" "}
            {shown < displayed.length ? shown : displayed.length}{" "}
            <span className="text-gray-600">of</span> {displayed.length}{" "}
          </span>
        </div>
      </div>

      <ProductsList shown={shown} />

      {displayed.length > shown && (
        <div className="loadMore flex justify-center mt-4">
          <button
            onClick={() => setShown(shown + 20)}
            className="py-3 px-6 border-blue-500 border text-blue-500 text-sm font-bold rounded"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsSection;
