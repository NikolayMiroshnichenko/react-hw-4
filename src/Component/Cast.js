import React, { Component } from "react";
import * as servisesAPI from "../services/servises-api";

export default class Cast extends Component {
  state = {
    cast: [],
  };

  componentDidMount() {
    const id = this.props.match.params.id;

    servisesAPI.fetchCredits(id).then((data) =>
      this.setState({
        cast: [...data.cast],
      })
    );
  }
  


  render() {
    const { cast } = this.state;
    return (
      <div className="container">
        <ul className="cast">
          {cast.map((item) => (
            <li key={item.cast_id} className="cast-item">
              {item.profile_path !== null && (
                <img
                  src={`http://image.tmdb.org/t/p/w300${item.profile_path}`}
                  width="140"
                  alt=""
                />
              )}
              <h2>{item.name}</h2>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
