import React, { Component } from "react";
import Button from "./Button";
class ButtonSetFunction extends Component {
  constructor(props) {
    super(props);
    this.operatorArray = ["+", "-", "*", "/", "="];
  }

  buttonClickHandler(value) {
    this.props.clickHandler(value);
  }

  render() {
    let operatorButton = this.operatorArray.map(op => {
      return (
        <Button
          buttonClass="operator-button"
          value={op}
          key={op}
          clickHandler={this.buttonClickHandler.bind(this)}
        />
      );
    });
    return <div class="button-set-function">{operatorButton}</div>;
  }
}

export default ButtonSetFunction;
