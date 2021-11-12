// import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import Sidebar from '../../components/Sidebar/Sidebar'
import Feed from './components/Feed/index'
import Stats from './components/Stats/index'
import './index.css'

import { db } from '../../services/db'
import { collection, getDocs } from 'firebase/firestore'




export default function Jobsfeed() {

    const [jobs, setJobs] = useState([])

    useEffect(async () => {
        
        const querySnapshot = await getDocs(collection(db, 'job'))

        querySnapshot.forEach(doc => console.log(doc.data()))

        // setJobs(querySnapshot)

        // querySnapshot.forEach(doc => setJobs([ ...jobs, doc ]))

    }, [])

    return (
        <Container maxWidth='lg'>
            <div className='whole-page-container'>
                <Sidebar active={0} role="freelancer"/>
                
                <Feed jobs={jobs}/>


                <Stats />
            </div>
        </Container>
    )
}