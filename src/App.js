import React, {Component} from 'react';
import Form from './GameComponent/Form';



class App extends Component {
  // state = {
  //   guess:null,
  //   diffs:null,
  //   numRange:100,
  //   rndNum:rndNum()
  // }
  // updateState = (inputGuess) =>{
  //  console.log(inputGuess + "APPG");
  //  console.log(this.state.rndNum + 'APP')
  
  //   const abs = Math.abs(this.state.rndNum - inputGuess)
  //   this.setState({
  //     guess:inputGuess,
      
  //   })
  // console.log("diff APP " + this.state.diff)
  // console.log("diffclassabs " + abs)

    
  // }
  render(){
    return (
      <div className="App">
        
  
      
        <Form/>
      </div>
    );
  }
  
}

export default App;
