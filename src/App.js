import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './scenes/Home/index';
import Jobdetails from './scenes/Jobdetails/index';
import Jobsfeed from './scenes/Jobsfeed/index';
import Login from './scenes/Login/index';
import Myjobs from './scenes/Myjobs/index';
import Profile from './scenes/Profile/index';
import Register from './scenes/Register/index';
import Index from './scenes/Index/index';

// import './scss/index.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/home" component={Home} />
          <Route path="/jobdetails" component={Jobdetails} />
          <Route path="/jobsfeed" exact component={Jobsfeed} />
          <Route path="/login" exact component={Login} />
          <Route path="/myjobs" exact component={Myjobs} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/register" exact component={Register} />
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
