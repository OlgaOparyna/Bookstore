import React, {useState} from "react";
import Subtitle from "src/components/Subtitle";
import Input from "src/components/Input";
import Button from "src/components/Button";
import styles from "./Subscribe.module.scss";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const onChangeEmail = (value: string) => {
    setEmail(value);
  };
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.title}>Subscribe to Newsletter </div>
        <div className={styles.text}>
          Be the first to know about new IT books, upcoming releases, exclusive
          offers and more.
        </div>
        <div className={styles.inputContainer}>
          <Input
            value={email}
            onChange={onChangeEmail}
            placeholder="Your email"
            inputClassName={styles.input}
          />
          <Button
            title="Subscribe"
            onClick={() => {}}
            buttonClassName={styles.button}
          />
        </div>
      </div>
    </div>
  );
};
export default Subscribe;
