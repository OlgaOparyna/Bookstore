import React, { useState } from "react";

import Input from "src/components/Input";
import Button from "src/components/Button";
import styles from "./SignIn.module.scss";
import Tabs from "src/components/Tabs";
import {TabsNames} from "src/components/Tabs/types";
import {RoutesList} from "src/pages/Router";
import {useNavigate} from "react-router-dom";

const SignIn= () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
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
    const navigate = useNavigate()
    const getCurrentList = () => {
        switch (activeTab) {
            case TabsNames.SIGNIN:
                return navigate(RoutesList.SignIn);
            case TabsNames.SIGNUP:
                return navigate(RoutesList.SignUp);
            default:
                return navigate(RoutesList.SignIn);
        }
    };
    const onChangeEmail = (value: string) => {
        setEmail(value);
    };
    const onChangePassword = (value: string) => {
        setPassword(value);
    };
    return (
        <div className={styles.container}>
            <Tabs tabsListArray={TABS_LIST} activeTab={activeTab} onClick={onTabClick}/>
            <div className={styles.wrapper}>
                <div className={styles.inputContainer}>
                    <Input
                        title="Email"
                        titleClassName={styles.title}
                        value={email}
                        onChange={onChangeEmail}
                        placeholder="Your email"
                    />
                    <Input
                        title="Password"
                        titleClassName={styles.title}
                        value={password}
                        onChange={onChangePassword}
                        placeholder="Your password"
                    />

                </div>
                <div
                    className={styles.forgotPassword}
                >
                    Forgot password?
                </div>
                <div className={styles.button}>
                    <Button title={"Sign in"} onClick={() => {}} />
                </div>
                {/* TODO кнопка validation*/}
            </div>
        </div>
    );
};
export default SignIn;
