import { Link } from "react-router-dom";
import React from "react";
import './Nav.css'

const Nav = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="#Home"><h4>시장가장</h4></a></li>
                <li><a href="#Home">시장 찾기</a></li>
                <li><a href="#Home">공지사항</a></li>
            </ul>
        </nav>
    );
};

export default Nav;