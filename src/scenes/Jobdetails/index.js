// import { Link } from 'react-router-dom';
import { Container } from '@mui/material'
import './index.css';
import Sidebar from '../../components/Sidebar/Sidebar'
import Detail from './components/Detail/index'
import Stats from './components/Stats/index'

export default function Jobdetails() {
    return (
        <Container maxWidth='lg'>
            <div className="jobdetails">
                <Sidebar active={0} role="freelancer"/>

                <Detail />

                <Stats />
            </div>
        </Container>
    )
}