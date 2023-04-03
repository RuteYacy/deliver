import React from "react";
import Category from "./components/Category.jsx";
import Food from "./components/Food.jsx";
import HeadlineCards from "./components/HeadlineCards.jsx";
import Hero from "./components/Hero.jsx";
import NavBar from './components/NavBar.jsx'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;
