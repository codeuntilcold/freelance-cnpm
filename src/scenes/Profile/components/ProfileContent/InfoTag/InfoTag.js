import React from "react";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import './InfoTag.css'
export default function InfoTag(props){
    const {Name} = props;
    return (
        <div className="InfoTag">
            <div className="Header">
            <h2>{Name}</h2>
            <EditOutlinedIcon></EditOutlinedIcon>
            </div>
        </div>
    )
}