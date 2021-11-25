import { useState, useEffect, useContext } from "react";
import { Container } from '@mui/material'
import { useParams } from 'react-router';
import { db } from "../../services/db";
import { doc, getDoc, getDocs, collection } from "firebase/firestore";
import { AppContext } from "../../context/AppProvider";

import './index.css';
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from './components/Feed/index'
import Stats from './components/Stats/index'

export default function Jobdetails() {

    const param = useParams();

    const {currentUser} = useContext(AppContext);
    // console.log(currentUser)
    var role = currentUser?.role;
    var id = currentUser?.roleID

    const [ job, setJob ] = useState([]);
    const [ emp, setEmp ] = useState([]);
    const [ applyList, setapplyForList ] = useState([]);
    const [ render, setRender ] = useState(true);

    useEffect(() =>{   
        const id = param.jobID

        // Read data from Firebase
        var fetchData = async() => {
            // Read job's data
            const jobRef = doc(db, 'job', id);
            const jobSnap = await getDoc(jobRef);
            var temp = jobSnap.data();
            temp.deadline = temp.deadline.toDate();
            setJob(temp);

            // Read employer's data from that job
            let empl = temp['employer-id']
            const empRef = doc(db, 'employer', empl);
            const empSnap = await getDoc(empRef);
            temp = empSnap.data();
            temp.createdAt = temp.createdAt.toDate();
            setEmp(temp);

            // Read apply_for table
            temp = []
            const querySnapshotApply = await getDocs(collection(db, "apply_for"));
            querySnapshotApply.forEach((doc) => {
                let data = {"_id":doc.id,...doc.data()}
                temp = [...temp, data]
            });
            setapplyForList(temp);
        }
        fetchData();

        // Dũng: Disable warning
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[render]);

    return (
        <Container maxWidth='lg'>
            <div className='whole-page-container'>
                <Sidebar role={role} />

                <Feed content={job} employer={emp} applyList={applyList} setRender={setRender} role={role} id={id} />

                <Stats content={emp} job={job} />
            </div>
        </Container>
    )
}