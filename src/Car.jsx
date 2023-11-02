import React, { Component } from "react";

export default class Car extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = { engine: "V8" };
  }
  render() {
    const { name } = this.props;
    const { color } = this.props;
    const { country } = this.props;
    const handleChangeEngine = () => this.setState({ engine: "B12" });
    return (
      <div onClick={handleChangeEngine}>
        This car is {name}.
        <br />
        Its color is {color}.
        <br />
        The manufacturer is {country}.
        <br />
        Its engine is {this.state.engine}.
      </div>
    );
  }
}
