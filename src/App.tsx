import React, {useState} from 'react';
import Tabs from "./components/Tabs";
import {TabsNames, TabsProps} from "./components/Tabs/types";
function App() {
    const [activeTab, setActiveTab] = useState(TabsNames.SIGNIN);
    const onTabClick = (key: TabsNames) => () => {
        setActiveTab(key);
    };
    const TABS_LIST =  [
            {
                title: "SIGN IN",
                key: TabsNames.SIGNIN,
            },
            {
                title: "SIGN UP",
                key: TabsNames.SIGNUP,
            },
        ]
  return (
    <div className="App">
      <Tabs tabsListArray={TABS_LIST} activeTab={activeTab} onClick={onTabClick}/>
    </div>
  );
}

export default App;
