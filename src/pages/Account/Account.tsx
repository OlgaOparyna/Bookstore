import React, { useState } from "react";
import { ArrowIcon } from "src/assets/icons";
import Title from "src/components/Title";
import Input from "src/components/Input";
import Button from "src/components/Button";
import styles from "./Account.module.scss";
import { RoutesList } from "src/pages/Router";
import { useNavigate } from "react-router-dom";

const Account = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
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
  const onChangeNewPassword = (value: string) => {
    setNewPassword(value);
  };
  const onChangeConfirmPassword = (value: string) => {
    setConfirmPassword(value);
  };
  const onButtonCancelClick = () => {
    setName("");
    setEmail("");
    setPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };
  const navigate = useNavigate();
  const onArrowIconClick = () => {
    navigate(RoutesList.Home);
  };
  return (
    <div className={styles.container}>
      <div className={styles.arrowIcon} onClick={onArrowIconClick}>
        <ArrowIcon />
      </div>
      <Title title="Account" />
      <div className={styles.infoContainer}>
        <div>
          <div className={styles.inputTitle}>profile</div>
          <div className={styles.inputContainer}>
            <Input
              title="Name"
              value={name}
              onChange={onChangeName}
              placeholder="Anton Markov"
              inputClassName={styles.input}
            />
            <Input
              title="Email"
              value={email}
              onChange={onChangeEmail}
              placeholder="a.markov@gmail.com"
              inputClassName={styles.input}
            />
          </div>
        </div>
        <div>
          <div className={styles.inputTitle}>password</div>
          <div className={styles.inputContainer}>
            <Input
              title="New password"
              value={newPassword}
              onChange={onChangeNewPassword}
              placeholder="New password"
              inputClassName={styles.input}
            />
            <Input
              title="Confirm new password"
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
              placeholder="Confirm new password"
              inputClassName={styles.input}
            />
            <Input
              title="Password"
              value={password}
              onChange={onChangePassword}
              placeholder="•••••••••••••"
              inputClassName={styles.input}
            />
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          title="Save changes"
          onClick={() => {}}
          buttonClassName={styles.button}
        />
        <Button
          title="Cancel"
          onClick={onButtonCancelClick}
          buttonClassName={styles.buttonWhite}
        />
      </div>
    </div>
  );
};

export default Account;
