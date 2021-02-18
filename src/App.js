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
import SendMail from './Component/SendMail/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';

function App() {
 
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  console.log(sendMessageIsOpen);

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

    {sendMessageIsOpen && <SendMail /> }
    </div>
    </Router>
  );
}

export default App;
