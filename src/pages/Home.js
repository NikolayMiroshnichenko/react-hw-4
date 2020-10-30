import React, { Component } from "react";
import * as servisesAPI from "../services/servises-api";
import HomeList from "../Component/HomeList";

export default class Home extends Component {
  state = {
    trends: [],
  };

  componentDidMount() {
    servisesAPI.fetchTrending().then((data) =>
      this.setState({
        trends: [...data.results],
      })
    );
  }

  render() {
    const { trends } = this.state;
    return <HomeList items={trends} location={this.props.location} title={'Trending Today'}/>;
  }
}
