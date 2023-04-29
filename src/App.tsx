import React from "react";
import Router from "src/pages/Router";
import store from "src/redux/store";
import {Provider} from "react-redux";
import BasketCart from "src/components/BasketCart";

function App() {
    const MOCK_CARD = {
        title: "Designing Across Senses",
        subtitle: "A Multimodal Approach to Product Design",
        isbn13: 9781491954249,
        price: "$27.59",
        image: "https://itbook.store/img/books/9781491954249.png",
        url: "https://itbook.store/books/9781491954249"
    }
  return (
      <BasketCart card={MOCK_CARD} quantity={1}/>
      // <Provider store={store} >
      //     <Router />
      // </Provider>
  );
}

export default App;
