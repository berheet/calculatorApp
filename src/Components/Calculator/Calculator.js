import React, {Component} from 'react';
import { InputField } from '../InputField/InputField';
import { Button } from '../Button/Button';
import { AllClear } from '../AllClear/AllClear'

class Calculator extends Component{

        state = {
            input: 0
        }

inputValue = num => {
    if(this.state.input == '0'){
        this.setState({
            input: num
        })
    } else {
        this.setState({
            input: this.state.input + num
        })
    }
}

clearInput = () => {
    this.setState({
        input: 0
    })
}
    render(){
        
        return(
            <div className="container">
                <InputField numbers={this.state.input}/>
                <div className="row">
                    <AllClear handleClick={this.clearInput}>AC</AllClear>
                    <Button handleClick={this.inputValue}>+/-</Button> 
                    <Button handleClick={this.inputValue}>%</Button>
                    <Button handleClick={this.inputValue}>/</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.inputValue}>7</Button>
                    <Button handleClick={this.inputValue}>8</Button>
                    <Button handleClick={this.inputValue}>9</Button>
                    <Button handleClick={this.inputValue}>X</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.inputValue}>4</Button>
                    <Button handleClick={this.inputValue}>5</Button>
                    <Button handleClick={this.inputValue}>6</Button>
                    <Button handleClick={this.inputValue}>-</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.inputValue}>1</Button>
                    <Button handleClick={this.inputValue}>2</Button>
                    <Button handleClick={this.inputValue}>3</Button>
                    <Button handleClick={this.inputValue}>+</Button>
                </div>
                <div className="row">
                    <Button handleClick={this.inputValue}>0</Button>
                    <Button handleClick={this.inputValue}>.</Button>
                    <Button handleClick={this.inputValue}>=</Button>
                </div>
          </div>
        )
    }
}

export default Calculator;