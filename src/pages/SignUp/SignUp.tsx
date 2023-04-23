import React, {useEffect, useMemo, useState} from "react";

import Input from "src/components/Input";
import Button from "src/components/Button";
import styles from "./SignUp.module.scss";
import Tabs from "src/components/Tabs";
import {TabsNames} from "src/components/Tabs/types";
const SignUp= () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [activeTab, setActiveTab] = useState(TabsNames.SIGNUP);
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
    const onChangeName = (value: string) => {
        setName(value);
    };
    const onChangeEmail = (value: string) => {
        setEmail(value);
    };
    const onChangePassword = (value: string) => {
        setPassword(value);
    };
    const onChangeConfirmPassword = (value: string) => {
        setConfirmPassword(value);
    };
    const onSignUpClick = () => {};
       return (
        <div className={styles.container}>
            <Tabs tabsListArray={TABS_LIST} activeTab={activeTab} onClick={onTabClick}/>
            <div className={styles.wrapper}>
                <div className={styles.inputContainer}>
                    <Input
                        title={"Name"}
                        titleClassName={styles.title}
                        value={name}
                        onChange={onChangeName}
                        placeholder={"Your name"}
                    />
                    <Input
                        title={"Email"}
                        titleClassName={styles.title}
                        value={email}
                        onChange={onChangeEmail}
                        placeholder={"Your email"}
                    />
                    <Input
                        title={"Password"}
                        titleClassName={styles.title}
                        value={password}
                        onChange={onChangePassword}
                        placeholder={"Your password"}
                        type={"password"}
                    />
                    <Input
                        title={"Confirm password"}
                        titleClassName={styles.title}
                        value={confirmPassword}
                        onChange={onChangeConfirmPassword}
                        placeholder={"Confirm password"}
                        type={"password"}
                    />
                </div>
                <div className={styles.button}>
                    <Button title={"Sign up"} onClick={onSignUpClick} />
                </div>
                {/* TODO кнопка validation*/}
            </div>
        </div>
    );
};
export default SignUp;
