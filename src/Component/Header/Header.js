import React from 'react';
import './header.css';

//Menuicon
//IconButton

function Header() {
    return (
        <div className="header">
          <div className="header__left">
               <IconButton>
               <MenuIcon />
               </IconButton>
               <img src="" alt="logo"/>
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
