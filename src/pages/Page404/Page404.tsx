import React from "react"

//import { useNavigate } from "react-router-dom";
import styles from "./Page404.module.scss"
import Button from "../../components/Button";
const Page404 = () => {
    // const navigate = useNavigate()
    // const onBtnClick = ()=>{
    //     navigate (`/`)
    // }

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
                    onClick={()=>{}}
                />
            </div>
        </div>
    )
}

export default Page404;