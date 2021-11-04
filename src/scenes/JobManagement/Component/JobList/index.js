import Container from '@mui/material/Container';
import Sidebar from '../../../../components/Sidebar/Sidebar';
import LargeButton from '../../../../components/button/LargeButton'
import JobItem from './JobItem';
import CornerFooter from '../../../../components/CornerFooter'
// data
import jobList from '../data/job';
import applyForList from '../data/applyFor'


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
                                    key = {job._id}
                                    id = {job._id}
                                    name = {job.name}
                                    status = {"Đang tuyển"}
                                    need = {job.total}                               
                                    waiting = {
                                        applyForList.reduce(function(sum, cur){
                                            if (cur['job-id'] == job._id && cur.status == 'Dang doi')
                                                return sum+1;
                                            else return sum;
                                        }, 0)
                                    }
                                    accepted = {
                                        applyForList.reduce(function(sum, cur){
                                            if (cur['job-id'] == job._id && cur.status == 'Xac nhan')
                                                return sum+1;
                                            else return sum;
                                        }, 0)
                                    }
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
