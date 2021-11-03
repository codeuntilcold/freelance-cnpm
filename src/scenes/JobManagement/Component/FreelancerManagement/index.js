import CornerFooter from '../../../../components/CornerFooter'
import WaitingList from './WaitingList';
import AcceptedList from './AcceptedList';

import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';

export default function FreelancerList(props){
    return (
        <Container maxWidth='lg'>
            <div className="job-management whole-page-container">
                <Sidebar active={1} role="employer" />
                <div className = "job-management__item central-collumn">
                    <h1 className = "job-heading central-page-header">Danh sách đơn</h1>
                    <WaitingList jobId = {props.jobId}/>
                    <AcceptedList jobId = {props.jobId}/>
                </div>
                <div className = "job-management__footer">
                    <CornerFooter/>
                </div>
            </div>
        </Container>
    );
}