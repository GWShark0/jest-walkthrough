import React from 'react';

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 0 };

    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleIncrement() {
    this.setState({ count: this.state.count + 1 });
  }

  handleReset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        <div className="count-display">
          {this.state.count}
        </div>
        <button id="increment" onClick={this.handleIncrement}>
          +
        </button>
        <button id="reset" onClick={this.handleReset}>
          Reset
        </button>
      </div>
    )
  }
}

export default Counter;
