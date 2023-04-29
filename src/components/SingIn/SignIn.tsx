import React, { useState } from "react";

import Input from "src/components/Input";
import Button from "src/components/Button";
import styles from "./SignIn.module.scss";

const SignIn= () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const onChangeEmail = (value: string) => {
        setEmail(value);
    };
    const onChangePassword = (value: string) => {
        setPassword(value);
    };
    return (
        <div className={styles.container}>
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
    );
};
export default SignIn;
