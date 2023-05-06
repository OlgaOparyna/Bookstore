import React from "react";
import { PersistGate } from "redux-persist/integration/react";
import Router from "src/pages/Router";
import { persistor } from "src/redux/store";

function App() {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  );
}

export default App;
