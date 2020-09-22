import React, { Component } from "react";

class Counter extends Component {
  //State of counter is removedd to eable single source of truth i.e. removing the lpcal vafriables now we only cahnge
  //and access same variables present in counters
  /*state = {
    value: this.props.counter.value,
    // tags: ["tag1", "tag2", "tag3"],
  };*/
  //   renderTags() {
  //     if (this.state.tags.length === 0) return <p>There are no tags! </p>;
  //     return (
  //       <ul>
  //         {this.state.tags.map((tag) => (
  //           <li key={tag}>{tag}</li>
  //         ))}
  //       </ul>
  //     );
  //   }
  /*constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }*/
  /*handleIncrement = () => {
    // console.log(product);
    this.setState({ value: this.state.value + 1 });
  };*/
  render() {
    //console.log(this.props);
    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => this.props.onIncrement(this.props.counter)}
        >
          Add
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Remove
        </button>
        {/* {this.renderTags()} */}
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
