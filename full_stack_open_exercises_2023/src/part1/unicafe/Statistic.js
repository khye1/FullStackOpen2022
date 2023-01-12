import React from 'react'

function Statistic(props) {
	return (
		<tr>
			<td>
				{props.text}
			</td>
			<td>
				{props.value}
			</td>
		</tr>
	)
}

export default Statistic