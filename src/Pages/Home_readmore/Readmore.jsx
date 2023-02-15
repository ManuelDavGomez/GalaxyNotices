import React from "react";
import "./read.css";
import Black from "../../../public/black_hole.jpeg";

const Readmore = () => {
  return (
    <>
      <section className="read_container">
        <img src={Black} alt="" className="read_img" />
        <p className="read_text">
          As a quasar, Ton 618 is believed to be the active galactic nucleus at
          the center of a galaxy, the engine of which is a supermassive black
          hole feeding on intensely hot gas and matter in an accretion disc. The
          light originating from the quasar is estimated to be 10.8 billion
          years old. <br /> <br />
          Due to the brilliance of the central quasar, the surrounding galaxy is
          outshined by it and hence is not visible from Earth. With an absolute
          magnitude of −30.7, it shines with a luminosity of 4×1040 watts, or as
          brilliantly as 140 trillion times that of the Sun, making it one of
          the brightest objects in the known Universe.[5] Like other quasars,
          Ton 618 has a spectrum containing emission lines from cooler gas much
          further out than the accretion disc, in the broad-line region. <br /> <br />
          The size of the broad-line region can be calculated from the
          brightness of the quasar radiation that is lighting it up.[6] Shemmer
          and coauthors used both NV and CIV emission lines in order to
          calculate the widths of the Hβ spectral line of at least 29 quasars,
          including Ton 618, as a direct measurement of their accretion rates
          and hence the mass of the central black hole.
        </p>
      </section>
    </>
  );
};

export default Readmore;
