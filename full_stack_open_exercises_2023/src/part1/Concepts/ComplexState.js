import React from 'react';
import { useState } from 'react';

function ComplexState() {

	//! 1
	const [left, setLeft] = useState(0);
	const [right, setRight] = useState(0);

	// return (
	// 	<div>
	// 		{left}
	// 		<button onClick={() => setLeft(left + 1)}>
	// 			left
	// 		</button>
	// 		<button onClick={() => setRight(right + 1)}>
	// 			right
	// 		</button>
	// 		{right}
	// 	</div>
	// );

	//! 2
	const [clicks, setClicks] = useState({
		left: 0, right: 0
	});


	//! 1
	// const handleLeftClick = () => {
	// 	const newClicks = {
	// 		left: clicks.left + 1,
	// 		right: clicks.right
	// 	};
	// 	setClicks(newClicks);
	// };

	// const handleRightClick = () => {
	// 	const newClicks = {
	// 		left: clicks.left,
	// 		right: clicks.right + 1
	// 	};
	// 	setClicks(newClicks);
	// };

	//! 2

	const handleLeftClick = () => {
		setAll(allClicks.concat('L'));
		setLeft(left + 1);
	};
	const handleRightClick = () => {
		setAll(allClicks.concat('R'));
		setRight(right + 1);
	};

	const [allClicks, setAll] = useState([]); // Handling Arrays

	// 	return (
	// 		<div>
	// 			 {clicks.left}
	// 			<button onClick={handleLeftClick}>left</button>
	// 			<button onClick={handleRightClick}>right</button>
	// 			{clicks.right}
	// 		</div>
	// 	);


	//! 2

	//*  Passing Event Handlers to Child Components 
	const Button = (props) => (
		<button onClick={props.handleClick}>
			{props.text}
		</button>
	);

	const [value, setValue] = useState(10);

	const setToValue = newValue => {
		console.log('value now', newValue);
		setValue(newValue);
	};

	// Do not define components inside another component
	const Display = props => <div>{props.value}</div>;

	return (
		<>
			<div>
				{left}
				<button onClick={handleLeftClick}>left</button>
				<button onClick={handleRightClick}>right</button>
				{right}
				<p>{allClicks.join(' ')}</p>

			</div>

			<div>
				<h2>Hello </h2>
				<Display value={value} />
				<Button handleClick={() => setToValue(1000)} text="thousand" />
				<Button handleClick={() => setToValue(0)} text="reset" />
				<Button handleClick={() => setToValue(value + 1)} text="increment" />
			</div>
		</>
	);

}
export default ComplexState;