import React from "react";
import { Link } from "react-router-dom";
import "./Logo.css"

export default function Logo(){
    return (
        <div className="logo_container">
            <Link to="/" className="logo"> VIECMOI</Link>
        </div>
    )
}