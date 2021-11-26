import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './ProfileButton.css'
import { Link } from 'react-router-dom';
import auth from '../../services/auth';
import { signOut } from "firebase/auth";
import {LogoutOutlined} from "@ant-design/icons";
import LogoutIcon from '@mui/icons-material/Logout';
const handleLogout = () => {
    signOut(auth);
}

const ProfileButton = ({active, linkTo, name ="Tên người dùng"}) => {

    return (
        <Link className={`ProfileButton ${active && '--active'}`} to={linkTo}>
            <AccountCircleIcon/>
            <article>
                <h1>{name}</h1>
                <button onClick={handleLogout} className="logout-button"><LogoutOutlined/><span> Đăng xuất<span/></span></button>
            </article>
        </Link>
    )
}

export default ProfileButton
