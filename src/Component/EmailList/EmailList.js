import React from 'react';
import './EmailList.css';
import { IconButton,Button } from '@material-ui/core';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import RadioIcon from '@material-ui/icons/Radio';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardHideIcon from '@material-ui/icons/KeyboardHide';
import SettingsIcon from '@material-ui/icons/Settings';
import Section from '../Section/Section';
function EmailList() {
    return (
        <div className="emailList">
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    
                    <IconButton>
                    <CheckBoxOutlineBlankIcon />
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <IconButton>
                        <RadioIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                <IconButton>
                        <ChevronLeftIcon />
                    </IconButton>
                <IconButton>
                        <ChevronRightIcon />
                    </IconButton>
                <IconButton>
                        <KeyboardHideIcon />
                    </IconButton>
                <IconButton>
                        <SettingsIcon />
                    </IconButton>
               
                </div>
            </div>

            <div className="emailList__section">
                <Section Icon={} title="" selected/>
            </div>
        </div>
    )
}

export default EmailList;
