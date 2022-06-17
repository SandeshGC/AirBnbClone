import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
function App() {
  const arrayOfCards = data.map((datum) => {
    //an array of card components is formed by mapping data array
    return (
      //mapping data array to card components with props taken from the data array
      <Card key={datum.id} {...datum} />
    );
  });
  return (
    <>
      <NavBar />
      <Hero />
      <section className="card-container">{arrayOfCards}</section>
    </>
  );
}

export default App;
