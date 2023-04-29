import React, {useState} from 'react';
import {TabsNames} from "src/components/Tabs/types";
import styles from "./RegistrationForm.module.scss";
import Tabs from "src/components/Tabs";
import SignIn from "src/components/SingIn";
import SignUp from "src/components/SignUp";

const RegistrationForm = () => {
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
      const tabActivePage = () => {
        switch (activeTab) {
            case TabsNames.SIGNIN:
                return <SignIn/>;
            case TabsNames.SIGNUP:
                return <SignUp/>;
            default:
                return <SignIn/>;
        }
    };
    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                <Tabs tabsListArray={TABS_LIST} activeTab={activeTab} onClick={onTabClick} tabsClassName={styles.tabs}/>
                <div>{tabActivePage()}</div>
                </div>
        </div>
        </div>
    );
};

export default RegistrationForm;
