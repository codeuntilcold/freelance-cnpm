import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';

import Button from '../Button'
import JobItem from './JobItem';

function JobList() {
    return (    
        <div className="">
            <h1 className = "job-heading">Quản lý việc</h1>
            <h3 className = "list__name">
                Việc hiện có
                <Button 
                    name = "Thêm mới" 
                    link = "/New"
                    type = "large"
                />
            </h3>
            <JobItem
                name = "Công việc 1"
                status = "Đang tuyển"
                waitng = "20"
                need = "15"
                accepted = "5"
            />
            <JobItem
                name = "Công việc 2"
                status = "Đang tuyển"
                waitng = "15"
                need = "10"
                accepted = "8"
            />
            <JobItem
                name = "Công việc 3"
                status = "Đang tuyển"
                waitng = "15"
                need = "10"
                accepted = "8"
            />
            <JobItem
                name = "Công việc 4"
                status = "Dừng tuyển"
                waitng = "0"
                need = "12"
                accepted = "12"
            />
        </div>
    )
}

export default JobList;
