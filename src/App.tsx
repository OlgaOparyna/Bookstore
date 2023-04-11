import React from 'react';
import Button from "./components/Button";
function App() {
  return (
    <div className="App">
      <Button title={"Add to cart"} onClick={()=>{}}/>
      <Button title={"disabled"} onClick={()=>{}} disabled/>
    </div>
  );
}

export default App;
