import React, {useState} from 'react';
import Input from "./components/Input";
function App() {

  return (
    <div className="App">
<Input value={'Placeholder'} onChange={()=>{}} placeholder={'Placeholder'}/>
<Input value={'Placeholder'} onChange={()=>{}} placeholder={'Placeholder'} errorText={'error'}/>

        <Input value={"text"} onChange={()=>{}} title="Title" placeholder="Placeholder"/>
        <Input value={"text"} onChange={()=>{}} title="Title" placeholder="Placeholder" disabled/>
        <Input value={"text"} onChange={()=>{}} title="Title" placeholder="Placeholder" errorText ={"Error text"} />
    </div>
  );
}

export default App;
