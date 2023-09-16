import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards";
import Sidecarde from "./components/Sidecard/Sidecarde";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [titles, setTitles] = useState([]);
  const [credits, setCredits] = useState(20);
  const [times, setTimes] = useState(0);
  const [prices, setPrices] = useState(0);

  const handleTitles = (card) => {
    const isExist = titles.find((item) => item.id === card.id);
    let count = card.time;
    let countPrice = card.price;
    if (isExist) {
      toast.warn("Already Added");
    } else {
      titles.forEach((item) => {
        count = count + item.time;
        countPrice = countPrice + item.price;
      });
      const credit = 20 - count;
      if (count > 20) {
        toast.warn("You can't add more than 20 credit");
        if (credit < 0) {
          toast.warn("You dont have enough credit");
        }
      } else {
        const newArray = [...titles, card];
        setTitles(newArray);
        setCredits(credit);
        setTimes(count);
        setPrices(countPrice);
        console.log(card);
      }
    }
  };

  const handleClick = (card) => {
    handleTitles(card);
    // handleCredits();
  };

  return (
    <>
      <header className="">
        <h3 className="text-3xl font-bold text-center my-12">
          Course Registration
        </h3>
      </header>
      <main className="flex gap-6">
        <Cards handleClick={handleClick}></Cards>
        <Sidecarde
          titles={titles}
          credits={credits}
          times={times}
          prices={prices}
        ></Sidecarde>
        <ToastContainer />
      </main>
    </>
  );
}

export default App;
