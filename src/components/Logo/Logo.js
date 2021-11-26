import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css";
import auth from "../../services/auth";
 
export default function Logo(){
    var path;
    if (auth.currentUser) {
        path = '/jobsfeed'
    }
    else {
        path = '/home'
    }

    return (
        <div className="logo_container">
            <Link to={path} className="logo">
                <img src="/android-chrome-512x512.png" alt="V" width='35px' style={{ marginBottom: '12px' }}/>
                <span>VIECMOI</span>
            </Link>
        </div>
    )
}