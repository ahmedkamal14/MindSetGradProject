import PropTypes from "prop-types";
import { MdOutlineVerified } from "react-icons/md";
import { MdLocalShipping } from "react-icons/md";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { MdPayment } from "react-icons/md";

const DescriptionTab = ({ selectedProduct }) => {
  return (
    <div className="flex gap-[24px] flex-col md:flex-row">
      <div className="desc flex flex-col gap-[12px] w-full md:w-[60%]">
        <h1 className="text-[18px] font-semibold">Description</h1>
        <p>{selectedProduct.description}</p>
      </div>
      <div className="features flex flex-col gap-[12px]">
        <h1 className="text-[18px] font-semibold">Features</h1>
        <div className="flex flex-col gap-[12px]">
          <div className="feat flex items-center gap-2">
            <MdOutlineVerified className="text-[#FA8232] text-[24px]" />
            <p>{selectedProduct.warrantyInformation}</p>
          </div>
          <div className="feat flex items-center gap-2">
            <MdLocalShipping className="text-[#FA8232] text-[24px]" />
            <p>{selectedProduct.shippingInformation}</p>
          </div>
          <div className="feat flex items-center gap-2">
            <TfiHeadphoneAlt className="text-[#FA8232] text-[24px]" />
            <p>24/7 Customer support</p>
          </div>
          <div className="feat flex items-center gap-2">
            <MdPayment className="text-[#FA8232] text-[24px]" />
            <p>Secure payment method</p>
          </div>
        </div>
      </div>
    </div>
  );
};
DescriptionTab.propTypes = {
  selectedProduct: PropTypes.object.isRequired,
};

export default DescriptionTab;
