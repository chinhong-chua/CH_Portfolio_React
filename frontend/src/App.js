import React from "react";

import { Navbar } from "./components";
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  Work,
  Projects,
  Certification,
} from "./container";
import "./App.scss";

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
      <Certification />
      <Footer />
    </div>
  );
};

export default App;
