import { Link } from 'react-router-dom';

import WaitingList from './WaitingList';
import AcceptedList from './AcceptedList';

import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';




export default function FreelancerList(props){
    return (
        <Container maxWidth='lg'>
                <div className="job-management">
                <Sidebar active={1} role="employer" />
                <div className = "job-management__item">
                    <h1 className = "job-heading">Danh sách đơn</h1>
                    <WaitingList jobId = {props.jobId}/>
                    <AcceptedList jobId = {props.jobId}/>
                </div>
                    <div className = "job-management__footer"></div>
                </div>
        </Container>
    );
}