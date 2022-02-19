import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import Dashboard from './components/dashboard'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Leftbar from './components/Leftbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" ><Login /></Route>
          <Route path="/reqlist" ><Dashboard /></Route>
        </Switch>
      </BrowserRouter>
      {/* <Login /> */}
      {/* <Dashboard /> */}
      {/* <Sidebar /> */}
      {/* <Navbar />  */}
      {/* <Sidebar /> */}
      {/* <Leftbar /> */}

    </div>
  );
}

export default App;
