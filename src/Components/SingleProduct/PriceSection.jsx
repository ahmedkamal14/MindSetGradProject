import PropTypes from "prop-types";

const PriceSection = ({ selectedProduct }) => {
  return (
    <div className="flex items-center gap-[12px] pb-8 border-b">
      <span className="text-[24px] font-semibold text-[#2DA5F3]">
        ${selectedProduct.price?.toFixed(2)}
      </span>
      <span className="text-[18px] text-[#5F6C72] line-through">
        $
        {(
          selectedProduct.price +
          selectedProduct.price *
            (selectedProduct.discountPercentage / 100)?.toFixed(2)
        ).toFixed(2)}
      </span>

      <div className="bg-[#EFD33D] flex justify-center items-center text-[14px] font-semibold py-[5px] px-[10px] rounded-[2px]">
        <span>{selectedProduct.discountPercentage?.toFixed(0)}% OFF</span>
      </div>
    </div>
  );
};

PriceSection.propTypes = {
  selectedProduct: PropTypes.object.isRequired,
};

export default PriceSection;
