import React, { Component } from "react";
import * as servisesAPI from "../services/servises-api";

export default class Reviews extends Component {
  state = {
    reviews: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    servisesAPI.fetchReviews(id).then((data) =>
      this.setState({
        reviews: data.results,
      })
    );
  }

  render() {
    const { reviews } = this.state;
    return (
      <div className="container">
        <ul className="reviews-list">
          {reviews.length > 0 &&
            reviews.map((item) => {
              return (
                <li key={item.id} className="reviews-list__item">
                  <h2 className="reviews-list__title">Autor: {item.author}</h2>
                  <p>{item.content}</p>
                </li>
              );
            })}
        </ul>
        <div>
          {reviews.length === 0 && (
            <h2 className="reviews-list__title">Данных нет :(</h2>
          )}
        </div>
      </div>
    );
  }
}
