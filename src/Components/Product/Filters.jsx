import { useState, useEffect } from "react";
import ReactSlider from "react-slider";
import { setSelectedCat, setSelectedItems } from "@/Store/Slices/productsSlice";
import { useSelector, useDispatch } from "react-redux";

const Filters = () => {
  const [isVisible, setIsVisible] = useState(false); // Start with filters hidden on small screens
  const [tempMinPrice, setTempMinPrice] = useState(0); // State for minimum price
  const [tempMaxPrice, setTempMaxPrice] = useState(1000); // State for maximum price
  const { selectedCat, categories, items: products } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let filteredProducts = products;

    // Filter by category
    if (selectedCat !== "All Products") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCat
      );
    }

    // Filter by price range
    filteredProducts = filteredProducts.filter(
      (product) =>
        product.price >= tempMinPrice && product.price <= tempMaxPrice
    );

    dispatch(setSelectedItems(filteredProducts));
  }, [dispatch, selectedCat, tempMinPrice, tempMaxPrice, products]);

  return (
    <div className="filters-container">
      {/* Toggle Button for small screens */}
      <button
        className="lg:hidden mb-4 py-2 px-4 bg-blue-500 text-white rounded"
        onClick={() => setIsVisible(!isVisible)}
      >
        {isVisible ? "Hide Filters" : "Show Filters"}
      </button>

      {/* Filters Content */}
      <div
        className={`${
          isVisible ? "block" : "hidden"
        } lg:block w-full flex-shrink-0`}
      >
        {/* Category Filter */}
        <div className="single flex flex-col gap-4 pb-6 border-b">
          <h1 className="title font-medium">CATEGORY</h1>
          <div className="allCats flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                id="All Products"
                className="text-black"
                value="All Products"
                checked={selectedCat === "All Products"}
                onChange={() => dispatch(setSelectedCat("All Products"))}
              />
              <label
                htmlFor="All Products"
                className={`capitalize text-sm text-[#475156] ${
                  selectedCat === "All Products"
                    ? "font-medium text-black"
                    : ""
                }`}
              >
                All Products
              </label>
            </div>
            {categories.map((category) => (
              <div key={category} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  id={category}
                  value={category}
                  className="text-black"
                  checked={selectedCat === category}
                  onChange={() => dispatch(setSelectedCat(category))}
                />
                <label
                  htmlFor={category}
                  className={`capitalize text-sm text-[#475156] ${
                    selectedCat === category ? "font-medium text-black" : ""
                  }`}
                >
                  {category}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="single flex flex-col gap-4 pb-6 border-b">
          <h1 className="title font-medium mt-4">PRICE RANGE</h1>
          <div className="py-6">
            <ReactSlider
              className="horizontal-slider flex items-center"
              thumbClassName="slider-thumb"
              trackClassName="slider-track"
              min={0}
              max={1000}
              value={[tempMinPrice, tempMaxPrice]}
              onChange={([newMin, newMax]) => {
                setTempMinPrice(newMin);
                setTempMaxPrice(newMax);
              }}
            />
            <div className="flex justify-between mt-4">
              <span>Min: ${tempMinPrice}</span>
              <span>Max: ${tempMaxPrice}</span>
            </div>
          </div>

          <div className="otherOptions flex flex-col gap-2">
            <div className="option flex items-center gap-2">
              <input
                type="radio"
                name="price"
                id="0to25"
                onChange={() => {
                  setTempMinPrice(0);
                  setTempMaxPrice(25);
                }}
              />
              <label htmlFor="0to25">Under $25</label>
            </div>
            <div className="option flex items-center gap-2">
              <input
                type="radio"
                name="price"
                id="25to100"
                onChange={() => {
                  setTempMinPrice(25);
                  setTempMaxPrice(100);
                }}
              />
              <label htmlFor="25to100">$25 to $100</label>
            </div>
            <div className="option flex items-center gap-2">
              <input
                type="radio"
                name="price"
                id="100to300"
                onChange={() => {
                  setTempMinPrice(100);
                  setTempMaxPrice(300);
                }}
              />
              <label htmlFor="100to300">$100 to $300</label>
            </div>
            <div className="option flex items-center gap-2">
              <input
                type="radio"
                name="price"
                id="300to500"
                onChange={() => {
                  setTempMinPrice(300);
                  setTempMaxPrice(500);
                }}
              />
              <label htmlFor="300to500">$300 to $500</label>
            </div>
            <div className="option flex items-center gap-2">
              <input
                type="radio"
                name="price"
                id="500to1000"
                onChange={() => {
                  setTempMinPrice(500);
                  setTempMaxPrice(1000);
                }}
              />
              <label htmlFor="500to1000">$500 to $1000</label>
            </div>
          </div>
        </div>

        <div className="add w-full border-[#FA8232] border rounded-md p-8 flex flex-col gap-6 items-center">
          <img src="./add.png" alt="ADD" className="w-44" />
          <img src="./add1.png" alt="ADD Title" />
          <button
            className="bg-[#FA8232] text-white py-3 w-full font-semibold rounded-md"
            disabled
          >
            Add To Cart
          </button>
          <button
            className="border-[#FA8232] text-[#FA8232] border py-3 w-full font-semibold rounded-md"
            disabled
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
