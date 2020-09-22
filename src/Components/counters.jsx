import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {};
  render() {
    return (
      <div>
        <button
          className="btn btn-primary btn-sm m-2"
          onClick={this.props.onReset}
        >
          Reset
        </button>
        {this.props.counters.map((counter) => (
          <Counter
            key={counter.id} //key is important for react backend even though key and id here are same
            // id={counter.id}
            // value={counter.value}
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            // selected={true}
            counter={counter} //automatically sents counter state to counter.jsx as prop preventing seperately sending all states however functions tsill needed to send manually
          >
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
