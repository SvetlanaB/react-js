import React, {Component} from 'react';
import ReactDom from 'react-dom';
import Developer from './Developer';

import './style.css';

class App extends Component {
  render() {
    return (
      <Developer name='John'/>
    );
  }
}

export default App;