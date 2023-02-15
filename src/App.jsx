import React from "react";
import "../src/App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "../src/Pages/Home/Home.jsx";
import Error from "./Pages/404/Error.jsx";
import Readmore from "./Pages/Home_readmore/Readmore";
import Link_one from "./Pages/Home_links/one/Link_one";
import Link_two from "./Pages/Home_links/two/Link_two";
import Link_three from "./Pages/Home_links/three/Link.three";
import News from "./Pages/New/New";


const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Home />} />

        <Route path="/home||readmore" element={<Readmore />} />

        <Route path="/news||one" element={<Link_one />} />
        <Route path="/news||two" element={<Link_two />} />
        <Route path="/news||three" element={<Link_three />} />

        <Route path="/new" element={<News />} />
      </Routes>

    </>
  );
};

export default App;
