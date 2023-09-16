import { useEffect, useState } from "react";
import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = ({ handleClick }) => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="w-2/3 grid grid-cols-3 gap-6">
      {cards.map((card) => (
        <Card key={card.id} card={card} handleClick={handleClick}></Card>
      ))}
    </div>
  );
};
Cards.propTypes = {
  handleClick: PropTypes.func,
};

export default Cards;
