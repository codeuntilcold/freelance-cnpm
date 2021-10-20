import React from "react";
import "./SidebarOption.css"
// import { Link } from "react-router-dom";
export default function SidebarOption(props){
    const {text, Icon, active} = props;
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon/>
            <h2>{text}</h2>
        </div>
    )
}