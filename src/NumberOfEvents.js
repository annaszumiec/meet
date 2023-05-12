import React, { Component } from "react";


class NumberOfEvents extends Component {
  state = {
    number: 32,
    errorText: ""
  }

  handleNumberChange = (event) => {
    const minValue = 0;
    const maxValue = 32;
    let inputValue = event.target.value;
    inputValue = Math.max(Number(minValue), Math.min(Number(maxValue), Number(inputValue))); // new
    this.setState({ number: inputValue });
    if (inputValue < 1 || inputValue > 32) {
      this.setState({ errorText: 'Select number from 1 to 32' });
      this.props.updateEvents(null, []);
    } else {
      this.setState({ errorText: '' });
      this.props.updateEvents(null, inputValue);
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <h3>number of events:</h3>
        <input
          id="number-of-events"
          type="number"
          className="number"
          value={this.state.number}
          onChange={this.handleNumberChange}
          min="0"
        />



      </div>
    );
  }
}

export default NumberOfEvents;