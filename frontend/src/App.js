import React from "react";

import { Navbar } from "./components";
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import "./App.scss";
import Projects from "./container/Projects/Projects";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      {/* <About /> */}
      <Projects />
      <Work />
      <Skills />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
