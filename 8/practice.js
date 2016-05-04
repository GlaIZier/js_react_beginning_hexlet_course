import ReactDOM from 'react-dom';
import React from 'react';

const Form = React.createClass({
  // HINT: getInitialState
  // BEGIN (write your solution here)
  getInitialState: fucntion() {
    return: {
      value: "",
      newForm: true
    }
  }
  // END

  handleOnSubmit(e) {
    e.preventDefault();
    // BEGIN (write your solution here)
    this.setState({
      newForm: false
    })
    // END
  },

  // HINT: handleOnClick
  // BEGIN (write your solution here)
  handleOnClick(e) {
    this.setState({
      value: "",
      newForm: true
    })
  }
  // END

  handleOnChange(e) {
    e.preventDefault();
    // BEGIN (write your solution here)
    this.setState({
      value: e.target.value
    });
    // END
  },

  render() {
    // BEGIN (write your solution here)
    const value = this.state.value;
    const newForm = this.state.newForm;
    // END

    if (newForm) {
      return (
        <form onSubmit={this.handleOnSubmit}>
          <input className="text" type="text" value={value} onChange={this.handleOnChange} />
          <input className="submit" type="submit" />
        </form>
      );
    } else {
      return (
        <div>
          <div className="value">{value}</div>
          <button className="reset" onClick={this.handleOnClick}>Reset</button>
        </div>
      );
    }
  }
})

ReactDOM.render(
  <Form />,
  document.getElementById('container')
);

