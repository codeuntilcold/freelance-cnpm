import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './ProfileButton.css'
import { Link } from 'react-router-dom';
import auth from '../../services/auth';
import { signOut } from "firebase/auth";


const handleLogout = () => {
    signOut(auth);
}

const ProfileButton = ({active}) => {

    return (
        <Link className={`ProfileButton ${active && '--active'}`} to='/profile'>
            <AccountCircleIcon/>
            <article>
                <h1>Tên người dùng</h1>
                <h2>Thông tin ngắn</h2>
                <button onClick={handleLogout}>Đăng xuất</button>
            </article>
        </Link>
    )
}

export default ProfileButton
