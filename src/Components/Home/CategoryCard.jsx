import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setSelectedCat } from "@/Store/Slices/productsSlice";
import { useNavigate } from "react-router-dom";
const CategoryCard = ({ cat }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <button
      className="flex flex-col w-[190px] sm:w-[205px] gap-2 px-[12px] py-[24px] border justify-center items-center hover:scale-90 transition-all duration-300 object-contain h-[220px]"
      onClick={() => {
        dispatch(setSelectedCat(cat));
        navigate("/MindSetGradProject/products");
      }}
    >
      <div className="h-[80%]">
        <img src={`./cats/${cat}.png`} alt={cat} className="h-[80%]" />
      </div>
      <h1 className="text-[16px] font-medium capitalize">{cat}</h1>
    </button>
  );
};

CategoryCard.propTypes = {
  cat: PropTypes.any.isRequired,
};

export default CategoryCard;
