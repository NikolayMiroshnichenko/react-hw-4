import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import Loading from '../Component/Loading'
import Nav from './Nav'

const AsuncHome = Loadable({
  loader: () => import('../pages/Home' /* webpackChunkName: "home-page"*/),
  delay: 100,
  loading: Loading, 
})
const AsuncMoviesPage = Loadable({
  loader: () => import('../pages/MoviesPage' /* webpackChunkName: "movies-page"*/),
  delay: 100,
  loading: Loading, 
})
const AsuncMovieDetailsPage = Loadable({
  loader: () => import('../pages/MovieDetailsPage' /* webpackChunkName: "movie-details-page"*/),
  delay: 100,
  loading: Loading, 
})


export default class App extends Component {
  render() {
    return (
      <section>
        <Nav />
        <Switch>
          <Route path="/" exact component={AsuncHome} />
          <Route path="/movies/:id" component={AsuncMovieDetailsPage} />
          <Route path="/movies" component={AsuncMoviesPage} />
        </Switch>
      </section>
    );
  }
}
