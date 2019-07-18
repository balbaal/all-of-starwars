import React from "react"
import {Link} from "react-router-dom"

import logos from "../assets/Star_Wars_logo-1.png"
import "./header.style.css"

const Header = () => (
	<div className="header">
		<Link to="/"><img alt="logo" src={logos} /></Link>
	</div>
)

export default Header