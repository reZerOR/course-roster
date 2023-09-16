import PropTypes from "prop-types";
import { FiDollarSign, FiBookOpen } from "react-icons/fi";

const Card = ({ card, handleClick }) => {
  const { img, title, description, price, time } = card;
  return (
    <div className="w-[312px] p-4 bg-white rounded-lg">
      <img src={img} alt="" />
      <h3 className="text-lg font-semibold mt-4">{title}</h3>
      <p className="text-sm leading-6 mb-4">{description}</p>
      <div className="flex justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="text-2xl">
            <FiDollarSign></FiDollarSign>
          </span>
          <p className="text-base font-medium">Price: {price} </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-2xl">
            <FiBookOpen></FiBookOpen>
          </span>
          <p className="text-base font-medium">Credit: {time}hr</p>
        </div>
      </div>
      <button
        onClick={() => handleClick(card)}
        className="bg-blue-500 w-full py-2 text-lg font-semibold text-white rounded-lg"
      >
        Select
      </button>
    </div>
  );
};
Card.propTypes = {
  card: PropTypes.object,
  handleClick: PropTypes.func,
};

export default Card;
