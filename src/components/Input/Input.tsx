import React, { FC, ChangeEvent, KeyboardEvent } from "react";
import classNames from "classnames";
import styles from "./Input.module.scss";

type InputProps = {
    title?: string;
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    type?: string;
    disabled?: boolean;
    errorText?: string;
    inputClassName?: string;
    onBlur?: ()=> void,
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
};
const Input: FC<InputProps> = ({
                                   title,
                                   value,
                                   onChange,
                                   type,
                                   placeholder,
                                   disabled,
                                   errorText,
                                   inputClassName,
                                   onKeyDown,
                                   onBlur,
                               }) => {
    const onChangeText = (e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
    };
    return (
        <div>
            {title && <label className={styles.title}>{title}</label>}
            <input
                value={value}
                className={classNames(styles.input, inputClassName, {
                    [styles.disabledInput]: disabled,
                    [styles.errorInput]: errorText,
                })}
                placeholder={placeholder}
                onKeyDown={onKeyDown}
                onChange={onChangeText}
                disabled={disabled}
                type={type}
                onBlur={onBlur}
            />
            {errorText && <div className={styles.errorText}>{errorText}</div>}
        </div>
    );
};

export default Input;
