import {Route, Switch } from 'react-router-dom';
import {useState, useEffect} from 'react';
import './index.css'
import JobList from './Component/JobList';
import FreelancerList from './Component/FreelancerManagement';
import JobEdit from './Component/JobEdit';
import JobNew from './Component/JobNew';
import { db } from "../../services/db.js";
import { collection, getDocs} from "firebase/firestore";


export default function Jobmanagement() {
    const [jobList, setJobList] = useState([])
    const [freelancerList, setFreelancerList] = useState([])
    const [applyForList, setapplyForList] = useState([])
    const [employerList, setEmployerList] = useState([]);
    const [render, setRender] = useState(true);
    useEffect(() =>{   
        // get data   
        var fetchData = async()=>{
            // get
            const querySnapshotJob = await getDocs(collection(db, "job"));
            let temp = []
            querySnapshotJob.forEach((doc) => {
                let data = {"_id":doc.id,...doc.data()}
                data.deadline = data.deadline.toDate();
                data['start-date'] = data['start-date'].toDate();
                temp = [...temp, data]
            });
            setJobList(temp);
            
            temp = []
            const querySnapshotFreelancer = await getDocs(collection(db, "freelancer"));
            querySnapshotFreelancer.forEach((doc) => {
                let data = {"_id":doc.id,...doc.data()}
                temp = [...temp, data]
            });
            setFreelancerList(temp);

            temp = []
            const querySnapshotApply = await getDocs(collection(db, "apply_for"));
            querySnapshotApply.forEach((doc) => {
                let data = {"_id":doc.id,...doc.data()}
                temp = [...temp, data]
            });
            setapplyForList(temp);      
            
            temp = []
            const querySnapshotEmployer = await getDocs(collection(db, "employer"));
            querySnapshotEmployer.forEach((doc) => {
                let data = {"_id":doc.id,...doc.data()}
                temp = [...temp, data]
            });
            setEmployerList(temp);     
        }
        fetchData();
    },[render]);
    
    return (
        <Switch>
            <Route path = "/job-management"  exact>
                <JobList key = "1" employer = {employerList[0]} jobList = {jobList} applyForList = {applyForList} setRender = {setRender}/>
            </Route>
            <Route path = "/job-management/new" exact>
                <JobNew key = '1' employer = {employerList[0]} jobList = {jobList} setRender = {setRender}/>
            </Route>
            { 
                jobList.map(function(job){
                    return (
                        <Route key = {job._id} path = {`/job-management/job${job._id}`} exact>
                            <FreelancerList 
                                key = {job._id+'a'} 
                                job = {job} 
                                freelancerList = {freelancerList} 
                                applyForList={applyForList}/>
                        </Route>
                    );
                })
            }
            {
                jobList.map(function(job){
                    return (
                        <Route key = {job._id} path = {`/job-management/edit-job${job._id}`} exact>
                            <JobEdit 
                                key = {job._id+'b'}
                                job = {job}
                            />
                        </Route>
                    );
                })
            }          
        </Switch>
    );        
}

