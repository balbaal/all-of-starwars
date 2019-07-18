import React from "react";
import { Link } from "react-router-dom";

import Layout from "../components/layout.component";
import Title from "../components/title.component";

class DetailMovie extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movie: {}
    };
  }

  componentDidMount() {
    const resMovie = this.props.movies.find(
      res => res.episode_id === parseInt(this.props.urlParams.episode_id)
    );
    this.setState({ movie: resMovie });
  }

  render() {
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
          director={`direct by ${this.state.movie.director}`}
          title={`Detail Movie: ${this.state.movie.title}`}
        />
        <div style={styles.container}>
          <ul>
            <li style={styles.list}>Name: {this.state.movie.producer}</li>
            <li style={styles.list}>Release Data: {this.state.movie.release_date}</li>
            <li style={styles.list}>Sysnopsis: {this.state.movie.opening_crawl}</li>
            <li style={{marginBottom: "0.5em", color: "white"}}>
              <Link to={`/characters/${this.props.urlParams.episode_id}`}>
                All Characters
              </Link>
            </li>
          </ul>
        </div>
      </Layout>
    );
  }
}

export default DetailMovie;
