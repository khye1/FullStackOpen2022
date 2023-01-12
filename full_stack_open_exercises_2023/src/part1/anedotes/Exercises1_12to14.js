import React from 'react';
import { ReactDOM } from 'react-dom';
import { useState } from 'react';

import { Button } from './Button';
import { Anecdote } from './Anecdote';
import { random0tom } from './Utility';



const Exercises1_12to14 = (props) => {
	const { anecdotes } = props;
	const [selected, setSelected] = useState(0);
	const [points, vote_point] = useState(Array(anecdotes.length).fill(0));

	const points_copy = [...points];
	points_copy[selected] += 1;

	const indexOfMax = points.indexOf(Math.max(...points));

	return (
		<div>
			<h2>Exercise 1.12 to 1.14</h2>
			<Anecdote name={'Anecdote of the day'} anecdote={anecdotes[selected]} point={points[selected]} />

			<div>
				<Button name={'vote'} func={vote_point} value={points_copy} />
				<Button name={'next anecdote'} func={setSelected} value={random0tom(anecdotes.length)} />
			</div>

			<Anecdote name={'Anecdote with most votes'} anecdote={anecdotes[indexOfMax]} point={points[indexOfMax]} />
		</div>
	);
};

export default Exercises1_12to14;