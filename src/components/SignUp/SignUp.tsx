import React, { useState } from "react";

import Input from "src/components/Input";
import Button from "src/components/Button";
import styles from "./SignUp.module.scss";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {setUser} from "src/redux/reducers/UserSlice";
import {useNavigate} from "react-router-dom";
import {RoutesList} from "src/pages/Router";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onSignUpClick = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user})=>{
          console.log(user)
          dispatch(setUser({
              email: user.email,
              id: user.uid,
              token: user.refreshToken
          }))
          navigate(RoutesList.Account)
      })
      .catch(console.error);
  };
  return (
    <div className={styles.container}>
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
        <Button
          title={"Sign up"}
          onClick={() => onSignUpClick(email, password)}
        />
      </div>
      {/* TODO кнопка validation*/}
    </div>
  );
};
export default SignUp;
