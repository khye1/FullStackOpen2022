import React from 'react';
import { setToValue } from './Utility';

function Button(props) {
	return (
		<button onClick={setToValue(props.func, props.value + 1)}>
			{props.name}
		</button>
	);
}

export default Button;