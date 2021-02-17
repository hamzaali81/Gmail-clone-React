import React from 'react';
import './sidebar.css';
import SidebarOption from '../SidebarOption/SidebarOption';

function Sidebar() {
    return (
        <div className="sidebar">
          <Button startIcon={<AddIcon fontSize="large" className="sidebar__compose" />}>
              Compose
          </Button>
          <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected={true}/>
          <SidebarOption Icon={StarIcon} title="Starred" number={54}/>
        </div>
    )
}

export default Sidebar
<h1>Sidebar</h1>