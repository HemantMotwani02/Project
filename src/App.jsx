import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
// import Login from './Components/Login';
// import Register from './Components/Register';
// import Sidebar from './Components/Sidebar/Sidebar';
import Logs from './Components/Logs/Logs';
import Project from './Components/Projects/Project';

function App() {


  return (
    <>

      {/* <Sidebar /> */}
      {/* <Project /> */}

      {/* <Logs /> */}
      <Router>
        <Routes>
          {/* <Route exact path='/Login' Component={Login}></Route>
          <Route exact path='/Register' Component={Register}></Route> */}
          <Route exact path='/' Component={Project}></Route>
          <Route exact path='/logs' Component={Logs}></Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
