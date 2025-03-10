import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portofolio from "./pages/porto/Portofolio";
import Contact from "./pages/contact/Contact";
import Themes from "./components/Themes";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portofolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
