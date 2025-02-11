import React from "react";
import { portfolio } from "../../constant/data";
import PortofolioItem from "../../components/PortofolioItem";
import "./portofolio.css";

const Portofolio = () => {
  const reversedPortfolio = [...portfolio].reverse();

  return (
    <section className="portfolio section">
      <h2 className="section__title">
        My <span>Portofolio</span>
      </h2>
      <div className="portfolio__container container grid">
        {reversedPortfolio.map((item) => {
          return <PortofolioItem key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Portofolio;
