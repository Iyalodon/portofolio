import React from "react";
import Profile from "../../assets/profile.jpg";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./home.css";

const Home = () => {
  return (
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Samsu Rijal</span> Web Designer
          </h1>

          <p className="home__description">
            I’m a new Full-Stack Web Developer eager to start my journey in the
            world of web development. With a passion for learning and
            problem-solving, I’m excited to build both the front-end and
            back-end of web applications. While I’m just starting out, I’m
            dedicated to expanding my skills and gaining practical experience to
            create clean, efficient, and user-friendly solutions. I’m always
            looking for opportunities to grow and collaborate, and I’m driven by
            the challenge of turning ideas into functional, interactive web
            experiences.
          </p>
          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
      <div className="color__block"></div>
    </section>
  );
};

export default Home;
