import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";

function Nav() {
    const location = useLocation();
    const navigate = useNavigate();
    const auth = window.localStorage.getItem("isAuth");

    const nav = [
        {id: 1, title: "Home", path: "/"},
        {id: 2, title: "News", path: "/news"},
        {id: 3, title: "Profile", path: "/profile"}
    ];

    const exit = () => {
        window.localStorage.clear();
        navigate("/");
    };

    return (
        <nav className="shadow">
            <div className="container d-flex align-items-center pt-3 pb-3">
                {
                    nav.map((n) =>
                        <Link key={n.id}
                              className={n.path === location.pathname ?
                                  "link-primary text-decoration-none border-bottom border-3 border-primary me-3" :
                                  "link-dark text-decoration-none me-3"
                              }
                              to={n.path}>{n.title}
                        </Link>
                    )
                }
                {
                    auth && <button onClick={() => exit()}
                        className="btn btn-danger ms-auto">Exit</button>
                }
            </div>
        </nav>
    );
}

export default Nav;