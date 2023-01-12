import { setToValue } from "./Utility";

const Button = (props) => {
	return (
		<button onClick={setToValue(props.func, props.value)}>
			{props.name}
		</button>
	);
};

export { Button };