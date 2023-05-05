import React, { useState } from "react";
import {useNavigate} from "react-router-dom";
import {getAuth, updatePassword} from "firebase/auth";
import Subtitle from "src/components/Subtitle";
import Input from "src/components/Input";
import Button from "src/components/Button";
import {RoutesList} from "src/pages/Router";
import styles from "./NewPassword.module.scss";

const NewPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const onChangePassword = (value: string) => {
    setPassword(value);
  };
  const onChangeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };
  const onSubmit = () => {
    //   (newPassword: string) =>   {
    // const auth = getAuth();
    // const user = auth.currentUser;
    // user &&
    // updatePassword ( user, newPassword)
    //     .then(() => {
    //     })
    //     .catch((error) => {
    //       console.error(error.message);
    //     });
    navigate(RoutesList.RegistrationForm)
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
            type={"password"}
          />
          <Input
            title={"Confirm password"}
            titleClassName={styles.title}
            value={confirmPassword}
            onChange={onChangeConfirmPassword}
            placeholder={"Confirm your password"}
            type={"password"}
          />
        </div>
        <div className={styles.button}>
          <Button title={"Set password"} onClick={onSubmit} />
        </div>
      </div>
    </div>
  );
};
export default NewPassword;
