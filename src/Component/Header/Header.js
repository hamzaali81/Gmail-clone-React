import React from 'react';
import './header.css';
import { IconButton,Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';


//Menuicon
//IconButton

function Header() {
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
                       <Avatar />
          </div>
        </div>
    )
}

export default Header;
