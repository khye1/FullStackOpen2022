import React from 'react';
import { useState } from 'react';

function EventHandling() {
	const [counter, setCounter] = useState(0);

	const handleClick = () => { console.log('clicked'); };

	const increaseByOne = () => setCounter(counter + 1);
	const decreaseByOne = () => setCounter(counter - 1);
	const setToZero = () => setCounter(0);

	//* Event Handler Revisted + function return a function

	const [value, setValue] = useState(10);

	const hello = (who) => {
		const handler = () => { console.log('hello', who); };
		return handler;
	};

	const setToValue = (newValue) => () => {
		console.log('value now', newValue);  // print the new value to console   
		setValue(newValue);
	};

	return (
		<div>
			<div>{counter}</div>
			<button onClick={() => setCounter(counter + 1)}>
				plus
			</button>
			<button onClick={() => setCounter(0)}>         zero      </button>

			<button onClick={increaseByOne}>        plus
			</button>
			<button onClick={setToZero}>        zero
			</button>

			<Display counter={counter} />
			<Button onClick={increaseByOne} text='plus' />
			<Button onClick={setToZero} text='zero' />
			<Button onClick={decreaseByOne} text='minus' />


			{value}
			<button onClick={hello('world')}>button</button>
			<button onClick={hello('react')}>button</button>
			<button onClick={hello('function')}>button</button>

			<button onClick={setToValue(1000)}>thousand</button>
			<button onClick={setToValue(0)}>reset</button>
			<button onClick={setToValue(value + 1)}>increment</button>

		</div>
	);
}

// const Display = (props) => {
// 	return (
// 		<div>{props.counter}</div>
// 	);
// };

// const Display = ({ counter }) => {
// 	return (
// 		<div>{counter}</div>
// 	);
// }

const Display = ({ counter }) => <div>{counter}</div>;


// const Button = (props) => {
// 	return (
// 		<button onClick={props.onClick}>
// 			{props.text}
// 		</button>
// 	);
// };

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

export default EventHandling;