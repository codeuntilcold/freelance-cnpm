import React from "react";
import AddAPhotoTwoToneIcon from '@mui/icons-material/AddAPhotoTwoTone';
import { useState, useEffect } from "react";
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import MiniHeader from "../../MiniHeader";
import Popup from "../../Popup/Popup";
function CustomInfo(props){
    
    const [buttonPopup, setButtonPopup] = useState(false);
    const [data, setData] = useState([]);
    const [dataType, setDataType] = useState("");
    function Handle (){
        setButtonPopup(true);
        setData(props.profile.aboutme)
        setDataType("aboutme")
    }
    useEffect(() => {
        setData(props.profile.aboutme)
        setDataType("aboutme")
        // console.log("index")
    }, [buttonPopup])
    return (
        <div className="CustomInfo">
            { buttonPopup ? (<Popup setTrigger={setButtonPopup} data={data} setData={setData} profile={props.profile} setProfile={props.setProfile} dataType={dataType} setSaveProfile={props.setSaveProfile}></Popup>): ""
            }
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
                <MiniHeader Content="Về tôi" MiniIcon={EditOutlinedIcon} className="MiniHeader" Handle={Handle}/>
                <div className="Content">
                    {props.profile["about-me"]}
                </div>

            </div>
        </div>
    );
}
export default CustomInfo;
