import { useState, useEffect } from "react";
import { Container } from '@mui/material'
import './index.css';
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from './components/Feed/index'
import Stats from './components/Stats/index'

import { useParams } from 'react-router';
import { db } from "../../services/db";
import { doc, getDoc } from "firebase/firestore";

function ToText({ text, content }) {
    return (
        <span>
            {text}{content}
        </span>
    )
}  

export default function Jobdetails() {
    const param = useParams();
    // param.jobID is j1, j2, j3...

    const [jobs, setJob] = useState([]);
    const [render, setRender] = useState(true);

    useEffect(() =>{   
        const id = param.jobID

        // get data   
        var fetchData = async() => {
            const docRef = doc(db, "job", "j1");
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
            var temp = docSnap.data();
            temp.deadline = temp.deadline.toDate();
            setJob(temp);
        }
        fetchData();
    },[]);

    return (
        <Container maxWidth='lg'>
            <div className='whole-page-container'>
                <Sidebar role="freelancer"/>

                <h1>{jobs.name}</h1>

                <Feed job={jobs} />

                <Stats />
            </div>
        </Container>
    )
}