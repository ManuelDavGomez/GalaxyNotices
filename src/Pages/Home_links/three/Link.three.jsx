import React from "react";
import "../home_links-styles.css";
import Betel from '../../../../public/img/assets/betel.jpg'
import Betel2 from '../../../../public/img/assets/betel2.jpg'

const Link_three = () => {
  return (
    <>
      <section className="links_style">
      <h1 className="link_title">Betelgeuse</h1>
        <p className="links_text">
          If it were at the center of our Solar System, its surface would lie
          beyond the asteroid belt and it would engulf the orbits of Mercury,
          Venus, Earth, and Mars. <br /> <br />
          Calculations of Betelgeuse's mass range from slightly under ten to a
          little over twenty times that of the Sun. For various reasons, its
          distance has been quite difficult to measure; current best estimates
          are on the order of 500-600 light-years from the Sun - a comparatively
          wide uncertainty for a relatively nearby star. Its absolute magnitude
          is about -6. <br /> <br />
          Less than 10 million years old, Betelgeuse has evolved rapidly because
          of its large mass and is expected to end its evolution with a
          supernova explosion, most likely within 100,000 years. Having been
          ejected from its birthplace in the Orion OB1 association - which
          includes the stars in Orion's Belt - this runaway star has been
          observed to be moving through the interstellar medium at a speed of 30
          km/s, creating a bow shock over four light-years wide.
        </p>
        <img src={Betel} alt="Milky" className="earth_img2 galaxy x" />
        <img src={Betel2} alt="Milky" className="earth_img2 galaxy" />
      </section>
    </>
  );
};

export default Link_three;
