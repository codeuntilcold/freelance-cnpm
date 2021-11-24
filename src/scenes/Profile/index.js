
import { documentId } from "@firebase/firestore";
import React, { useState, useEffect, useContext } from "react";
import Container from '@mui/material/Container';
import Sidebar from '../../components/Sidebar/Sidebar';
import ProfileCentral from './components/ProfileCentral/index';
import Stats from './components/Stats/index';
import './index.css';
import {AppContext} from "../../context/AppProvider";
import { CircularProgress } from "@mui/material";
export default function Profile() {
    const {currentUser, userInfo, role} = useContext(AppContext);
    const [profile, setProfile] = useState({});
    useEffect(() => {
        setProfile({...userInfo});
    }, [userInfo])
    useEffect(()=>{
        console.log(profile);
    })
    const[saveProfile, setSaveProfile] = useState(false);
    return (
        <div>
        {
            profile == {} ? <CircularProgress/> : 
            <Container maxWidth="lg">
                <div className="whole-page-container">
                    <Sidebar active={4} role="freelancer"/>
                    <ProfileCentral profile={profile} saveProfile={saveProfile} setSaveProfile={setSaveProfile}/>
                    <Stats saveProfile={saveProfile} setSaveProfile={setSaveProfile}/>
                </div>
            </Container>
        }
        </div>
    );
}