import React from 'react';
import './mail.css';
import { IconButton } from '@material-ui/core';
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';
import MoveToInboxOutlinedIcon from '@material-ui/icons/MoveToInboxOutlined';
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';

import { selectOpenMail } from '../../features/mailSlice';

import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Mail() {
    const history = useHistory();
    const selectedMail = useSelector(selectOpenMail());

    return (
        <div className="mail">
             <div className="mail__tools">
                 <div className="mail__toolsLeft">
                     <IconButton onClick={() => history.push("/")}>
                         <ArrowBackOutlinedIcon />
                     </IconButton>

                     <IconButton>
                         <MoveToInboxOutlinedIcon />
                     </IconButton>
                     <IconButton>
                         <ErrorOutlineOutlinedIcon />
                     </IconButton>
                     <IconButton>
                         <DeleteOutlineOutlinedIcon />
                     </IconButton>
                     <IconButton>
                         <EmailOutlinedIcon />
                     </IconButton>
                     <IconButton>
                         <WatchLaterOutlinedIcon />
                     </IconButton>
                     <IconButton>
                         <CheckCircleOutlineOutlinedIcon />
                     </IconButton>
                     <IconButton>
                         <LabelImportantOutlinedIcon />
                     </IconButton>
                     <IconButton>
                         <MoveToInboxIcon />
                     </IconButton>
                 </div>
                 <div className="mail__toolsRight">
                 <IconButton>
                         <UnfoldMoreIcon />
                     </IconButton>
                 <IconButton>
                         <PrintIcon />
                     </IconButton>
                 <IconButton>
                         <ExitToAppIcon />
                     </IconButton>
                 </div>
             </div>
        <div className="mail__body">
            <div className="mail__bodyHeader">
                <h2>{selectedMail?.subject}</h2>
                {/* <h2>Subject</h2> */}
                <LabelImportantIcon className="mail__important"/>
                {/* <p>Title</p> */}
                <p>{selectedMail?.title}</p>
                <p>{selectedMail?.time}</p>
                {/* <p>10pm</p> */}
            </div>
          
          <div className="mail__message">
              {/* <p>This is a message</p> */}
              <p>{selectedMail?.description}</p>
              
          </div>

        </div>
        </div>
    )
}

export default Mail;
