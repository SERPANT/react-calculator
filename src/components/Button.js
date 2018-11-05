import React, { Component } from "react";

class Button extends Component {
  compute() {
    this.props.clickHandler(this.props.value);
  }

  render() {
    return (
      <button
        className={this.props.buttonClass}
        onClick={this.compute.bind(this)}
      >
        {this.props.value}
      </button>
    );
  }
}

export default Button;
