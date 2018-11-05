import React, { Component } from "react";
import Button from "./Button";
class ButtonSetEquations extends Component {
  constructor(props) {
    super(props);
    this.equation = ["RECALL", "CLEAR", "BACK"];
  }

  buttonClickHandler(value) {
    this.props.clickHandler(value);
  }

  render() {
    let buttonEquation = this.equation.map(eq => {
      return (
        <Button
          buttonClass="equation-button"
          key={eq}
          clickHandler={this.buttonClickHandler.bind(this)}
          value={eq}
        />
      );
    });
    return <div className="button-set-equation">{buttonEquation}</div>;
  }
}

export default ButtonSetEquations;
