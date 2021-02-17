import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import EmailList from './Component/EmailList/EmailList';
import Mail from './Component/Mail/Mail';
import Header from './Component/Header/Header';
import Sidebar from './Component/Sidebar/Sidebar';


function App() {
  return (
    <Router>
  
   
    <div className="app">
     <Header />

     <div className="app__body">
    <Sidebar />

    <Switch>
          <Route path="/mail">
            <Mail />
          </Route>
          <Route path="/">
            <EmailList />
          </Route>
        </Switch>
     </div>
    </div>
    </Router>
  );
}

export default App;
