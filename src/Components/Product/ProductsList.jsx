import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const ProductsList = ({ shown }) => {
  const { selectedItems: displayed } = useSelector((state) => state.products);
  return (
    <div className="products-list flex flex-col">
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-[10px] md:gap-[20px] mt-12 mx-auto">
        {displayed?.slice(0, shown).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

ProductsList.propTypes = {
  shown: PropTypes.number.isRequired,
};

export default ProductsList;
