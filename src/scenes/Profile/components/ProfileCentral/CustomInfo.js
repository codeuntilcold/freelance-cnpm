import React from "react";
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MiniHeader from "../MiniHeader/index";
export default function CustomInfo(props){
    const {Name, Location, Content} = props; 
    return (
        <div className="CustomInfo">
            <div className="firstRow">
                <AccountCircleTwoToneIcon></AccountCircleTwoToneIcon>
                <article>
                    <h2>{Name}</h2>
                    <MiniHeader Content={Location} MiniIcon={LocationOnOutlinedIcon}/>
                </article>
            </div>
            <div className="About">
                <MiniHeader Content="Về tôi" MiniIcon={EditOutlinedIcon} className="MiniHeader"/>
                <div className="Content">
                    {Content}
                </div>

            </div>
        </div>
    );
}
