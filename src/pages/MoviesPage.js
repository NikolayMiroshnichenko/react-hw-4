import React, { Component, Fragment } from "react";
import queryString from "query-string";
import Search from "../Component/Search";
import * as servisesAPI from "../services/servises-api";
import HomeList from "../Component/HomeList";

export default class MoviesPage extends Component {
  state = {
    items: [],
  };

  componentDidMount() {
    const queryParams = queryString.parse(this.props.location.search);

    if (!queryParams.qvery) return;

    servisesAPI
      .searchMovies(queryParams.qvery)
      .then((data) =>
        this.setState({
          items: [...data.results],
        })
      )
      .catch(console.warn);
  }

  hendleOnSubmit = (qvery) => {
    servisesAPI
      .searchMovies(qvery)
      .then((data) =>
        this.setState({
          items: [...data.results],
        })
      )
      .catch(console.warn);

    this.onQveryChange(qvery);
  };

  onQveryChange = (qvery) => {
    this.props.history.push({
      pathname: this.props.location.pathname,
      search: `qvery=${qvery}`,
    });
  };

  render() {
    const { items } = this.state;
    return (
      <Fragment>
        <div className="container">
          <Search onSubmit={this.hendleOnSubmit} />
        </div>
        {items.length > 0 && (
          <HomeList items={items} location={this.props.location} title={'Result'} />
        )}
      </Fragment>
    );
  }
}
