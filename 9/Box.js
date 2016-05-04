import React from 'react';
import Item from './Item';

const Box = React.createClass({
  getInitialState() {
    // BEGIN (write your solution here)
    return {
      value: "",
      items:[]
    }
    // END
  },

  handleOnChange(e) {
    e.preventDefault();
    this.setState({value: e.target.value})
  },

  handleOnClick(e) {
    e.preventDefault();
    // BEGIN (write your solution here)
    const value = this.state.value;
    var items = this.state.items;
    items.push(value);
    this.setState({
      value: "",
      items: items
    })
    // END
  },

  render() {
    const value = this.state.value;
    const items = this.state.items;

    return (
      <div>
        <form action="">
          <input className="text" onChange={this.handleOnChange} type="text" value={value} />
          <input className="submit" onClick={this.handleOnClick} type="submit" />
        </form>

        <ul className="items">
          {items.map(function(item) {
            return <li><Item value={item} /></li>;
          })}
        </ul>
      </div>
    );
  }
});

module.exports = Box;

