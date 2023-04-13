import React, { useState } from "react";

import Subtitle from "src/components/Subtitle";
import Input from "src/components/Input";
import Button from "src/components/Button";

import styles from "./NewPassword.module.scss";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const onChangeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };
  return (
    <div className={styles.container}>
      <Subtitle subtitle={"New password"} />
      <div className={styles.wrapper}>
        <div className={styles.inputContainer}>
          <Input
            title={"Password"}
            titleClassName={styles.title}
            value={password}
            onChange={onChangePassword}
            placeholder={"Your password"}
          />
          <Input
            title={"Confirm password"}
            titleClassName={styles.title}
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            placeholder={"Confirm your password"}
          />
        </div>
        <div className={styles.button}>
          <Button title={"Set password"} onClick={() => {}} />
        </div>
        {/* TODO кнопка */}
      </div>
    </div>
  );
};
export default NewPassword;
