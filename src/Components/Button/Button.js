import React from 'react';
import './Button.css';

export const Button = props => (
        <div className={`number-button ${!props.isOperator ? null : "operator-button"}`}
            onClick={() => props.onClick()}>{props.children}</div>
            )