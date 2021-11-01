// import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';
import LargeButton from '../../../../components/button/LargeButton'
import JobItem from './JobItem';
// data
import jobList from '../data/job';
import freelancerList from '../data/freelancer';


function JobList() {
    return (    
        <Container maxWidth='lg'>
            <div className="job-management whole-page-container">
            <Sidebar active={1} role="employer" />
            <div className = "job-management__item central-collumn">
                <h1 className = "job-heading central-page-header">Quản lý việc</h1>
                <h3 className = "list__name">
                    Việc hiện có
                    <LargeButton 
                        name = "Thêm mới" 
                        link = "/job-management/new"
                    />
                </h3>
                {
                    jobList.map(function(job){
                        return (
                            <JobItem
                                id = {job.id}
                                name = {job.name}
                                status = {job.finding?"Đang tuyển":"Dừng tuyển"}
                                need = {job.need}                               
                                waiting = {
                                    freelancerList.reduce(function(sum, cur){
                                        if (cur.jodId == job.id && cur.accepted == false)
                                            return sum+1;
                                        else return sum;
                                    }, 0)
                                }
                                accepted = {
                                    freelancerList.reduce(function(sum, cur){
                                        if (cur.jodId == job.id && cur.accepted == true)
                                            return sum+1;
                                        else return sum;
                                    }, 0)
                                }
                            />
                        )
                    })
                }
            </div>
            <div className = "job-management__footer"></div>
            </div>
        </Container>
    )
}

export default JobList;
