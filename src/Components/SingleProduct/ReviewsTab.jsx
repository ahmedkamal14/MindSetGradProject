import ReviewBox from "./ReviewBox";
import PropTypes from "prop-types";

const ReviewsTab = ({ selectedProduct }) => {
  return (
    <>
      {selectedProduct?.reviews?.length === 0 ? (
        <div>No reviews available</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px] w-full">
          {selectedProduct?.reviews?.map((review) => (
            <ReviewBox key={review.id} review={review} />
          ))}
        </div>
      )}
    </>
  );
};

ReviewsTab.propTypes = {
  selectedProduct: PropTypes.object.isRequired,
};
export default ReviewsTab;
