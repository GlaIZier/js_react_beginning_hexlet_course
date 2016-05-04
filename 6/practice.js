import ReactDOM from 'react-dom';
import React from 'react';

// BEGIN (write your solution here)
const OlList = React.createClass({
  render: function() {
    // const children = this.props.children;
    // const elements = children.map((child) => {
    //   return <li>{child}</li>;
    // });
    // return (<ol>{elements}</ol>);
    return (<ol>{this.props.children.map(child => {
      return <li>{child}</li>;
    })}</ol>);
  }
});
// END

const vDom = (<OlList>
  <a className="google" href="http://google.com">google</a>
  <a className="facebook" href="https://facebook.com">facebook</a>
</OlList>)

ReactDOM.render(
  vDom,
  document.getElementById('container')
);

