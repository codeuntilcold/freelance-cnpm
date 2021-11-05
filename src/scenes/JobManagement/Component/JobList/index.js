import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';
import LargeButton from '../../../../components/button/LargeButton'
import JobItem from './JobItem';
import CornerFooter from '../../../../components/CornerFooter'
import {useState} from 'react';

function JobList({jobList, applyForList}) {
    return (    
        <Container maxWidth='lg'>
            <div className="job-management whole-page-container">
                <Sidebar active={1} role="employer" />
                <div className = "job-management__item central-collumn">
                    <h1 className = "job-heading central-page-header">Quản lý việc</h1>
                    <h3 className = "list__name">
                        Việc hiện có
                        <LargeButton 
                            key = '1'
                            name = "Thêm mới" 
                            link = "/job-management/new"
                        />
                    </h3>
                    {
                        jobList.map(function(job){
                            return (
                                <JobItem
                                    key = {job._id}
                                    job = {job}
                                    applyForList = {applyForList}
                                />
                            )
                        })
                    }
                </div>
                <div className = "job-management__footer">
                    <CornerFooter/>
                </div>
            </div>
        </Container>
    )
}

export default JobList;
