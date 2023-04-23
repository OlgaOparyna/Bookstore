import React, {FC} from "react";
import classNames from "classnames";

import styles from "./Tabs.module.scss";
import {TabsProps} from "./types";

const Tabs: FC<TabsProps> = ({ tabsListArray, activeTab, onClick }) => {

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
