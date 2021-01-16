import React,{useState} from "react";
import {NavLink} from "react-router-dom";
import './Header.css';
import {PATH} from "./Routes";

function Header() {
    const [isActive, setActive] = useState(false);
    const openMenu=()=>{
        setActive(!isActive);
    }
    return (
        <div>
            <section className={isActive?"menu" : "is-visible" + " " + "menu"}>
                <div className={"menu-box"}><NavLink to="/pre-junior" className={"menu-logo"} ></NavLink>
                    <div className={"menu-nav"}>
                        <NavLink className={"menu-nav-item"} to={PATH.PRE_JUNIOR}>pre-junior</NavLink>
                        <NavLink to={PATH.JUNIOR} className={"menu-nav-item"}>junior</NavLink>
                        <NavLink to={PATH.JUNIOR_PLUS} className={"menu-nav-item"}>junior-plus</NavLink>
                    </div>

                </div>
                <div className={"menu-line"}></div>
            </section>
            <section className={"content"}>
                <div className={"content-box"}>
                    <button onClick={openMenu} className={"content-btn"}>menu</button>
                </div>
            </section>
        </div>
    );
}

export default Header;
