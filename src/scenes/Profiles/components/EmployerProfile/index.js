import React, { useState, useEffect, useContext } from "react";
import './index.css';
import { CircularProgress } from "@mui/material";
import { ProfileContext } from "../../index";

import CustomInfo from "./components/CustomInfo";
import Info from "./components/Info";
import InfoTag from "./components/InfoTag";
export default function EmployerProfile() {
    const {profile, setProfile, saveProfile, setSaveProfile, editable} = useContext(ProfileContext);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [data, setData] = useState([]);
    const [dataType, setDataType] = useState("");
    async function LoadData (Name = "None"){
        switch(Name){
            case "domain":
                setData([...profile.domain]);
                setDataType(Name);
                break;
            case "education":
                setData([...profile.education]);
                setDataType(Name)
                break;
            default:
                break;
        }
    }
    function Handle (Name = "None"){
        setButtonPopup(true);
        LoadData(Name);
    }
    useEffect(() => {
        LoadData(dataType);
        console.log(profile);
    }, [buttonPopup])
    useEffect(()=>{

    }, [profile])
    return (
        <div>
            {profile == undefined ? (<CircularProgress/>) : 
                (<div className="central-column">
                    Đây là trang của employer
                    {profile.name}
                   <CustomInfo profile={profile} setProfile={setProfile} setSaveProfile={setSaveProfile}/> 
                    <InfoTag Name={"Domain"} Handle={()=>{Handle("domain")}} Editable={editable}>
                        {profile.domain.map((domain)=>(
                            <Info key={domain} content={domain}/>
                        ))
                        }
                    </InfoTag>
                </div>)
            }
        </div>
    )
}
