import React from "react";
import './Sidebar.css';
import Logo from "../Logo/Logo";
import SidebarOption from "./SidebarOption/SidebarOption";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ProfileButton from "../ProfileButton/ProfileButton";
import { Link } from "react-router-dom";

export default function Sidebar(props){
    const {role, active} = props;
    const active_a = [0,0,0,0];
    active_a[active] = 1;
    if (role ==="freelancer"){
    return(
        <div className="sidebar">
        <Logo className="Viecmoi-logo"></Logo>
        <SidebarOption active={active_a[0]} Icon={BusinessCenterIcon} text="Tìm việc" linkTo="/jobsfeed"></SidebarOption>
        <SidebarOption active={active_a[1]} Icon={FormatListBulletedIcon} text="Việc của tôi" linkTo="/myjobs"></SidebarOption>
        {/* Tạm ẩn phần tin nhắn */}
        {/* <SidebarOption active={active_a[2]} Icon={ChatIcon} text="Tin nhắn"></SidebarOption> */}
        <SidebarOption active={active_a[3]} Icon={NotificationsIcon} text="Thông báo" linkTo="/notification"></SidebarOption>
        <div className="padding"></div>
        <ProfileButton active={active_a[4]} linkTo="/profile"></ProfileButton>
        </div>
    )
    }
    else if (role === "employer"){
        return(
        <div className="sidebar">
        <Logo className="Viecmoi-logo"></Logo>
        <SidebarOption active={active_a[0]} Icon={BusinessCenterIcon} text="Tìm kiếm" linkTo="/jobsfeed"></SidebarOption>
        <SidebarOption active={active_a[1]} Icon={FormatListBulletedIcon} text="Quản lý việc" linkTo="job-management"></SidebarOption>
        {/* Tạm ẩn */}
        {/* <SidebarOption active={active_a[2]} Icon={ChatIcon} text="Tin nhắn"></SidebarOption> */}
        <SidebarOption active={active_a[3]} Icon={NotificationsIcon} text="Thông báo"></SidebarOption>
        <div className="padding"></div>
        <ProfileButton active={active_a[4]}></ProfileButton>
        </div>
    )
    }
    else {
        console.log("please specify the role of the user when use sidebar")
        return <div>Please specify the role of the user</div>
    }

}