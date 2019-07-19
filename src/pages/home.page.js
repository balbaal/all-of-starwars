import React from "react"
import {Link} from "react-router-dom"

import Layout from "../components/layout.component"
import Title from "../components/title.component"

class Home extends React.Component {
	render() {
		const styles = {
			container: {
				padding: "0.5em",
				margin: "0.5em 0",
				backgroundColor: "black",
				textAlign: "center",
				borderRadius: "3px",
				cursor: "pointer"
			}
		}

		return (
			<Layout>
				<Title title="List Movies" />
				{
					this.props.isLoading ? <h2 style={{color: "yellow"}}>Loading . . .</h2> :
					this.props.movies.map(movie => (
						<div key={movie.episode_id} style={styles.container}>
							<h2><Link to={`/detail-movie/${movie.episode_id}`}>{movie.title}</Link></h2>
						</div>
					))
				}
			</Layout>
		)
	}
}

export default Home