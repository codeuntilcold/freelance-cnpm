import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
// import './scss/index.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" component={() => <h1>404 NotFound</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
