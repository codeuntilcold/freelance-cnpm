import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './index.css'
import jobList from './Component/data/job';
import freelancerList from './Component/data/freelancer';
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
                    <Route path = {`/job-management/job${job.id}`} exact>
                        <FreelancerList jobId = {job.id} />
                    </Route>
                    );
                })
            }
            {
                jobList.map(function(job){
                return (
                    <Route path = {`/job-management/edit-job${job.id}`} exact>
                        <JobInput/>
                    </Route>
                );
                })
            }          
        </Switch>
    );
        
}

