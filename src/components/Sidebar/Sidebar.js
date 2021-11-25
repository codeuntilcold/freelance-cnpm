import React from "react";
import './Sidebar.css';
import Logo from "../Logo/Logo";
import SidebarOption from "./SidebarOption/SidebarOption";
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
// import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ProfileButton from "../ProfileButton/ProfileButton";
import {AppContext} from "../../context/AppProvider";
import { useContext } from "react";
export default function Sidebar(props){
    const {role, roleID, userInfo} = useContext(AppContext);
    const { active} = props;
    const active_a = [0,0,0,0];
    const profilesLink = "/profiles/" + role + "/" + roleID; 
    active_a[active] = 1;
    const SidebarOptions = () =>{
            if (role === "freelancer"){
            return(
                <div className='sidebar-options-list'>
                    {
                        freelancerSidebar.map(option=>{
                        return <SidebarOption key={option.text} active={option.active} Icon={option.Icon} text={option.text} linkTo={option.linkTo}/>
                        })
                    }
                </div>
            );
            }
            else if (role==="employer") {
                return (
                    <div className='sidebar-options-list'>                
                {employerSidebar.map(option=>{
                return <SidebarOption key={option.text} active={option.active} Icon={option.Icon} text={option.text} linkTo={option.linkTo}/>
                })
                }
                </div>)
            }
            else {
                console.log("No specified role");
                return <h1>Please specify role of Sidebar</h1>
            }
    }
    const freelancerSidebar = [
        {
            active: active_a[0],
            Icon: BusinessCenterIcon,
            text: "Tìm việc",
            linkTo:"/jobsfeed"
        },
        {
            active: active_a[1],
            Icon: FormatListBulletedIcon,
            text: "Việc của tôi",
            linkTo:"/myjobs"    
        },
        // {
        //     active: active_a[2],
        //     Icon: ChatIcon,
        //     text: "Tin nhắn",
        //     linkTo:"/message"    
        // },
        {
            active: active_a[3],
            Icon: NotificationsIcon,
            text: "Thông báo",
            linkTo:"/notification"        
        }
    ]
    const employerSidebar= [
                {
            active: active_a[0],
            Icon: BusinessCenterIcon,
            text: "Tìm kiếm",
            linkTo:"/jobsfeed"
        },
        {
            active: active_a[1],
            Icon: FormatListBulletedIcon,
            text: "Quản lý việc",
            linkTo:"/job-management"    
        },
        // {
        //     active: active_a[2],
        //     Icon: ChatIcon,
        //     text: "Tin nhắn",
        //     linkTo:"/message"    
        // },
        // {
        //     active: active_a[3],
        //     Icon: NotificationsIcon,
        //     text: "Thông báo",
        //     linkTo:"/notification"        
        // }
    ];
    return(
        <div className="sidebar">
        <div>
        <Logo className="Viecmoi-logo"></Logo>
        <SidebarOptions/>
        </div>
        <ProfileButton active={active_a[4]} linkTo="/profile/"></ProfileButton>
        <ProfileButton active={active_a[4]} linkTo={profilesLink} name={userInfo.name}></ProfileButton>
        </div>
    )

}