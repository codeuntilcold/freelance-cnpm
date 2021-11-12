import React from "react";
import "./SidebarOption.css"
import { Link } from "react-router-dom";
// import { LinkTwoTone, ViewArray } from "@mui/icons-material";
// import { Link } from "react-router-dom";
export default function SidebarOption(props){
    const {text, Icon, active} = props;
    var linkTo;
    if (props.linkTo === undefined) linkTo='/';
    else linkTo = props.linkTo;
    // console.log(active);
    return (
        <Link className={`sidebarOption ${active && 'sidebarOption--active'}`} to={linkTo}>
            <Icon/>
            <h2 className={`${active && 'sidebarOption--active'}`}>{text}</h2>
        </Link>
    )
}