import React, { Component } from "react";
import InputField from "./components/InputField";
import NumberPad from "./components/NumberPad";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: 0,
      secondNumber: 0,
      currentNo: 1,
      sign: "+"
    };
  }

  clearAll() {
    this.setState({
      firstNumber: 0,
      secondNumber: 0,
      currentNo: 1,
      sign: "+"
    });
  }

  updateFirstNumber(newValue) {
    this.setState({ firstNumber: newValue });
  }

  saveSign(value) {
    this.setState({ sign: value });
  }

  updateSecondNumber(newValue) {
    this.setState({ secondNumber: newValue });
  }

  updateNumber(value) {
    if (this.state.currentNo === 1) {
      let updatedValue = parseInt(this.state.firstNumber) * 10 + value;
      this.updateFirstNumber(updatedValue);
    } else {
      let updatedValue = parseInt(this.state.secondNumber) * 10 + value;
      this.updateSecondNumber(updatedValue);
    }
  }

  stateChangeToSecond() {
    this.setState({ currentNo: 2 });
  }

  stateChangeToOne() {
    this.setState({ currentNo: 1 });
  }

  computeResult() {
    let first = parseInt(this.state.firstNumber);
    let second = parseInt(this.state.secondNumber);

    let result;
    switch (this.state.sign) {
      case "+":
        result = first + second;

        break;
      case "-":
        result = first - second;
        break;
      case "*":
        result = first * second;
        break;
      case "/":
        result = first / second;
        break;
    }

    this.setState({ firstNumber: 0, secondNumber: 0 }, () => {
      this.updateNumber(result);
    });
  }

  buttonClickHandler(value) {
    if (value === "+" || value === "-" || value === "*" || value === "/") {
      this.stateChangeToSecond();
      this.saveSign(value);
    } else if (value === "CLEAR") {
      this.clearAll();
      this.stateChangeToOne();
    } else if (value === "=") {
      this.setState({ currentNo: 1 }, this.computeResult.bind(this));
    } else if (typeof value === "number") {
      this.updateNumber(value);
    }
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <InputField
            first={this.state.firstNumber}
            second={this.state.secondNumber}
            currentNo={this.state.currentNo}
            update={this.updateNumber.bind(this)}
          />
          <NumberPad clickHandler={this.buttonClickHandler.bind(this)} />
        </div>
      </div>
    );
  }
}

export default App;
