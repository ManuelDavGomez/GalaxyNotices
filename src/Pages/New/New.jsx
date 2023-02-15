import React from "react";
import "../New/new.css";

const News = () => {
  return (
    <>
      <section className="news_containers">
        <section className="container_news">
          <p className="news_titles">Mars</p>
          <p className="news_texts">
            Mars is the fourth planet from the Sun - a dusty, cold, desert world
            with a very thin atmosphere. Mars is also a dynamic planet with
            seasons, polar ice caps, canyons, extinct volcanoes, and evidence
            that it was even more active in the past.
          </p>
        </section>

        <section className="container_news">
          <p className="news_titles">Uy scuti</p>
          <p className="news_texts">
            UY Scuti (BD-12°5055) is an extreme red hypergiant or red supergiant
            star in the constellation Scutum. It is considered one of the
            largest known stars by radius and is also a pulsating variable star,
            with a maximum brightness of magnitude 8.29 and a minimum of
            magnitude 10.56.
          </p>
        </section>

        <section className="container_news">
          <p className="news_titles">Jupiter</p>
          <p className="news_texts">
            Jupiter is the fifth planet from our Sun and is, by far, the largest
            planet in the solar system - more than twice as massive as all the
            other planets combined. Jupiter's stripes and swirls are actually
            cold, windy clouds of ammonia and water, floating in an atmosphere
            of hydrogen and helium.
          </p>
        </section>
      </section>
    </>
  );
};

export default News;
