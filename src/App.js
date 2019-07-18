import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom"

import "./App.css";
import Home from "./pages/home.page"
import DetailMovie from "./pages/detailMovie.page"
import Characters from "./pages/character.page"

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      movieList: []
    }
  }

  componentDidMount() {
    fetch("https://swapi.co/api/films/")
      .then(res => res.json())
      .then(resFinal => this.setState({movieList: resFinal.results}))
  }
  
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={() => <Home movies={this.state.movieList} />} />
            <Route path="/detail-movie/:episode_id" component={(props) => <DetailMovie urlParams={props.match.params} movies={this.state.movieList} />} />
            <Route path="/characters/:episode_id" component={(props) => <Characters urlParams={props.match.params} movies={this.state.movieList} />} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
