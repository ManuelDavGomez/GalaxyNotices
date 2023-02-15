import React from "react";
import "../home_links-styles.css";
import Earth from "../../../../public/img/assets/earth.jpg";
import Earth2 from "../../../../public/img/assets/earth2.jpg";


const Link_one = () => {
  return (
    <>
      <section className="links_style">

        <img src={Earth} alt="Earth" className="earth_img" />
        <p className="links_text">
          Earth, our home planet, is a world unlike any other. The third planet
          from the sun, Earth is the only place in the known universe confirmed
          to host life. <br />
          <br />
          With a radius of 3,959 miles, Earth is the fifth largest planet in our
          solar system, and it's the only one known for sure to have liquid
          water on its surface. <br /> <br />
          Earth is also unique in terms of monikers. Every other solar system
          planet was named for a Greek or Roman deity, but for at least a
          thousand years, some cultures have described our world using the
          Germanic word “earth,” which means simply “the ground.”
        </p>
        <img src={Earth2} alt="Earth" className="earth_img2" />
      </section>
    </>
  );
};

export default Link_one;
