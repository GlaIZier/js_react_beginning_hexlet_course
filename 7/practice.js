import ReactDOM from 'react-dom';
import React from 'react';

const Button = React.createClass({
  getInitialState() {
    // BEGIN (write your solution here)
    return {button: "unpressed"};
    // END
  },

  handleOnClick() {
    // BEGIN (write your solution here)
    this.setState({
      button: (this.state.button == "pressed") ? "unpressed" : "pressed"
    });
    // END
  },

  render() {
    // BEGIN (write your solution here)
    const className =  this.state.button;
    // END

    return (<div>
      <input type="submit" className={className} onClick={this.handleOnClick} value="push me" />
    </div>);
  }
})

ReactDOM.render(
  <Button />,
  document.getElementById('container')
);
