import ReactDOM from 'react-dom';
import React from 'react';

const MyComponent = React.createClass({
  render: function() {
    const pInnerText = {__html: '<b>hello</b>'};
    // BEGIN (write your solution here)
    const h1 = <h1 className = 'header'></h1>;
    const p = <p className = 'text' dangerouslySetInnerHTML = {pInnerText}></p>;
    return <div>{h1}{p}</div>;
    // END
  }
})

const vDom = (<MyComponent>
  <a className="google" href="http://google.com">google</a>
  <a className="facebook" href="https://facebook.com">facebook</a>
</MyComponent>);

ReactDOM.render(
  vDom,
  document.getElementById('container')
);

