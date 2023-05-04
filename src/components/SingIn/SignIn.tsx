import React, { useEffect, useMemo, useState } from "react";

import Input from "src/components/Input";
import Button from "src/components/Button";
import styles from "./SignIn.module.scss";
import { useDispatch } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { setUser } from "src/redux/reducers/UserSlice";
import { RoutesList } from "src/pages/Router";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSignInClick = (email: string, password: string) => () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate(RoutesList.Home);
      })
      .catch(console.error);
  };
  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const onBlurEmail = () => {
    setEmailTouched(true);
  };
  const onBlurPassword = () => {
    setPasswordTouched(true);
  };
  useEffect(() => {
    if (email.length === 0 && emailTouched) {
      setEmailError("Email is required field");
    } else {
      setEmailError("");
    }
  }, [email, emailTouched]);

  useEffect(() => {
    if (passwordTouched) {
      if (password.length === 0) {
        setPasswordError("Password is required field");
      } else {
        setPasswordError("");
      }
    }
  }, [password, passwordTouched]);

  const isValid = useMemo(() => {
    return (
      emailError.length === 0 &&
      passwordError.length === 0 &&
      emailTouched &&
      passwordTouched
    );
  }, [emailError, passwordError, emailTouched, passwordTouched]);
  const onForgotPasswordClick = () => {
    navigate(RoutesList.ResetPassword);
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
          errorText={emailError}
          onBlur={onBlurEmail}
        />
        <Input
          title="Password"
          titleClassName={styles.title}
          value={password}
          type={"password"}
          onChange={onChangePassword}
          placeholder="Your password"
          errorText={passwordError}
          onBlur={onBlurPassword}
        />
      </div>
      <div className={styles.forgotPassword} onClick={onForgotPasswordClick}>
        Forgot password?
      </div>
      <div className={styles.button}>
        <Button
          title={"Sign in"}
          onClick={onSignInClick(email, password)}
          disabled={!isValid}
        />
      </div>
    </div>
  );
};
export default SignIn;
