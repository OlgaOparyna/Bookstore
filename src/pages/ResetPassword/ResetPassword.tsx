import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Subtitle from "src/components/Subtitle";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { RoutesList } from "src/pages/Router";

import styles from "./ResetPassword.module.scss";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const auth = getAuth();
  const onSubmit = (email: string) => () => {
    sendPasswordResetEmail(auth, email, {
      url: "http://localhost:3000/auth",
    })
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  const onNewPasswordPage = () => {
    navigate(RoutesList.NewPassword);
  };
  return (
    <div className={styles.container}>
      <Subtitle subtitle={"Reset password"} />
      <div className={styles.wrapper}>
        {isSubmitted ? (
          <div className={styles.message}>
            You will receive an email{" "}
            <span className={styles.email}>{email}</span> with a link to reset
            your password!
          </div>
        ) : null}
        <div className={styles.inputContainer}>
          <Input
            title={"Email"}
            titleClassName={styles.title}
            value={email}
            onChange={onChangeEmail}
            placeholder={"Your email"}
            disabled={isSubmitted}
          />
          <div className={styles.button}>
            {!isSubmitted ? (
              <Button title="Reset" onClick={onSubmit(email)} />
            ) : (
              <Button title="Confirm" onClick={onNewPasswordPage} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
