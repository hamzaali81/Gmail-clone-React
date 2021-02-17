import React from 'react';
import './section.css';

function Section({ Icon, title, selected }) {
    return (
        <div className="section">
             <Icon />
             <h3>{title}</h3>

        </div>
    )
}

export default Section
