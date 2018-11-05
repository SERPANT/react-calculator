import React, { Component } from "react";

class InputField extends Component {
  update(e) {
    this.props.update(e.target.value);
  }

  showValue() {
    if (this.props.currentNo === 1) {
      return this.props.first;
    } else {
      return this.props.second;
    }
  }

  render() {
    return (
      <div>
        <input
          type="textbox"
          value={this.showValue()}
          onChange={this.update.bind(this)}
          className="input-field"
        />
      </div>
    );
  }
}

export default InputField;
