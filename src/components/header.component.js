import React from "react"

import logos from "../assets/Star_Wars_logo-1.png"
import "./header.style.css"

const Header = () => (
	<div className="header">
		<img alt="logo" src={logos} />
	</div>
)

export default Header