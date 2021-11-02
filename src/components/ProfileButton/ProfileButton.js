import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './ProfileButton.css'
import { Link } from 'react-router-dom';
const ProfileButton = ({active}) => {
    return (
        <Link className={`ProfileButton ${active && '--active'}`} to='/profile'>
            <AccountCircleIcon/>
            <article>
                <h1>Tên người dùng</h1>
                <h2>Thông tin ngắn</h2>
            </article>
        </Link>
    )
}

export default ProfileButton
