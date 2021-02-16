import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement('h1', {}, "An Awesome Person")
const paragraph = React.createElement('p', {}, "Who is learning React")
const list = React.createElement('ul', {className: 'my-interests'}, [
  ])

ReactDOM.render(
  meInReact,
  document.getElementById('global')
);

export default meInReact

