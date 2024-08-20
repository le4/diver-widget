import React, { useState } from "react"

const CusButton = (props: { content: string }) => {
	const [count, setCount] = useState(0);
	return <div><button onClick={() => setCount(count + 1)}>count: {count}</button>
		<div>{props.content}</div>
	</div>
}

export default CusButton;