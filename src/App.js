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
  
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/detail-movie" component={DetailMovie} />
            <Route path="/characters" component={Characters} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
