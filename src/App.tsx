import React from "react";
import Router from "src/pages/Router";
import store from "src/redux/store";
import {Provider} from "react-redux";

function App() {
  return (
      <Provider store={store} >
          <Router />
      </Provider>
  );
}

export default App;
