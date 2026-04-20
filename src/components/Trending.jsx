import leftButton from "../assets/arrow-left.png";
import rightButton from "../assets/arrow-right.png";
import "../css/Trending.css";
import data from "../assets/data/mcdonalds_menu.json";
import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";

function Trending() {
  console.log(data);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const trendingData = [];
    for (let index = 0; index <= 4; index++) {
      let randomNum = Math.floor(Math.random() * 110);
      trendingData.push(data[randomNum]);
    }
    setTrending(trendingData);
  }, []);

  console.log(trending);

  return (
    <>
      <div className="trending-container">
        <h2 className="trending-title">Trending Now</h2>
        <div className="trending-button-container">
          <img
            className="trending-button-container__button"
            src={leftButton}
            alt="left button"
          />
          <img
            className="trending-button-container__button"
            src={rightButton}
            alt="right button"
          />
        </div>
      </div>
      <div className="trending-item-container">
        {trending.map((item) => (
          <MenuItem
            title={item.name}
            img={item.main_image}
            cssClass="trending-item"
            price={1}
          />
        ))}
      </div>
    </>
  );
}

export default Trending;
