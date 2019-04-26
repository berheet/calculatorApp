import React, { Component } from 'react';
import { InputField } from '../InputField/InputField';
import { Button } from '../Button/Button';
import { AllClear } from '../AllClear/AllClear';

const CalculatorOperations = {
	"/": (prevValue, nextValue) => prevValue / nextValue,
	"x": (prevValue, nextValue) => prevValue * nextValue,
	"+": (prevValue, nextValue) => prevValue + nextValue,
	"-": (prevValue, nextValue) => prevValue - nextValue,
	"=": (prevValue, nextValue) => nextValue
};

class Calculator extends Component {

	state = {
		input: "0",
		value: null,
		operator: null,
		waitingForOperand: false
	}

	clearInput = () => {
		this.setState({
			input: "0",
			value: null,
			operator: null,
			waitingForOperand: false
		})
	}

	clearDisplay() {
		this.setState({
			input: "0"
		});
	}

// Handling sign (+/-)
	toggleSign() {
		const { input } = this.state;
		const newValue = parseFloat(input) * -1;

		this.setState({
			input: String(newValue)
		});
	}

// Handling percent 
	inputPercent() {
		const { input } = this.state;
		const currentValue = parseFloat(input);
		
		if (currentValue === 0) return;
		const fixedDigits = input.replace(/^-?\d*\.?/, "");
		const newValue = parseFloat(input) / 100;
		this.setState({
			input: String(newValue.toFixed(fixedDigits.length + 2))
		});
	}

// Handling decimal
	inputDot() {
	const { input, waitingForOperand } = this.state;
	if (!/\./.test(input) && waitingForOperand) {
		this.setState({
			input: "0.",
			waitingForOperand: false
		});
	}
	if (/\./.test(input) && waitingForOperand) {
		this.setState({
			input: "0.",
			waitingForOperand: false
		});
	}
	if (!/\./.test(input) && !waitingForOperand) {
		this.setState({
			input: input + ".",
		});
	}
	
}

// Handling digits
	inputValue(digit) {
		const { input, waitingForOperand } = this.state;

		if (waitingForOperand) {
			this.setState({
				input: String(digit),
				waitingForOperand: false
			});
		} else {
			this.setState({
				input:
					input === "0" ? String(digit) : input + digit
			});
		}
	}

// Handling opertation 
	performOperation(nextOperator) {
		const { value, input, operator } = this.state;
		const inputValue = parseFloat(input);

		if (value == null) {
			this.setState({
				value: inputValue
			});
		} else if (operator) {
			const currentValue = value || 0;
			const newValue = CalculatorOperations[operator](currentValue, inputValue);

			this.setState({
				value: newValue,
				input: String(newValue)
			});
		}
		this.setState({
			waitingForOperand: true,
			operator: nextOperator
		});
	}

	render() {
		const { input } = this.state;
		const clearDisplay = input !== "0";
		const clearText = clearDisplay ? "C" : "AC";

		return (
			<div className="container">
				<InputField numbers={input} />
				<div className="row">
					<AllClear onClick={() => clearDisplay ? this.clearDisplay(): this.clearInput()}
						handleClick={this.clearInput}>{clearText}</AllClear>
					<Button onClick={() => this.toggleSign()}>+/-</Button>
					<Button onClick={() => this.inputPercent()}>%</Button>
					<Button onClick={() => this.performOperation("/")} isOperator="true">÷</Button>
				</div>
				<div className="row">
					<Button onClick={() => this.inputValue(7)}>7</Button>
					<Button onClick={() => this.inputValue(8)}>8</Button>
					<Button onClick={() => this.inputValue(9)}>9</Button>
					<Button onClick={() => this.performOperation("x")} isOperator="true">X</Button>
				</div>
				<div className="row">
					<Button onClick={() => this.inputValue(4)}>4</Button>
					<Button onClick={() => this.inputValue(5)}>5</Button>
					<Button onClick={() => this.inputValue(6)}>6</Button>
					<Button onClick={() => this.performOperation("-")} isOperator="true">−</Button>
				</div>
				<div className="row">
					<Button onClick={() => this.inputValue(1)}>1</Button>
					<Button	onClick={() => this.inputValue(2)}>2</Button>
					<Button onClick={() => this.inputValue(3)}>3</Button>
					<Button onClick={() => this.performOperation("+")} isOperator="true">+</Button>
				</div>
				<div className="row">
					<Button onClick={() => this.inputValue(0)}>0</Button>
					<Button onClick={() => this.inputDot()}><strong>.</strong></Button>
					<Button onClick={() => this.performOperation("=")}
					isOperator="true">=</Button>
				</div>
			</div>
		)
	}
}

export default Calculator;
