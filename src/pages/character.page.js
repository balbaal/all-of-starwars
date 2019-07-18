import React from "react";

import Layout from "../components/layout.component";
import Title from "../components/title.component";

class Character extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
			movie: {},
			characters: [],
			isLoading: false
    };
	}
	
	generateCharacters = (charactersInit) => {
		this.setState({isLoading: true})
		let resCharacters = charactersInit.map(async character => {
			const resCharacter = await fetch(character)
			const finalResCharacter = resCharacter.json()
			return finalResCharacter
		})

		return Promise.all(resCharacters)
	}

  componentDidMount() {
    const resMovie = this.props.movies.find(
      res => res.episode_id === parseInt(this.props.urlParams.episode_id)
    );
		this.setState({ movie: resMovie });
		
		// generate that characters
		this.generateCharacters(resMovie.characters)
			.then(resData => {
				this.setState({characters: resData})
				this.setState({isLoading: false})
			})
  }

  render() {
		console.log(this.state.characters)
    const styles = {
      container: {
        padding: "0.5em 1.5em",
        backgroundColor: "black",
        borderRadius: "3px"
      },
      list: {
        marginBottom: "0.5em"
      }
    };

    return (
      <Layout>
        <Title
          director={`from movie: ${this.state.movie.title}`}
          title={`All Characters`}
        />
        <div style={styles.container}>
          {
						this.state.isLoading ? <h2 style={{color: "yellow"}}>loading . . .</h2> :
						<ul>
            {
							this.state.characters.map((character, i) => (
								<li key={i} style={styles.list}>{character.name}</li>
							))
						}
          </ul>
					}
        </div>
      </Layout>
    );
  }
}

export default Character;
