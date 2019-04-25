import React from 'react';
import './InputField.css';
import DynamicFont from 'react-dynamic-font';


export const InputField = props => (
        <div className="input"> 
        <DynamicFont content={props.numbers} />
        </div>
    )