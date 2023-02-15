import React from "react";
import "../home_links-styles.css";
import Milky from "../../../../public/milky.jpg";

const Link_two = () => {
  return (
    <>
      <section className="links_style">
        <h1 className="link_title">Milky Way</h1>
        <p className="links_text">
          The Milky Way is the galaxy that includes the Solar System, with the
          name describing the galaxy's appearance from Earth: a hazy band of
          light seen in the night sky formed from stars that cannot be
          individually distinguished by the naked eye. <br />
          <br />
          The term Milky Way is a translation of the Latin via lactea, from the
          Greek γαλακτικὸς κύκλος (galaktikòs kýklos), meaning "milky
          circle".From Earth, the Milky Way appears as a band because its
          disk-shaped structure is viewed from within. <br />
          <br />
          Galileo Galilei first resolved the band of light into individual stars
          with his telescope in 1610. Until the early 1920s, most astronomers
          thought that the Milky Way contained all the stars in the Universe.{" "}
          <br />
          <br />
          Following the 1920 Great Debate between the astronomers Harlow Shapley
          and Heber Doust Curtis, observations by Edwin Hubble showed that the
          Milky Way is just one of many galaxies.
        </p>
        <img src={Milky} alt="Milky" className="earth_img2 galaxy" />
      </section>
    </>
  );
};

export default Link_two;
