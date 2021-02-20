import React, { useEffect } from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { selectUser } from './features/userSlice';
import Login from './Form/Login/Login';
import { auth } from './firebase';
import { login } from './features/userSlice';


function App() { 
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  console.log(sendMessageIsOpen);

  useEffect(() => {
         auth.onAuthStateChanged((user)=> {
       if (user) {
           // User is signed in.
           dispatch(
             login({
               displayName: user.displayName,
               email: user.email,
               photoUrl: user.photoUrl,
             })
           )

       } 
      //  else {
      //      // User is signed out.
      //  }
   });
  }, [])


  return (
    <Router>
     {!user ? (
       <Login />
     ):(
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
     )}
   
    </Router>
  );
}

export default App;
