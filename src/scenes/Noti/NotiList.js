import NotiItem from "./NotiItem"
import Card from '@mui/material/Card'
import JCard from "../../components/JCard";
import Chip from '@mui/material/Chip';
import { useState } from "react"

function NotiList() {

    const content = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quis?'


    const [ allRead, setAllRead ] = useState(false)

    const markAll = () => {
        alert('Mark all')
        setAllRead(true)
    }

    return (
        <div className="central-collumn">

            <div className="central-page-header noti-header">
                <h1>Thông báo</h1>
                <Chip 
                    label='Đánh dấu tất cả là đã đọc'
                    onClick={markAll}
                />
            </div>

            <NotiItem content={content} all={allRead}/>
            <NotiItem content={content} all={allRead}/>
            <NotiItem content={content} all={allRead}/>
            <NotiItem content={content} all={allRead}/>
            <NotiItem content={content} all={allRead}/>
            <NotiItem content={content} all={allRead}/>
            <NotiItem content={content} all={allRead}/>
            <NotiItem content={content} all={allRead}/>
            <NotiItem content={content} all={allRead}/>
            <NotiItem content={content} all={allRead}/>

            
        </div>
    )
}

export default NotiList
