import React from 'react';
import './sidebarOption.css';

function SidebarOption({ Icon, title, number,selected }) {
    return (
        <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
          <Icon />
          <h3>{title}</h3>
          <p>{number}</p>
        </div>
    )
}

export default SidebarOption;
