import React, { Component } from "react";

export default class Search extends Component {
  state = {
    qvery: "",
  };

  hendleOnChenge = (e) => {
    this.setState({
      qvery: e.target.value,
    });
  };

  hendleSubmit = (e) => {
    e.preventDefault();

    if (this.state.qvery === "") return;

    this.props.onSubmit(this.state.qvery);
    this.reset();
  };

  reset = () => {
    this.setState({
      qvery: "",
    });
  };

  render() {
    const { qvery } = this.state;
    return (
      <form onSubmit={this.hendleSubmit} className='form'>
        <input
          type="text"
          name="search"
          value={qvery}
          placeholder="Search"
          onChange={this.hendleOnChenge}
        />
        <button type="submit">Search</button>
      </form>
    );
  }
}
