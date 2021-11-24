import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css"

export default function Logo(){
    return (
        <div className="logo_container">
            <Link to="/home" className="logo">
                <img src="/android-chrome-512x512.png" alt="V" width='35px' style={{ marginBottom: '12px' }}/>
                <span>VIECMOI</span>
            </Link>
        </div>
    )
}