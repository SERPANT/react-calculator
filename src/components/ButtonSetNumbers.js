import React, { Component } from "react";
import Button from "./Button";
class ButtonSetNumbers extends Component {
  constructor(props) {
    super(props);
    this.numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  }

  buttonClickHandler(value) {
    this.props.clickHandler(value);
  }

  render() {
    let numberButtons = this.numberArray.map(number => {
      return (
        <Button
          buttonClass="number-button"
          value={number}
          key={number}
          clickHandler={this.buttonClickHandler.bind(this)}
        />
      );
    });
    return <div className="button-set-number">{numberButtons}</div>;
  }
}

export default ButtonSetNumbers;
