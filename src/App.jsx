import React from "react";
import Navbar from "./companents/Navbar";
import Header from "./companents/Header";
import Course from "./companents/Courses";
import Teachers from "./companents/Teachers";
import Services from "./companents/Services";
import About from "./companents/About";
import FAQ from "./companents/FAQ";
import Application from "./companents/Application";
import Reviews from "./companents/Reviews";
import Blog from "./companents/Blog";
import Contact from "./companents/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Course />
      <Teachers />
      <Services />
      <About />
      <FAQ />
      <Application />
      <Reviews />
      <Blog />
      <Contact />
    </>
  );
};

export default App;
