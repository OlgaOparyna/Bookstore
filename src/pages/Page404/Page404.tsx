import React from "react"
import { useNavigate } from "react-router-dom";

import Button from "src/components/Button";
import {RoutesList} from "src/pages/Router";
import styles from "./Page404.module.scss"
const Page404 = () => {
    const navigate = useNavigate()
    const onBtnClick = ()=>{
        navigate (RoutesList.Home)
    }

    return (
        <div className={styles.container}>
            <div className={styles.error}>
                404
            </div>
            <div className={styles.text}>
                PAGE NOT FOUND
            </div>
            <div
                className={styles.btnHome}
            >
                <Button
                    title={"Back to home"}
                    onClick={onBtnClick}
                />
            </div>
        </div>
    )
}

export default Page404;