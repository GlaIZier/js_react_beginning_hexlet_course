import ReactDOM from 'react-dom';
import React from 'react';

// BEGIN (write your solution here)
const Header = React.createClass({
  render: function() {
    return <h1>{this.props.text}</h1>;
  }
});
// END

const text = "hello";

ReactDOM.render(
  // BEGIN (write your solution here)
  <Header text = {text}/>,
  // END
  document.getElementById('container')
);

