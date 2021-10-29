import React from "react";
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import TimerOutlinedIcon from '@mui/icons-material/TimerOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import './CustomInfo.css'
export default function CustomInfo(props){
    const {Name, Location, HourlyRate, Content} = props; 
    return (
        <div className="CustomInfo">
            <div className="firstRow">
                <AccountCircleTwoToneIcon></AccountCircleTwoToneIcon>
                <article>
                    <h2>{Name}</h2>
                    <div className="Location">
                    <LocationOnOutlinedIcon></LocationOnOutlinedIcon>
                    {Location}
                    </div>
                    <div className="Rate">
                    <TimerOutlinedIcon></TimerOutlinedIcon>
                    {HourlyRate} VND/hour
                    </div>
                </article>
            </div>
            <div className="About">
                <div className="Header">
                <h2>Về tôi</h2>
                <EditOutlinedIcon></EditOutlinedIcon>
                </div>
                <div className="Content">
                    {Content}
                </div>

            </div>
        </div>
    );
}
