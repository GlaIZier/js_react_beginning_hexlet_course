import ReactDOM from 'react-dom';
import React from 'react';

const text = "hello";

const MyComponent = React.createClass({
  render: function() {
    const header = this.props.header;
    // BEGIN (write your solution here)
    return <div>{ header ? <h1>{text}</h1> : <b>{text}</b>}</div>;
    // END
  }
})

ReactDOM.render(
  <MyComponent />,
  document.getElementById('example')
);

ReactDOM.render(
  <MyComponent header />,
  document.getElementById('example2')
);

