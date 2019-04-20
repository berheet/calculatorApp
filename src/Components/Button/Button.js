import React from 'react';
import './Button.css';

const isOperator = input => {
    return(input === "/" || input === "X" || input === "-" || input === "+" || input === "=")
}

export const Button = props => {
    return(
        <div className={`number-button ${!isOperator(props.children) ? null : "operator-button"}`} 
        onClick={() => props.handleClick(props.children)}>
            {props.children}
        </div>
    )
}

