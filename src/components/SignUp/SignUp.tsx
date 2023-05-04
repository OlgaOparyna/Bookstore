import React, {useEffect, useMemo, useState} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { setUser } from "src/redux/reducers/UserSlice";
import { RoutesList } from "src/pages/Router";
import styles from "./SignUp.module.scss";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
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
    const onBlurName = () => {
        setNameTouched(true);
    };
    const onBlurEmail = () => {
        setEmailTouched(true);
    };
    const onBlurPassword = () => {
        setPasswordTouched(true);
    };
  const onSignUpClick =  (email: string, password: string) => () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.refreshToken,
          })
        );
        navigate(RoutesList.Account);
      })
      .catch(console.error);
  };
    useEffect(() => {
        if (name.length === 0 && nameTouched) {
            setNameError("Name is required field");
        } else {
            setNameError("");
        }
    }, [name, nameTouched]);

    useEffect(() => {
        if (email.length === 0 && emailTouched) {
            setEmailError("Email is required field");
        } else {
            setEmailError("");
        }
    }, [email, emailTouched]);

    useEffect(() => {
        if (passwordTouched) {
            if (password !== confirmPassword) {
                setPasswordError("Passwords must match");
            } else if (password.length === 0 || confirmPassword.length === 0) {
                setPasswordError("Password is required field");
            } else {
                setPasswordError("");
            }
        }
    }, [confirmPassword, password, passwordTouched]);

    const isValid = useMemo(() => {
        return (
            nameError.length === 0 &&
            emailError.length === 0 &&
            passwordError.length === 0 &&
            nameTouched &&
            emailTouched &&
            passwordTouched
        );
    }, [
        nameError,
        emailError,
        passwordError,
        nameTouched,
        emailTouched,
        passwordTouched,
    ]);
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}
          >
        <Input
          title={"Name"}
          titleClassName={styles.title}
          value={name}
          onChange={onChangeName}
          placeholder={"Your name"}
          errorText={nameError}
          onBlur={onBlurName}
        />
        <Input
          title={"Email"}
          titleClassName={styles.title}
          value={email}
          onChange={onChangeEmail}
          placeholder={"Your email"}
          errorText={emailError}
          onBlur={onBlurEmail}
        />
        <Input
          title={"Password"}
          titleClassName={styles.title}
          value={password}
          onChange={onChangePassword}
          placeholder={"Your password"}
          type={"password"}
          errorText={passwordError}
          onBlur={onBlurPassword}
        />
        <Input
          title={"Confirm password"}
          titleClassName={styles.title}
          value={confirmPassword}
          onChange={onChangeConfirmPassword}
          placeholder={"Confirm password"}
          type={"password"}
          errorText={passwordError}
          onBlur={onBlurPassword}
        />
      </div>
      <div className={styles.button}>
        <Button
          title={"Sign up"}
          onClick={onSignUpClick(email, password)}
          disabled={!isValid}
        />
      </div>
    </div>
  );
};
export default SignUp;
