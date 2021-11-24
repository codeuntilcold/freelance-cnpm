import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './scenes/Home/index';
import Jobdetails from './scenes/Jobdetails/index';
import Jobmanagement from './scenes/JobManagement';
import Jobsfeed from './scenes/Jobsfeed/index';
import Login from './scenes/Login/index';
import Myjobs from './scenes/Myjobs/index';
import Profile from './scenes/Profile/index';
import Register from './scenes/Register/index';
import Index from './scenes/Index/index';
import Noti from './scenes/Noti/index';
import Profiles from './scenes/Profiles';
import AuthProvider from './context/AuthProvider';

import './App.css';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <BrowserRouter>
        <AuthProvider>
          <AppProvider>
            <div className="App">
                <Switch>
                  <Route path="/" exact component={Index} />
                  <Route path="/home" component={Home} />
                  <Route path="/jobdetails/:jobID" component={Jobdetails} />
                  <Route path="/jobdetails" component={Jobdetails} />
                  <Route path="/job-management" component={Jobmanagement} />
                  <Route path="/jobsfeed" exact component={Jobsfeed} />
                  <Route path="/login" exact component={Login} />
                  <Route path="/myjobs" exact component={Myjobs} />
                  <Route path="/profile" exact component={Profile} />
                  
                  <Route path="/profiles" exact component={Profiles} />
                  <Route path="/profiles/:Type/:ID" exact component={Profiles} />
                  <Route path="/register" exact component={Register} />
                  <Route path="/notification" exact component={Noti} />
                  <Route path="*" component={() => 
                    <div>
                      <h1>404 NotFound</h1>
                      <Link to="/">Return to Index page</Link>
                    </div>
                    } />
                </Switch>
            </div>
          </AppProvider>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
