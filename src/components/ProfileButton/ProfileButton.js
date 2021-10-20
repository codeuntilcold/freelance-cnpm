import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './ProfileButton.css'
const ProfileButton = ({active}) => {
    return (
        <div className={`ProfileButton ${active && '--active'}`}>
            <AccountCircleIcon/>
            <article>
                <h1>Tên người dùng</h1>
                <h2>Thông tin ngắn</h2>
            </article>
        </div>
    )
}

export default ProfileButton
