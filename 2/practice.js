import ReactDOM from 'react-dom';
import React from 'react';

const MyComponent = React.createClass({
  // BEGIN (write your solution here)
  render() {
    return (<b>This is my first component!</b>);
  }
  // END
})

ReactDOM.render(
  <MyComponent />,
  document.getElementById('container')
);

