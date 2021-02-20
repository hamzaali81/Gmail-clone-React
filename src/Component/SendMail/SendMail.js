import React from 'react';
import './sendmail.css';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton,Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import { Alert, AlertTitle } from '@material-ui/lab';
import CheckIcon from '@material-ui/icons/Check';
import { closeSendMessage } from '../../features/mailSlice'
import { useSelector,useDispatch } from 'react-redux';
import { db } from '../../firebase';
import firebase from 'firebase';;

function SendMail() {
    const { register, handleSubmit, watch, errors } = useForm();
    const dispatch  = useDispatch();
    
    const onSubmit = (formdata)=> {    
    // console.log(formdata);
    db.collection("emails").add({
        to: formdata.to,
        subject: formdata.subject,
        message: formdata.message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
        dispatch(closeSendMessage());
    }

    return (
        <div className="sendMail">
            <div className="sendMail__header">
                <h3>New Message</h3>
                <CloseIcon className="sendMail__close" onClick={()=> dispatch(closeSendMessage())}/>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input name="to" type="text" placeholder="To" ref={register({ required: true })}/>
                   <input name="subject" type="email" placeholder="Subject" ref={register({ required: true })}/>
                <input name="message" type="text" placeholder="sendMail__options" className="sendMail__message" ref={register({ required: true })}/>
               {errors.to && <Alert icon={<CheckIcon fontSize="inherit" />} severity="error"> Field is To missing</Alert>} 
               {errors.subject && <Alert icon={<CheckIcon fontSize="inherit" />} severity="error"> Field is Subject missing</Alert>} 
               {errors.message && <Alert icon={<CheckIcon fontSize="inherit" />} severity="error"> Field is Message missing</Alert>} 
               
          
                <div className="sendMail__options">
                      <Button 
                      className="sendMail__send"
                      variant="contained"
                      color="primary"
                      type="submit"     
                      >Send</Button>
                </div>
            </form>
        </div>
    )
}

export default SendMail;
