import './App.css';
import { Component, useState } from 'react';

import {Todo} from './component/TodoComponent';
/*function Td1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  );
}


class Td2 extends Component {
    constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  handleClick = () => {
    this.setState((prev)=>{
    return {count:prev.count+1} })
    }

  render() {    
    return(
    <>   
      <h1>You clicked {this.state.count} times</h1>
      <button onClick={this.handleClick}>
        Click me
  </button>
     </>) 
    

  }
}*/

function App (){
  return(
    <>
    <Todo/>
    </>
  )
}

export default App;
