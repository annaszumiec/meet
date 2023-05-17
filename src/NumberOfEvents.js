import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  constructor() {
    super();
    this.state = {
      query: 32,
      errorText: "",
    };
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    if (value >= 1 || value <= 32) {
      this.setState({
        query: value,
        errorText: "",
      });
      this.props.updateEvents(this.props.selectedCity, value);
    }
    if (value < 1 || value > 32) {
      this.setState({
        query: value,
        errorText: "Please enter a valid number: 1 to 32",
      });
    }
  };

  render() {
    return (
      <div className='numberOfEvents'>
        <h4> Number Of Events </h4>
        <ErrorAlert className='errorMessage' text={this.state.errorText} />
        <input
          type='number'
          className='numberOfEvents'
          min={1}
          max={32}
          value={this.state.query}
          onChange={this.handleInputChanged}
        />

      </div>
    );
  }
}

export default NumberOfEvents;