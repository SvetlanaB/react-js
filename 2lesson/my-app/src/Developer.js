import React from 'react';
import ReactDom from 'react-dom';

class Developer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h2>Hello, {this.props.name}!</h2>
  }
} 

// const elem = <Developer name='John'/>

// ReactDOM.render(<Developer/>, document.querySelector('#root'));
export default Developer;