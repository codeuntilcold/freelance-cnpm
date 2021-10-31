// import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';

import LargeButton from '../../../../components/button/LargeButton'

import JobItem from './JobItem';

import jobList from '../data/job';


function JobList() {
    console.log(jobList);
    return (    
        <Container maxWidth='lg'>
            <div className="job-management">
            <Sidebar active={1} role="employer" />
            <div className = "job-management__item">
                <h1 className = "job-heading">Quản lý việc</h1>
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
                                waiting = '0'
                                need = {job.need}
                                accepted = "0"
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
