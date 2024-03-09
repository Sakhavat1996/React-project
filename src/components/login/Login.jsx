import classes from "./login.module.css"

export default function Login() {
    return (
        <div className={classes.login}>
            <div className={classes["common-container"]}>
                <div className={classes["line-container"]}>
                            <h1>Daxil olun</h1>
                            <div className={classes.line}></div>
                </div>
                <form>
                    <div className={classes["input-container"]}>
                        <input type="text" id="email" placeholder="E-poçt ünvanınızı daxil edin"/>
                        <input type="text" id="email" placeholder="Şifrənizi daxil edin"/>
                    </div>
                    <div className={classes["btn-container"]}>
                        <button type="button">Daxil ol</button>
                    </div>
                </form>
            </div>
        </div>
    )
}