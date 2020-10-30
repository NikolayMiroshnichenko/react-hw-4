import React, { Component, Fragment } from "react";
import { Route, Link } from "react-router-dom";
import * as servisesAPI from "../services/servises-api";
import MovieDetails from "../Component/MovieDetails";
import Cast from "../Component/Cast";
import Reviews from "../Component/Reviews";
import Button from "../Component/Button";

export default class MovieDetailsPage extends Component {
  state = {
    item: null,
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    servisesAPI
      .fetchPrimary(id)
      .then((data) =>
        this.setState({
          item: data,
        })
      )
      .catch(console.warn);
  }
  onHandleBack = () => {
    const { location, history } = this.props;

    if(location.state) {
      return history.push(location.state.from);
    }
    history.push('/movies');
  };

  render() {
    const { item } = this.state;
    return (
      <Fragment>
        {item !== null && <MovieDetails item={item} />}
        <div className="MovieDetails-btn container ">
          <Link
            to={{
              pathname: `${this.props.match.url}/cast`,
              state: { from: this.props.location },
            }}
            className="trending-item__link"
          >
            Cast
          </Link>
          <Link
            to={{
              pathname: `${this.props.match.url}/reviews`,
              state: { from: this.props.location },
            }}
            className="trending-item__link"
          >
            Reviews
          </Link>
        </div>
        <Route path={`${this.props.match.path}/cast`} component={Cast} />
        <Route path={`${this.props.match.path}/reviews`} component={Reviews} />
        <Button onBack={this.onHandleBack} />
      </Fragment>
    );
  }
}
