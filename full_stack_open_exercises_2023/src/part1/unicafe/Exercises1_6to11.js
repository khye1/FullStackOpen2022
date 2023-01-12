import React, { useState } from 'react';
import { ReactDOM } from 'react-dom';

import Button from './Button';
import Statistics from './Statistics';
import Title from './Title';

const Exercises1_6to11 = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	return (
		<div>
			<h2>Exericse 1.6 to 1.11</h2>
			<Title name={"give feedback"} />
			<Button name={'good'} value={good} func={setGood} />
			<Button name={'neutral'} value={neutral} func={setNeutral} />
			<Button name={'bad'} value={bad} func={setBad} />

			<Statistics name={'statistics'} good={good} neutral={neutral} bad={bad} />
		</div>
	);
};

export default Exercises1_6to11;