import React from 'react';

// BEGIN (write your solution here)
const Item = React.createClass({
  render: function() {
    return <div>{this.props.value}</div>
  }
})
// END

module.exports = Item;

