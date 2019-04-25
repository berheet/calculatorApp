import React from 'react';
import './AllClear.css';

export const AllClear = props => (
        <div className="clear-button" onClick={() => props.handleClick()}>
            {props.children}
        </div>
    )

