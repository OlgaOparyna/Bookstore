import React, {FC, useState} from "react";
import classNames from "classnames";

import styles from "./Tabs.module.scss";
import {TabsNames, TabsProps} from "./types";

const Tabs: FC<TabsProps> = ({ tabsListArray, activeTab, onClick }) => {
    // const [activeTab, setActiveTab] = useState(TabsNames.SIGNIN);
    // const onTabClick = (key: TabsNames) => () => {
    //     setActiveTab(key);
    // };
    // const TABS_LIST =  [
    //     {
    //         title: "SIGN IN",
    //         key: TabsNames.SIGNIN,
    //     },
    //     {
    //         title: "SIGN UP",
    //         key: TabsNames.SIGNUP,
    //     },
    // ]
     return (
        <div
            className={styles.container}
        >
            {tabsListArray.map((tab) => {
                return (
                    <div
                        key={tab.key}
                        className={classNames(styles.tab, {
                            [styles.activeTab]: activeTab === tab.key
                        })}
                        onClick={onClick(tab.key)}
                    >
                        {tab.title}
                    </div>
                );
            })}
        </div>
    );
};
export default Tabs;
