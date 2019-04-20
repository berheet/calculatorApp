import React from 'react';
import './Button.css';

const isOperator = input => {
    return(!isNaN(input) || input === '=' || input === '.')
}

export const Button = props => {
    return(
        <div className={`number-button ${isOperator(props.children) ? null : "operator-button"}`}>
            {props.children}
        </div>
    )
}

