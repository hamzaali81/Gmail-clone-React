import React from 'react';
import './sidebar.css';
import SidebarOption from '../SidebarOption/SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import NearMeIcon from '@material-ui/icons/NearMe';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIcon from '@material-ui/icons/Phone';
import InboxIcon from '@material-ui/icons/Inbox';
import NoteIcon from '@material-ui/icons/Note';
import { IconButton,Button } from '@material-ui/core';
import { openSendMessage } from '../../features/mailSlice';
import { useDispatch } from 'react-redux';
// console.log(openSendMessage);
function Sidebar() {
const dispatch = useDispatch();

    return (
        <div className="sidebar">
          <Button onClick={()=> dispatch(openSendMessage())} startIcon={<AddIcon fontSize="large" />} className="sidebar__compose">
              Compose
          </Button>
          <SidebarOption Icon={InboxIcon} title="Starred" number={54} selected={true}/>
          <SidebarOption Icon={StarIcon} title="Starred" number={54}/>
          <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54}/>
          <SidebarOption Icon={LabelImportantIcon} title="Important" number={54}/>
          <SidebarOption Icon={NearMeIcon} title="Sent" number={54}/>
          <SidebarOption Icon={NoteIcon} title="Drafts" number={54}/>
          <SidebarOption Icon={ExpandMoreIcon} title="More" number={54}/>
        
        
        <div className="sidebar__footer">
            <div className="sidebar__footerIcons">
                <IconButton>
                    <PersonIcon />
                </IconButton>
                <IconButton>
                    <DuoIcon />
                </IconButton>
                <IconButton>
                    <PhoneIcon />
                </IconButton>
            </div>
        </div>
        
        
        </div>
    )
}

export default Sidebar
