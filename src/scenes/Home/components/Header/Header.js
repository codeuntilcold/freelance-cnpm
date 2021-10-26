import React from 'react';
import Logo from '../../../../components/Logo/Logo'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <div className="content-wrapper">
                <Logo/>

                <ul className="sign">
                    <li>
                        <Link to="/Login" style={{color:"var(--logo-color)"}}>Đăng nhập</Link>
                    </li>
                    
                    <li>
                        <Link to="/Register" style={{color:"black"}}>Đăng kí</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
};


export default Header;