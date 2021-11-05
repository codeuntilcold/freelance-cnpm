import CornerFooter from '../../../../components/CornerFooter'
import WaitingList from './WaitingList';
import AcceptedList from './AcceptedList';

import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';

export default function FreelancerList({job, freelancerList, applyForList}){
    return (
        <Container maxWidth='lg'>
            <div className="job-management whole-page-container">
                <Sidebar active={1} role="employer" />
                <div className = "job-management__item central-collumn">
                    <h1 className = "job-heading central-page-header">Danh sách đơn</h1>
                    <WaitingList 
                        key = {job._id+'w'}
                        job = {job} 
                        freelancerList = {freelancerList} 
                        applyForList = {applyForList}/>
                    <AcceptedList 
                        key = {job._id+'a'}
                        job = {job} 
                        freelancerList = {freelancerList} 
                        applyForList = {applyForList}/>
                </div>
                <div className = "job-management__footer">
                    <CornerFooter/>
                </div>
            </div>
        </Container>
    );
}