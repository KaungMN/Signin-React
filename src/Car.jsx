import React, { Component } from "react";

export default class Car extends Component {
  render() {
    const { name } = this.props;
    const { color } = this.props;
    const { country } = this.props;
    return (
      <div>
        This car is {name}.
        <br />
        Its color is {color}.
        <br />
        The manufacturer is {country}.
      </div>
    );
  }
}
