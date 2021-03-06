
import { useParams } from 'react-router';
import React, { useState, useEffect, useContext} from "react";
import Container from '@mui/material/Container';
import {AppContext} from "../../context/AppProvider";
import { CircularProgress } from "@mui/material";
import { collection, documentId, query, where, getDoc, getDocs } from '@firebase/firestore';
import { db } from '../../services/db';
// import FreelancerProfile from './components/FreelancerProfile';
import CentralInfo from './components/CentralInfo';
import Sidebar from '../../components/Sidebar/Sidebar';
import Stats from './components/Stats';
import './index.css';

export const ProfileContext = React.createContext();

function Profiles() {
    
    const {userInfo, role, roleID} = useContext(AppContext);
    const [editable, setEditable] = useState("Editable");
    const [profile, setProfile] = useState();
    const [saveProfile, setSaveProfile] = useState(false);
    const [jobs, setJobs] = useState([]);
    // const jobs =[];
    const param = useParams();
    // const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        // TODO kiểm tra param.Type
        if (param.Type === "freelancer" || param.Type === "employer"){
            if (roleID === param.ID){
                setProfile({...userInfo});
                setEditable("Editable");
            }
            else{
                async function getProfile(){
                setEditable("Uneditable");
                let collectionRef = collection(db,param.Type);
                var q = {};
                try {
                    q = query(collectionRef, where(documentId(), "==", param.ID));
                } catch(error){
                    setProfile({});
                }
                let querySnapshot = await getDocs(q);
                var documents = {};
                querySnapshot.forEach((doc) => {
                    documents = {
                            ...doc.data(),
                    }
                });
                setProfile(documents);
                }
                getProfile();
            }
        } else{
            // ! Trường hợp lỗi có nên dùng useHistory?
        }
    }, [param,userInfo, roleID])
    useEffect(()=>{
            if (profile){
                if (param.Type === "employer"){
                    var documents = profile.jobs;
                    Promise.all(documents.map(async (Ref) =>{
                            return await getDoc(Ref);
                        }))
                        .then(value=>{
                            const data = [];
                            // eslint-disable-next-line array-callback-return
                            value.map(item=>{
                            data.push( item.data());
                            })
                            // console.log("asd", data);
                            setJobs(data);
                        })

                } else{
                        async function getList() {
                        // GET APPLY_FOR
                        let applyarray = [];
                        let jid = [];
                        let q = query(
                            collection(db, "apply_for"),
                            where("freelancer-id", "==", param.ID)
                        );
                        let querySnapshot = await getDocs(q);
                        querySnapshot.forEach((doc) => {
                            applyarray.push(doc.data());
                            jid.push(doc.data()["job-id"]);
                        });
                        // apply_for: status + job-id
                    
                        // GET JOBS IN APPLY_FOR
                        let jobarray = [];
                        q = query(collection(db, "job"), where("__name__", "in", jid));
                        querySnapshot = await getDocs(q);
                        querySnapshot.forEach((doc) => jobarray.push(doc));
                        
                        // GET APPLY_FOR AND JOB INFO TOGETHER
                        let zipped = [];
                        applyarray.forEach((application) =>
                            jobarray.forEach(
                            (job) =>
                                application["job-id"] === job.id &&
                                zipped.push({ ...application, ...job.data() })
                            )
                        );
                        
                        setJobs(zipped);
                        }
                        
                        profile && getList()
                }
            }
            else{
                setJobs([]);
            }
    }, [profile, param]);
    // useEffect(()=>{
    //     console.log(editable, profile, jobs);
    // })
    return (
        <div>
        {
            (profile === undefined) ? <CircularProgress /> : 
                <ProfileContext.Provider value={{
                    profile,
                    setProfile,
                    editable,
                    saveProfile,
                    setSaveProfile,
                    param,
                    jobs
                }}>
                        <Container maxWidth="lg">
                            <div className="whole-page-container">
                                <Sidebar active={4} role={role}/>
                                <div className="central-column">
                                <CentralInfo/>
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
