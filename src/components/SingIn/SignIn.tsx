import React, { useState } from "react";

import Input from "src/components/Input";
import Button from "src/components/Button";
import styles from "./SignIn.module.scss";
import {useDispatch} from "react-redux";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth"
import {setUser} from "src/redux/reducers/UserSlice";
import {RoutesList} from "src/pages/Router";
import {useNavigate} from "react-router-dom";

const SignIn= () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const onSignInClick = (email: string, password: string)=>{
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
            .then(({user})=>{
                console.log(user)
                dispatch(setUser({
                    email: user.email,
                    id: user.uid,
                    token: user.refreshToken
                }))
                navigate(RoutesList.Account)
            })
            .catch(()=> alert("Sign up, please"))
    }
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
                        type={"password"}
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
                    <Button title={"Sign in"} onClick={()=>onSignInClick(email, password)} />
                </div>
                {/* TODO кнопка validation*/}
            </div>
    );
};
export default SignIn;
