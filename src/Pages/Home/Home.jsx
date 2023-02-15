import React from "react";
import "../Home/Home.css";
import Ton from "../../../public/img/assets/ton618.jpg";
import { Link } from "react-router-dom";
import Galaxy from "../../../public/img/assets/galaxy.jpg";

const Home = () => {
  return (
    <>
      <section className="Home_container">
        <section className="article_one">
          <img src={Ton} alt="Img" className="One_img" />
          <div>
            <h1 className="one_title">
              The massive Black Hole <br /> Ton 618
            </h1>
          </div>
          <div>
            <p className="one_text">
              "TON 618" refers to the black hole at the center of a galaxy named
              Ton 618. This black hole is of particular interest to astronomers
              and astrophysicists because of its exceptional size. With a mass
              of 66 billion times that of the sun, Ton 618 is one of the largest
              and most massive black holes ever discovered.
            </p>
            <Link to="/home||readmore" className="one_btn">
              Read More
            </Link>
          </div>
        </section>

        <section className="article_two">
          <div className="containers">
            <Link to="/news||one" className="article_links">
              Earth
            </Link>
            <p className="article_texts">
              Earth is the third planet from the sun and the only known planet
              to support life.
            </p>
          </div>
          <hr className="line" />

          <div className="containers">
            <Link to="/news||two" className="article_links">
              Milky Way
            </Link>
            <p className="article_texts">
              The Milky Way is a huge collection of stars, dust and gas.
            </p>
          </div>
          <hr className="line" />

          <div className="containers">
            <Link to="/news||three" className="article_links">
              Betelgeuse
            </Link>
            <p className="article_texts">
              Betelgeuse is a red supergiant of spectral type M1-2 and one of
              the largest stars visible to the naked eye.
            </p>
          </div>
        </section>
      </section>
      <div className="galaxy_container">
        <img src={Galaxy} alt="galaxy" className="galaxy_img" />
      </div>
    </>
  );
};

export default Home;
