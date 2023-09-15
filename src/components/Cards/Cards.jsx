import { useEffect, useState } from "react";
import Card from "../Card/Card";

const Cards = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("course.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  return (
    <div className="w-2/3 grid grid-cols-3 gap-6">
      {cards.map((card) => (
        <Card key={card.id} card={card}></Card>
      ))}
    </div>
  );
};

export default Cards;
