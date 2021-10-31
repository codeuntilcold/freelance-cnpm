import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './scenes/Home/index';
import Jobdetails from './scenes/Jobdetails/index';
import Jobmanagerment from './scenes/JobManagement';
import Jobsfeed from './scenes/Jobsfeed/index';
import Login from './scenes/Login/index';
import Myjobs from './scenes/Myjobs/index';
import Profile from './scenes/Profile/index';
import Register from './scenes/Register/index';
import Index from './scenes/Index/index';
import Noti from './scenes/Noti/index';
import JobInput from './scenes/JobManagement/Component/JobInput';

import './App.css';


// -----Nested path----------------------------------------
import jobList from './scenes/JobManagement/Component/data/job';
import freelancerList from './scenes/JobManagement/Component/data/freelancer';
import FreelancerList from './scenes/JobManagement/Component/FreelancerManagement';
// --------------------------------------------------------

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/home" component={Home} />
          <Route path="/jobdetails" component={Jobdetails} />
          <Route path="/job-managerment" component={Jobmanagerment} />
          <Route path="/jobsfeed" exact component={Jobsfeed} />
          <Route path="/login" exact component={Login} />
          <Route path="/myjobs" exact component={Myjobs} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/register" exact component={Register} />
          <Route path="/notification" exact component={Noti} />
          
          {/* -------- nested path -------------------------------------*/}
          <Route path = '/job-management/new' exact component={JobInput} />
          {
            jobList.map(function(job){
              return (
                <Route path = {`/job-management/job${job.id}`} exact>
                  <FreelancerList
                    jobId = {job.id}
                  />
                </Route>
              )
            })
          }
          {/* ----------------------------------------------------------*/}
          
          <Route path="*" component={() => 
            <div>
              <h1>404 NotFound</h1>
              <Link to="/">Return to Index page</Link>
            </div>
            } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
