
import { useParams } from 'react-router';
import React, { useState, useEffect, useContext, useCallback, useMemo } from "react";
import Container from '@mui/material/Container';
import {AppContext} from "../../context/AppProvider";
import { CircularProgress } from "@mui/material";
import { collection, documentId, query, where, onSnapshot, getDoc, getDocs } from '@firebase/firestore';
import { db } from '../../services/db';
// import FreelancerProfile from './components/FreelancerProfile';
import CentralInfo from './components/CentralInfo';
import Sidebar from '../../components/Sidebar/Sidebar';
import Stats from './components/Stats';
import { Link } from 'react-router-dom';
import './index.css';

export const ProfileContext = React.createContext();

function Profiles() {
    
    const {userInfo, role, roleID} = useContext(AppContext);
    const [editable, setEditable] = useState("Editable");
    const [profile, setProfile] = useState();
    const [saveProfile, setSaveProfile] = useState(false);
    const [jobs, setJobs] = useState(Array());
    // const jobs =[];
    const param = useParams();
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        if (roleID === param.ID){
            setProfile({...userInfo});
            setEditable("Editable");
        }
        else{
            
        }
    }, [param,userInfo])
    useEffect(()=>{
            if (profile){
            const q = query(collection(db, param.Type),where(documentId(), "==",param.ID));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
                var documents = [];
                querySnapshot.forEach(doc => {
                    documents = [
                        ...doc.data().jobs,
                    ]
                })
               
                Promise.all(documents.map(async (Ref) =>{
                    return await getDoc(Ref);
                }))
                .then(value=>{
                    const data = [];
                    value.map(item=>{
                       data.push( item.data());
                    })
                    console.log("asd", data);
                    setJobs(data);
                })
               
                
            });
            return () => {
                unsubscribe();
            }
            // jobsRefs.forEach(async (Ref)=>{
            //     // // console.log("ref", Ref);
            //     let newJob = await getDoc(Ref);
            //     // console.log(newJob.data());
            //     const data = await newJob.data();
            //     console.log("data", data);
            //     tempjobs.push( data);
                // let array = [];

                // const querySnapshot = await getDocs(q);
                // querySnapshot.forEach((doc) => array.push(doc));

                // setJobs(array);
            // })
            // return tempjobs;
            // setJobs([...jobs, data]);
                // console.log(jobs);
                // console.log("out",tempjobs);
                // setJobs(tempjobs);
                // console.log("Tempjobs",tempjobs);
                // setIsLoading(false);
            }
            else{
                setJobs([]);
            }
    }, [profile]);
    useEffect(()=>{
        console.log(editable, profile, jobs);
    })
    // console.log("Rerender");
    // // const fetchJobs = useMemo(()=>{
    // //     setIsLoading(true);
    // //     if (param.Type === "employer"){
    // //         setIsLoading(true);
    // //         // console.log("employer")
    // //         if (profile){
    // //             // console.log("fetch", profile, isLoading)
    // //             let tempjobs = [];
    // //             let jobsRefs = profile.jobs;
    // //             // console.log("Refs",jobsRefs);
    // //             jobsRefs.forEach(async (Ref)=>{
    // //                 // console.log("ref", Ref);
    // //                 let newJob = await getDoc(Ref);
    // //                 // console.log(newJob.data());
    // //                 tempjobs.push( await newJob.data());
    // //             })
    // //             return tempjobs;
    // //             // setJobs(tempjobs);
    // //             // console.log("Tempjobs",tempjobs);
    // //             setIsLoading(false);
    // //         }
    // //     } else{
    // //         // setIsLoading(true);
    // //         // if (profile){
    // //         //     let temp = [];
    // //         //     const querySnapshotApply = await getDocs(collection(db, "apply_for"));
    // //         //         querySnapshotApply.forEach((doc) => {
    // //         //         if (doc[freelancer-id] == param.ID){
    // //         //             let data = {"_id":doc.id,...doc.data()}
    // //         //             temp = [...temp, data]
    // //         //         }
    // //         //     });
    // //         // }
    // //     }
    // // }, [profile])
    // // const fetchData = useMemo(()=>{
    // //     if (roleID === param.ID ){
    // //         setEditable("Editable");
    // //         setProfile({...userInfo})
    // //     }
    // //     else{
    // //         setEditable("Uneditable");
    // //         let collectionRef = collection(db,param.Type);
    // //         var q = {};
    // //         try {
    // //             q = query(collectionRef, where(documentId(), "==", param.ID));
    // //         } catch(error){
    // //             setProfile({});
    // //         }
    // //         const unsubscribe = onSnapshot(q, (querySnapshot) => {
    // //             var documents = {};
    // //             querySnapshot.forEach(doc => {
    // //                 documents = {
    // //                     ...doc.data(),
    // //                 }
    // //             })
    // //             setProfile(documents);
    // //         });
    // //         return () => {
    // //             unsubscribe();
    // //         }
    // //     }
    // // }, [roleID, userInfo, param])
    // // useEffect(() => {
    // //     fetchJobs();
    // // }, [fetchJobs])
    // // useEffect(()=>{
    // //     fetchData();
    // // }, [fetchData])
    // useEffect(()=>{
    //     console.log("fetch Profile");
    //     if (roleID === param.ID ){
    //         setEditable("Editable");
    //         setProfile({...userInfo})
    //     }
    //     else{
    //         setEditable("Uneditable");
    //         let collectionRef = collection(db,param.Type);
    //         var q = {};
    //         try {
    //             q = query(collectionRef, where(documentId(), "==", param.ID));
    //         } catch(error){
    //             setProfile({});
    //         }
    //         const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //             var documents = {};
    //             querySnapshot.forEach(doc => {
    //                 documents = {
    //                     ...doc.data(),
    //                 }
    //             })
    //             setProfile(documents);
    //         });
    //         return () => {
    //             unsubscribe();
    //         }
    //     }
    // }, [param, roleID])
    // useEffect(()=>{
    //     console.log("fetch Jobs");
    //     if (param.Type === "employer"){
    //         // console.log("employer")
    //         if (profile){
    //             setIsLoading(true);
    //             console.log("WTF", profile, isLoading)
    //             let tempjobs = [];
    //             let jobsRefs = profile.jobs;
    //             // console.log("Refs",jobsRefs);
    //             jobsRefs.forEach(async (Ref)=>{
    //                 // console.log("ref", Ref);
    //                 let newJob = await getDoc(Ref);
    //                 // console.log(newJob.data());
    //                 tempjobs.push( await newJob.data());
    //             })
    //             // return tempjobs;
    //             setJobs(tempjobs);
    //             // console.log("Tempjobs",tempjobs);
    //             // setIsLoading(false);
    //         } 
    //     } else{
    //         // setIsLoading(true);
    //         // if (profile){
    //         //     let temp = [];
    //         //     const querySnapshotApply = await getDocs(collection(db, "apply_for"));
    //         //         querySnapshotApply.forEach((doc) => {
    //         //         if (doc[freelancer-id] == param.ID){
    //         //             let data = {"_id":doc.id,...doc.data()}
    //         //             temp = [...temp, data]
    //         //         }
    //         //     });
    //         // }
    //     }
    // }, [profile])
    // useEffect(()=>{
    //     setIsLoading(false);
    //     console.log("jobs", jobs.length);
    // }, [jobs.length])
    // useEffect(()=>{
    //     console.log("load",isLoading);
    // }, [isLoading])
    // // useEffect(()=>{
    // // }, [profile, editable, jobs])
    // // useEffect(()=>{
    // //     console.log("ở ngoài",jobs);
    // //     console.log("profile", profile);
    // // })
    return (
        <div>
        {
            (jobs.length <= 1) ? <CircularProgress/> : 
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
                                <Link to="/profiles/freelancer/fr1">Freelancer 1</Link>
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
