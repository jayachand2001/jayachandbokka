import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Router } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Offer from "./components/Offer.jsx";
import Team from "./components/Team.jsx";
import Blog from "./components/Blog.jsx";
import Contact from "./components/Contact.jsx";

function App() {
  return (
    <BrowserRouter>
    <Home/>
    <About/>
    <Offer/>
    <Team/>
    <Blog />
    <Contact />
  </BrowserRouter>
  );
}

export default App;
