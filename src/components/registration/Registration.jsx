import { useState } from "react"
import classes from "./registration.module.css"

export default function Registration() {
    const [firstName, setFirstName] = useState("")
    const [surName, setSurName] = useState("")
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [conPassword, setConPassword] = useState("")
    
    function handleSubmit() {
        if (password !== conPassword) {
            alert("Passwords are not same");
            return
        }

        const body = {
            first_name: firstName, 
            last_name: surName, 
            username: userName, 
            email: email, 
            password: password
        }

        fetch('http://192.168.1.210:9090/registration',{
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json()).then(data => localStorage.setItem("token", data.token))
    }

    
    return (
        <div className={classes["common-container"]}>
            <div className={classes["form-container"]}>
                <div className={classes["line-container"]}>
                    <h1>Qeydiyyat</h1>
                    <div className={classes.line}></div>
                </div>
                <form>
                    <div className={classes.container}>
                        <div className={classes["input-container"]}>
                            <label htmlFor="name">Ad</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Adınızı daxil edin"
                                value={firstName}
                                onChange={(e) => {setFirstName(e.target.value)}}
                            />
                        </div>   
                        
                        <div className={classes["input-container"]}>
                            <label htmlFor="surname">Soyad</label>
                            <input 
                                type="text" 
                                id="surname" 
                                placeholder="Soyadınızı daxil edin"
                                value={surName}
                                onChange={(e) => {setSurName(e.target.value)}}
                            />
                        </div>   
                        
                        <div className={classes["input-container"]}>
                            <label htmlFor="email">E-poçt</label>
                            <input 
                                type="text" 
                                id="email" 
                                placeholder="E-poçt ünvanınızı daxil edin"
                                value={email}
                                onChange={(e) => {setEmail(e.target.value)}}
                            />
                        </div>   
                        
                        <div className={classes["input-container"]}>
                            <label htmlFor="username">İstifadəçi adı</label>
                            <input 
                                type="text" 
                                id="username" 
                                placeholder="İstifadəçi adınızı daxil edin"
                                value={userName}
                                onChange={(e) => {setUserName(e.target.value)}}
                            />
                        </div>   
                        
                        <div className={classes["input-container"]}>
                            <label htmlFor="password">Şifrə</label>
                            <input 
                                type="text" 
                                id="password" 
                                placeholder="Şifrənizi daxil edin"
                                value={password}
                                onChange={(e) => {setPassword(e.target.value)}}
                            />
                        </div>
                        
                        <div className={classes["input-container"]}>
                            <label htmlFor="conpassword">Şifrəni təsdiqlə</label>
                            <input 
                                type="text" 
                                id="conpassword" 
                                placeholder="Şifrənizi yenidən daxil edin"
                                value={conPassword}
                                onChange={(e) => {setConPassword(e.target.value)}}
                            />
                        </div>
                        
                        <div className={classes["gender-input-container"]}>
                            <div className={classes["gender-input"]}>
                                <input type="radio" id="female" name="gender" value="Qadın"/>
                                <label htmlFor="female">Qadın</label>
                            </div>
                            <div className={classes["gender-input"]}>
                                <input type="radio" id="male" name="gender" value="Kişi"/>
                                <label htmlFor="male">Kişi</label>
                            </div>
                        </div>

                        <div>
                            <button type="button" onClick={handleSubmit}>Qeydiyyatdan keç</button>
                        </div>  
                    </div>
                </form>
            </div>
        </div>
    )
}