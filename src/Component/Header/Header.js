import React from 'react';
import './header.css';
import { IconButton,Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser,logout } from '../../features/userSlice';
import { auth } from '../../firebase';
//Menuicon
//IconButton

function Header() {
    
    const user = useSelector(selectUser);
    const dispatch = useDispatch();
    
    const signOut = () => {
    auth.signOut()
        .then(function () {
            // Sign-out successful.
            dispatch(logout())
        }).catch(function (error) {
            // An error happened.
            alert(error.message)
        });
    }

    return (
        <div className="header">
          <div className="header__left">
               <IconButton>
               <MenuIcon />
               </IconButton>
               <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png" alt="logo"/>
          </div>
          <div className="header__middle">
              <SearchIcon />
              <input type="text" placeholder="Search mail"/>
              <ArrowDropDownIcon className="header__inputCaret"/>
          </div>
          <div className="header__right">
                   <IconButton>
                       <AppsIcon />
                       </IconButton>
                       <IconButton>
                           <NotificationsIcon />
                       </IconButton>
                       <Avatar onClick={signOut} src={user?.photoUrl}/>
          </div>
        </div>
    )
}

export default Header;
