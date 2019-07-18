import React from "react"

const Footer = () => {
	let styles = {
		container: {
			padding: "1em 0",
			marginTop: "2em",
			width: "100%",
		},
		title: {
			textAlign: "center",
			fontSize: "14px"
		}
	}

	return (
		<div style={styles.container}>
			<p style={styles.title}>&copy; 2019 | Build with loved in jkt</p>
		</div>
	)
}

export default Footer