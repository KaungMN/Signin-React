// import React, { Component } from "react";

// export default class Car extends Component {
//   constructor(props) {
//     console.log(props);
//     super(props);
//     this.state = { engine: "V8" };
//   }
//   render() {
//     const { name } = this.props;
//     const { color } = this.props;
//     const { country } = this.props;
//     const handleChangeEngine = () => this.setState({ engine: "B12" });
//     return (
//       <div onClick={handleChangeEngine}>
//         This car is {name}.
//         <br />
//         Its color is {color}.
//         <br />
//         The manufacturer is {country}.
//         <br />
//         Its engine is {this.state.engine}.
//       </div>
//     );
//   }
// }

// import React from "react";

// function Car(props) {
//   return (
//     <div>
//       This car is {props.name}.<br />
//       Its color is {props.color}.<br />
//       It was manufactured in {props.country}.
//     </div>
//   );
// }

// export default Car;
// import React, { Component } from "react";

// export default class Car extends Component {
//   constructor(props) {
//     console.log(props);
//     super(props);
//     this.state = { horsePower: props.engine };
//   }
//   render() {
//     const { name, country, color } = this.props;
//     const handleChangeYear = () => this.setState({ horsePower: "BB9A" });
//     return (
//       <div onClick={handleChangeYear}>
//         This car is {name}.<br />
//         Its color is {color}.<br />
//         It was manufactured in {country}.<br />
//         Its engine is {this.state.horsePower}.
//       </div>
//     );
//   }
// }
import React, { Component } from "react";

export default class Car extends Component {
  constructor(props) {
    super(props);
    this.state = { horsePower: this.props.engine };
  }
  render() {
    const { name, color, country, engine } = this.props;
    const handleChangeEngine = () => this.setState({ horsePower: "VK16" });
    console.log(this.state);
    return (
      <div onClick={handleChangeEngine}>
        My car is a {name}.<br />
        It is {color} and was manufactured in {country}. <br />
        The engine of my car is {this.state.horsePower}.
      </div>
    );
  }
}
