import React from "react";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MiniHeader from "../../MiniHeader";
function CustomInfo(props){
    return (
        <div className="CustomInfo">
            <div className="firstRow">
                <AccountCircleTwoToneIcon></AccountCircleTwoToneIcon>
                <article>
                    <h2>{props.profile.name}</h2>
                    <div>
                    <LocationOnOutlinedIcon/>
                    <h3>{props.profile.address[0]}</h3>
                    </div>
                </article>
            </div>
            <div className="About">
                <MiniHeader Content={props.content} MiniIcon={EditOutlinedIcon} className="MiniHeader" Handle={props.Handle} Editable={props.Editable}/>
                <div className="Content">
                    {props.profile["about-me"]}
                </div>

            </div>
        </div>
    );
}
export default CustomInfo;
