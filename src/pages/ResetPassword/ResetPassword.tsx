import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Subtitle from "src/components/Subtitle";
import Input from "src/components/Input";
import Button from "src/components/Button";
import { RoutesList } from "src/pages/Router";

import styles from "./ResetPassword.module.scss";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  const onSubmit = () => {
    if (isSubmitted) {
      navigate(RoutesList.Home);
    } else {
      setSubmitted(true);
    }
  };
  return (
    <div className={styles.container}>
      <Subtitle subtitle={"Reset password"} />
      <div className={styles.wrapper}>
        {isSubmitted ? (
          <div className={styles.message}>
            You will receive an email <span className={styles.email}>{email}</span> with a link to reset your
            password!
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
            <Button title={"Reset"} onClick={onSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResetPassword;
