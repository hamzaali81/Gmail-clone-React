import React from 'react';
import './emailRow.css';
import { IconButton } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import LabelImportantOutlinedIcon from '@material-ui/icons/LabelImportantOutlined';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SendMail from '../SendMail/SendMail';

function EmailRow({ id,title, subject, description, time }) {

   const history = useHistory();
   const dispatch = useDispatch();
  
   const openMail = ()=> {
       dispatch(
    SendMail({id,title,subject,description,time})       
    );
   history.push('/mail');
   }

    return (
        <div onClick={openMail} className="emailRow">
        {/* <div onClick={()=> history.push("/mail")} className="emailRow"> */}
            <div className="emailRow__options">
                <CheckBoxOutlineBlankIcon />
                <IconButton>
                    <StarOutlineIcon />
                </IconButton>
                <IconButton>
                     <LabelImportantOutlinedIcon />
                </IconButton>
            </div>
            <h3 className="emailRow__title">{title}</h3>
            <div className="emailRow__message">
                 <h4>{subject}{" "}
                 <span className="emailRow__description">{description}</span>
                 </h4>
            </div> 
                <p className="emailRow__description">{time}</p>
        </div>
    )
}

export default EmailRow;
