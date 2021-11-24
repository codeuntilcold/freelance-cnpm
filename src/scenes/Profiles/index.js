
import { useParams } from 'react-router';
import React, { useState, useEffect, useContext } from "react";
import Container from '@mui/material/Container';
import './index.css';
import {AppContext} from "../../context/AppProvider";
import { CircularProgress } from "@mui/material";
import useFirestore from '../../hook/useFirestore';
import { documentId } from '@firebase/firestore';

function Profiles() {
    
    const {userInfo, role, roleID} = useContext(AppContext);
    const [Editable, setEditable] = useState(false);
    const [profile, setProfile] = useState({});
    const [saveProfile, setSaveProfile] = useState(false);
    const param = useParams();
    const loadProfile = useFirestore(role,
    {
        fieldName: documentId(),
        operator: "==",
        compareValue: param.ID
    }) 
    // useEffect(() => {
    //     setProfile({...userInfo});
    // }, [userInfo])
    // Set quyền chỉnh sửa
    useEffect(()=>{
        // console.log(roleID, param.ID);
        if (roleID == param.ID ){
            setProfile({...userInfo})
            setEditable(true);
        }
        else{
            setProfile({...loadProfile});
            setEditable(false);
        }
    }, [])
    return (
        <div>
        {
            profile == {} ? <CircularProgress/> : 
            <Container maxWidth="lg">
                <div className="whole-page-container">
                    <h2>{role}</h2>
                    <h2>{roleID}</h2>
                    <h4>{profile.name}</h4>
                    {/* <Sidebar active={4} role="freelancer"/>
                    <ProfileCentral profile={profile} saveProfile={saveProfile} setSaveProfile={setSaveProfile}/>
                    <Stats saveProfile={saveProfile} setSaveProfile={setSaveProfile}/> */}
                </div>
            </Container>
        }
        </div>
    );
}

export default Profiles
