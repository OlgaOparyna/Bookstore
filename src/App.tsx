import React from "react";
import Card from "./components/Card";
import {CardColor} from "src/components/Card/types";

const MOCK_CARD = {
    title: "Designing Across Senses",
    subtitle: "A Multimodal Approach to Product Design",
    isbn13: 9781491954249,
    price: "$27.59",
    image: "https://itbook.store/img/books/9781491954249.png",
    url: "https://itbook.store/books/9781491954249"
}
function App() {
  return (
    <div className="App">
      <Card card={MOCK_CARD} color={CardColor.Purple}/>
    </div>
  );
}

export default App;
