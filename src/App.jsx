// import React from 'react'
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        {/* nav and hero  */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        {/* website pages */}
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        {/* final page */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        {/* end of portfolio website */}
      </div>
    </BrowserRouter>
  );
};

export default App;
