import React, { Component } from "react";
import NavBar from "./Components/navbar";
import Counters from "./Components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 8 },
      { id: 4, value: 16 },
      { id: 5, value: 32 },
    ],
  };

  handleIncrement = (counter) => {
    // console.log(counter);
    const changedCounter = [...this.state.counters]; //changedCounter now has all data of counter as it is
    const index = changedCounter.indexOf(counter);
    changedCounter[index].value++;
    this.setState({ counters: changedCounter });
  };

  handleDelete = (counterId) => {
    // console.log(counterId);
    const changedState = this.state.counters.filter(
      (ch) => ch.id !== counterId //ch here is a random name, filter removes a value in an array
    );
    this.setState({ counters: changedState });
  };

  handleReset = () => {
    const changedCounter = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: changedCounter });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;

// function App() {

//   return (
//     <React.Fragment>
//       <NavBar />
//       <main className="container">
//         <Counters />
//       </main>
//     </React.Fragment>
//   );
// }

// export default App;
