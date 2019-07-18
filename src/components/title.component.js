import React from "react"

const Title = (props) => {
	let styles = {
		container: {
			margin: "1em 0",
			paddingBottom: "0.5em",
			borderBottom: "2px solid grey"
		}
	}

	return (
		<div style={styles.container}>
			<p>{props.director}</p>
			<h1 style={{letterSpacing: "3px"}}>{props.title}</h1>
		</div>
	)
}

export default Title