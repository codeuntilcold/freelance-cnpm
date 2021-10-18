import React from "react";
import './Sidebar.css';
import Logo from "../Logo/Logo";
import SidebarOption from "./SidebarOption/SidebarOption";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';



export default function Sidebar(){
    return(
        <div className="sidebar">
        <Logo></Logo>
        <SidebarOption Icon={BusinessCenterIcon}text="Tìm việc"></SidebarOption>
        <SidebarOption Icon={FormatListBulletedIcon}text="Việc của tôi"></SidebarOption>
        <SidebarOption Icon={ChatIcon} text="Tin nhắn"></SidebarOption>
        <SidebarOption Icon={NotificationsIcon} text="Thông báo"></SidebarOption>

        </div>
    )


}