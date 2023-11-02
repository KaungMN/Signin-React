// import { getValue } from "@testing-library/user-event/dist/utils";
// import React from "react";

// function App() {
//   const fruits = ["Orange", "Apple", "Strawberry"];
//   let text = "Hello";
//   const num = 5;
//   if (num > 5) {
//     text = "Goodbye";
//   }
//   if (num == 5) {
//     text = "Okay";
//   }
//   if (num < 5) {
//     text = "Gone";
//   }
//   return (
//     <div>
//       {fruits.map((value) => (
//         <p>{value}</p>
//       ))}
//       {new Date().toString}
//       <br></br>
//       {"false"}
//       <br></br>
//       {text}
//       <br></br>
//       {num > 5 ? "Hello" : "Goodbye"}
//       {num == 5 ? "Hello" : "Okay"}
//       {num < 5 ? "Hello" : "Gone"}
//     </div>
//   );
// }

// export default App;
import React from "react";
import Car from "./Car";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Car name="BMW" color="red" country="Germany" engine="V8" />
        <br />
        <Car name="Toyota" color="black" country="Japan" engine="V8" />
      </div>
    );
  }
}
