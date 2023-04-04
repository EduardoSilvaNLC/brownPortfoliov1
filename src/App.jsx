import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { Stack } from "@chakra-ui/react";
import fd from "./assets/fd.png";
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
      <Stack
        className="back"
        bgImage={fd}
        bgRepeat="no-repeat"
        bgSize="cover"
        objectFit="cover"
        h="100vh"
        bgPos="bottom"
      >
        <Navbar />
        <Hero />
      </Stack>
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
