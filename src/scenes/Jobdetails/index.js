// import { Link } from 'react-router-dom';
import { Container } from '@mui/material'
import './index.css';
import Detail from './components/Detail/index';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Jobdetails() {
    return (
        <Container maxWidth='lg'>
            <div className="jobdetails">
                <Sidebar active={0} role="freelancer"/>

                <Detail />

                {/* <Stats /> */}
            </div>
        </Container>
    )
}