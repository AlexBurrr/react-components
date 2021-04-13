import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import formpage from './Pages/FormPage';
import Home from './Pages/Home'
import Nav from './Components/navigation/Nav'


function App() {
  return (
    <div className="App">

      <Router>
        <Nav />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/FormPage' component={formpage} />
        </Switch>
      </Router>



    </div>
  );
}

export default App;
