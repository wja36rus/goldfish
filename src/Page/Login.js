import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

function Login() {
    const [isAuth, setAuth] = useState(false);
    const [authError, setAuthError] = useState(false);
    const [username, setUsername] = useState(false);
    const [password, setPassword] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        isAuth && navigate("/profile");
    }, [isAuth]);

    const auth = () => {
        if (!username || !password) {
            setAuth(false);
            window.localStorage.clear();
            setAuthError(true);
        } else if (username !== "Admin" && password !== "12345") {
            setAuth(false);
            window.localStorage.clear();
            setAuthError(true);
        } else if (username === "Admin" && password === "12345") {
            setAuthError(false);
            setAuth(true);
            window.localStorage.setItem("isAuth", "true");
        }
    };

    const setAuthData = (e, type) => {
        const data = e.target.value;
        if (type === "login") {
            setUsername(data);
        } else {
            setPassword(data);
        }
    };

    return (
        <React.Fragment>
            <main>
                <div className="position-fixed w-100 h-100 d-flex align-items-center">
                    <div className="ms-auto me-auto text-center">
                        <h1>Auth</h1>
                        <div className="d-grid" style={{width: "250px"}}>
                            <input className="form-control mb-2"
                                   onChange={(e) => setAuthData(e, "login")}
                                   type="text" placeholder="login"/>
                            <input className="form-control mb-2"
                                   onChange={(e) => setAuthData(e, "password")}
                                   type="password" placeholder="password"/>
                            <button onClick={() => auth()}
                                    className={!username || !password ?
                                        "btn btn-primary disabled" :
                                        "btn btn-primary"
                                    }>Auth
                            </button>

                            <small className="pt-3 text-danger fw-bold" style={{height: "5rem"}}>
                                {authError && "Имя пользователя или пароль введены не верно"}
                            </small>

                        </div>
                    </div>
                </div>
            </main>
        </React.Fragment>
    );
}

export default Login;