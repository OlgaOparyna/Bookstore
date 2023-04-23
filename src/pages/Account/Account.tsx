import React from "react"
import {ArrowIcon} from "src/assets/icons";
import Title from "src/components/Title";
import Subtitle from "src/components/Subtitle";
import Input from "src/components/Input";
import Button from "src/components/Button";
import styles from "./Account.module.scss";

const Account =()=>{
    return (
        <div className={styles.container}>
            <ArrowIcon/>
            <Title title="Account"/>
            <div className={styles.inputContainer}>
                <Subtitle subtitle="profile"/>
                <Input title="Name" value={"value"} onChange={()=>{}} placeholder='Anton Markov'/>
                <Input title="Email" value={"value"} onChange={()=>{}} placeholder='a.markov@gmail.com'/>
            </div>
            <div className={styles.inputContainer}>
                <Subtitle subtitle="password"/>
                <Input title="Password" value={"value"} onChange={()=>{}} placeholder='•••••••••••••'/>
                <Input title="New password" value={"value"} onChange={()=>{}} placeholder='New password'/>
                <Input title="Confirm new password" value={"value"} onChange={()=>{}} placeholder='Confirm new password'/>
            </div>
            <div className={styles.buttons}>
                <Button title="Save changes" onClick={()=>{}}/>
                <Button title="Cancel" onClick={()=>{}}/>
            </div>
        </div>
    )
}

export default Account