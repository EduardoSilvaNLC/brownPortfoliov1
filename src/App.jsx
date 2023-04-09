import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import "./App.css";
import About from "./components/About";
import RecentlyTech from "./components/RecentlyTech";
import GameHub from "./components/GameHub";
import Mums from "./components/Mums";
import GetInTouch from "./components/GetInTouch";
import Copyrigth from "./components/Copyrigth";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <RecentlyTech />
      <GameHub />
      <Mums />
      <GetInTouch />
      <Copyrigth />
    </>
  );
};

export default App;
