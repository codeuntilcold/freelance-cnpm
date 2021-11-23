import {Route, Switch } from 'react-router-dom';
import {useState, useEffect, useContext} from 'react';
import './index.css'
import JobList from './Component/JobList';
import FreelancerList from './Component/FreelancerManagement';
import JobEdit from './Component/JobEdit';
import JobNew from './Component/JobNew';
import { db } from "../../services/db.js";
import { collection, getDocs} from "firebase/firestore";
import { AppContext } from "../../context/AppProvider";


export default function Jobmanagement() {
    const [jobList, setJobList] = useState([])
    const [freelancerList, setFreelancerList] = useState([])
    const [applyForList, setapplyForList] = useState([])
    const [render, setRender] = useState(true);
    
    const {currentUser} = useContext(AppContext);
    let emID = currentUser?.roleId;
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
   
        }
        fetchData();
    },[render]);
    
    return (
        <Switch>
            <Route path = "/job-management"  exact>
                <JobList key = "1" employerID = {emID} jobList = {jobList} applyForList = {applyForList} setRender = {setRender}/>
            </Route>
            <Route path = "/job-management/new" exact>
                <JobNew key = '1' employerID = {emID} jobList = {jobList} setRender = {setRender}/>
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

