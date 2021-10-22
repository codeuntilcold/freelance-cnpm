import Container from '@mui/material/Container';
import './index.css'

import JobList from './Component/JobList';
import FreelancerList from './Component/FreelancerManagement';
import JobInput from './Component/JobInput'

export default function Jobmanagerment() {
    return (
        <Container maxWidth="sm" >
            <div className="job-management">
                <JobList/>
                <FreelancerList/>
                <JobInput/>
            </div>
        </Container>
    );
        
}

