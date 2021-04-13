import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Components/navigation/Nav'
import formpage from './Pages/FormPage';
import Home from './Pages/Home'
import ReactRouter from './Pages/ReactRouter'


function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/FormPage' component={formpage} />
          <Route path='/ReactRouter' component={ReactRouter} />
        </Switch>
      </Router>



    </div>
  );
}

export default App;
