import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Jobdetails from './components/Jobdetails';
import Jobsfeed from './scenes/Jobsfeed/index';
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
          <Route path="/home" component={Home} />
          <Route path="/jobdetails" component={Jobdetails} />
          <Route path="/jobsfeed" exact component={Jobsfeed} />
          <Route path="/login" exact component={Login} />
          <Route path="/myjobs" exact component={Myjobs} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/register" exact component={Register} />
          <Route path="*" component={() => <h1>404 NotFound</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
