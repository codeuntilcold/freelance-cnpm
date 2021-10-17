import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Jobdetails from './components/Jobdetails';
import Jobsfeed from './components/Jobsfeed';
import Login from './components/Login';
import Myjobs from './components/Myjobs';
import Profile from './components/Profile';
import Register from './components/Register';
import Index from './components/Index';

// import './scss/index.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/Home" component={Home} />
          <Route path="/Jobdetails" component={Jobdetails} />
          <Route path="/Jobsfeed" exact component={Jobsfeed} />
          <Route path="/Login" exact component={Login} />
          <Route path="/Myjobs" exact component={Myjobs} />
          <Route path="/Profile" exact component={Profile} />
          <Route path="/Register" exact component={Register} />
          <Route path="*" component={() => <h1>404 NotFound</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
