import PropTypes from "prop-types";
import { renderStars } from "@/Utils/function.util";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/MindSetGradProject/products/${product.id}`}>
      <div className="flex flex-col gap-[8px] border w-[234px] h-[320px] p-[16px]">
        <img src={product.thumbnail} alt={product.title} />

        {/* Rating */}
        <div className="flex items-center gap-1 text-yellow-500">
          {renderStars(product.rating)}
          <span className="text-[12px] text-black ms-3">
            {`(${product?.reviews?.length})`}
          </span>
        </div>

        <span className="text-[14px] text-[#191C1F]">{product.title}</span>

        <span className="text-[14px] font-semibold text-[#2DA5F3]">
          ${product.price.toFixed(2)}
        </span>
      </div>
    </Link>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};
export default ProductCard;
