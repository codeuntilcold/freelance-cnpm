import {Route, Switch } from 'react-router-dom';
import './index.css'
import jobList from './Component/data/job';
import JobList from './Component/JobList';
import FreelancerList from './Component/FreelancerManagement';
import JobInput from './Component/JobInput'

export default function Jobmanagement() {
    return (
        <Switch>
            <Route path = "/job-management" component = {JobList} exact/>
            <Route path = "/job-management/new" component = {JobInput} exact/>
            { 
                jobList.map(function(job){
                return (
                    <Route key = {job._id} path = {`/job-management/job${job._id}`} exact>
                        <FreelancerList key = {job._id} jobId = {job._id} />
                    </Route>
                    );
                })
            }
            {
                jobList.map(function(job){
                return (
                    <Route key = {job._id} path = {`/job-management/edit-job${job._id}`} exact>
                        <JobInput 
                            key = {job._id}
                            name = {job.name}
                            salary = {job.salary}
                            total = {job.total}
                            experience = {job.experience}
                            sex = {job.sex}
                            address = {job.address}
                            deadline = {job.deadline}
                            description = {job.description}
                            requirement = {job.requirement}
                            benefit = {job.benefit}
                        />
                    </Route>
                );
                })
            }          
        </Switch>
    );
        
}

