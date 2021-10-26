import React from 'react';
import Logo from '../../../../components/Logo/Logo'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="content-wrapper" style={{backgroundColor:"var(--background-color)"}}>
                <ul className="info">
                    <li>
                        <Link to="/" style={{color:"var(--logo-color)"}}>Giới thiệu</Link>
                    </li>
                    <li>
                        <Link to="/" style={{color:"var(--logo-color)"}}>Điều khoản dịch vụ</Link>
                    </li>                    
                    <li>
                        <Link to="/" style={{color:"var(--logo-color)"}}>Chính sách quảng cáo</Link>
                    </li>
                </ul>

                <div className="copyright"><span>© 2021 Viecmoi.net</span></div>
            </div>
        </footer>
    )
};


export default Footer;