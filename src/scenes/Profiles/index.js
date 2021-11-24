
import { useParams } from 'react-router';
import React, { useState, useEffect, useContext } from "react";
import Container from '@mui/material/Container';
import './index.css';
import {AppContext} from "../../context/AppProvider";
import { CircularProgress } from "@mui/material";
import { collection, documentId, query, where, onSnapshot } from '@firebase/firestore';
import { db } from '../../services/db';
import FreelancerProfile from './components/FreelancerProfile';
import EmployerProfile from './components/EmployerProfile';
import Sidebar from '../../components/Sidebar/Sidebar';
import Stats from './components/Stats';

export const ProfileContext = React.createContext();

function Profiles() {
    
    const {userInfo, role, roleID} = useContext(AppContext);
    const [editable, setEditable] = useState(false);
    const [profile, setProfile] = useState();
    const [saveProfile, setSaveProfile] = useState(false);
    const param = useParams();
    useEffect(()=>{
        console.log(roleID, param);
        if (roleID === param.ID ){
            setProfile({...userInfo})
            setEditable(true);
        }
        else{
            let collectionRef = collection(db,param.Type);
            var q = {};
            try {
                q = query(collectionRef, where(documentId(), "==", param.ID));
            } catch(error){
                setProfile({});
            }
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                var documents = {};
                querySnapshot.forEach(doc => {
                    documents = {
                        ...doc.data(),
                    }
                })
                setProfile(documents);
            });
            return () => {
            unsubscribe();
            setEditable(false);
            }
        }
    }, [param])
    return (
        <div>
        {
            profile == undefined ? <CircularProgress/> : 
                <ProfileContext.Provider value={{
                    profile,
                    setProfile,
                    editable,
                    saveProfile,
                    setSaveProfile
                }}>
                    <Container maxWidth="lg">
                        <div className="whole-page-container">
                            <Sidebar active={4} role={role}/>
                            <div>
                            {
                                param.Type === "employer" ? <EmployerProfile/> : <FreelancerProfile/>
                            }
                            </div>
                            <Stats saveProfile={saveProfile} setSaveProfile={setSaveProfile}/>
                        </div>
                    </Container>
                </ProfileContext.Provider>
        }
        </div>
    );
}

export default Profiles
