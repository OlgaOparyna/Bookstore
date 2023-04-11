import React from "react";
import EmptyState from "./components/EmptyState";
import Loader from "src/components/Loader";
function App() {
  return (
    <div className="App">
      <EmptyState title={"hello"} description={"world"} />
      <Loader />
    </div>
  );
}

export default App;
