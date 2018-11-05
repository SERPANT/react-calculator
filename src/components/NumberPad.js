import React, { Component } from "react";
import ButtonSetNumbers from "./ButtonSetNumbers";
import ButtonSetEquations from "./ButtonSetEquations";
import ButtonSetFunction from "./ButtonSetFunction";

class NumberPad extends Component {
  buttonClickHandler(value) {
    this.props.clickHandler(value);
  }

  render() {
    return (
      <div class="number-pad">
        <div className="clearfix">
          <div className="number-equation-button">
            <ButtonSetNumbers
              clickHandler={this.buttonClickHandler.bind(this)}
            />
            <ButtonSetEquations
              clickHandler={this.buttonClickHandler.bind(this)}
            />
          </div>
          <ButtonSetFunction
            clickHandler={this.buttonClickHandler.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default NumberPad;
