import React from "react";
import { NavLink } from "react-router-dom";
import BackgroundHome from "../assets/background-home.jpg";
import HomeBanner from "../components/homeBanner";
import cardImages from "../data/data.json";
import Cards from "../components/cards";

const HomePage = () => {
  return (
    <div className="HomePage">
      <HomeBanner
        picture={BackgroundHome}
        text="Chez vous, partout et ailleurs"
      />
      <div className="home-card">
        {cardImages.map((card) => (
          <NavLink key={card.id} to={"/card/" + card.id + "/#"}>
            <Cards
              key={card.id}
              id={card.id}
              image={card.cover}
              title={card.title}
            />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
