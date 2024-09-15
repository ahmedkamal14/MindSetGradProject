import PropTypes from "prop-types";

const AboutSection = ({ selectedProduct }) => {
  return (
    <div className="grid grid-cols-2 text-[14px] text-[#5F6C72] gap-[8px]">
      <p>
        Sku:{" "}
        <span className="text-[#191C1F] font-semibold">
          {selectedProduct.sku}
        </span>
      </p>
      <p>
        Availability:{" "}
        <span
          className={`font-semibold ${
            selectedProduct.availabilityStatus === "In Stock"
              ? "text-[#2DB224]"
              : "text-red-600"
          }`}
        >
          {selectedProduct.availabilityStatus}
        </span>
      </p>
      <p>
        Stock:{" "}
        <span className="text-[#191C1F] font-semibold">
          {selectedProduct.stock}
        </span>
      </p>
      <p>
        Category:{" "}
        <span className="text-[#191C1F] font-semibold capitalize">
          {selectedProduct.category}
        </span>
      </p>
    </div>
  );
};

AboutSection.propTypes = {
  selectedProduct: PropTypes.object.isRequired,
};

export default AboutSection;
