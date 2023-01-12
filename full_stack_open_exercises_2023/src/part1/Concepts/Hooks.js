import React, { useEffect } from 'react';
import { useState } from 'react';


function Hooks() {

	// these are ok
	const [age, setAge] = useState(0);
	const [name, setName] = useState('Juha Tauriainen');
	
	
	// useEffect(() => {
	// 	if (age) {
	// 		setFoobar("aaaa");
	// 	}
	// }, [age])
	


	if (age > 10) {
		// this does not work!
		// const [foobar, setFoobar] = useState(null);
	}

	for (let i = 0; i < age; i++) {
		// also this is not good
		// const [rightWay, setRightWay] = useState(false);
	}

	const notGood = () => {
		// and this is also illegal
		// const [x, sX] = useState(-1000);
	};



	return (
		<div>Hooks</div>
	);
}

export default Hooks;