import React from 'react';
import './section.css';

function Section({ Icon, title, selected, color }) {
    return (
        <div className={`section && "section--selected"`} style={{borderBottom: `3px solid ${color}`, color: `${selected && color}`}}>
             <Icon />
             <h3>{title}</h3>

        </div>
    )
}

export default Section
