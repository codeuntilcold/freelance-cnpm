import React from "react";
import "./SidebarOption.css"
// import { Link } from "react-router-dom";
export default function SidebarOption(props){
    const {text, Icon, active} = props;
    console.log(active);
    return (
        <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
            <Icon/>
            <h2 className={`${active && 'sidebarOption--active'}`}>{text}</h2>
        </div>
    )
}