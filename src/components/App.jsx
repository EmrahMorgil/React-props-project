import React from "react";
import Header from "./Header";
import Card from "./Card";
import Cards from "../Cards";

function App() {
  return (
    <div>
      <Header />
      <div className="row cards">
        {Cards.map((items) => (
          <Card onImg={items.img} onName={items.name} onPrice={items.price} />
        ))}
      </div>
    </div>
  );
}

export default App;
