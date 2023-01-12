import React from 'react';
import { useState } from 'react'
import EventHandling from '../Concepts/EventHandling';
import ComplexState from '../Concepts/ComplexState';

const Hello = (props) => {
	return (
		<div>
			<p>Hello {props.name}, , you are {props.age} years old</p>    </div>
	);
};



function Intro_to_React(props) {
	const name = 'Peter';
	const age = 10;
	// const { counter } = props
	const [counter, setCounter] = useState(0);
	setTimeout(() => setCounter(counter + 1), 5000)
	// console.log('rendering...', counter)

	return (
		<>
			<div>
				<h1>Greetings</h1>
				<Hello name='Maya' age={26 + 10} />      <Hello name={name} age={age} />
			</div>

			<div>
				<h2>StateFul component</h2>

				{/* <EventHandling /> */}
				{/* <ComplexState /> */}
				<EventHandling />
			</div>
		</>
	);
}

export default Intro_to_React;