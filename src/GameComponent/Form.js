import React,{Component} from 'react'
import Styled from 'styled-components'


class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            guess:'',
            background: "bg-secondary w-75 mx-auto text-center",
            numRange:100,
            results:"Start Guessing",
            rndNum:Math.floor(Math.random() * 100) + 1,
            correctList:[],
            initialUI:''
        }
        this.inputRef = React.createRef();
    }
    
      componentDidMount(){
           this.inputRef.current.focus()
      }
      handleChange = (e) => {
          this.setState({
              guess:e.target.value
          })
      }
    getCorrectValue = (val,list) =>{
        const arr = [...val,list]
        arr.map(item => {
          return  this.setState({
                background: "bg-success w-75 mx-auto text-center",
                results:"CORRECT!!!",
                // numRange: this.state.numRange + 100,
                initialUI: <NumberStyled>
                <div className="container main col-lg-6 mx-lg-auto">
                <h2 className="text-center text-white"> Guess Game</h2>
                <h5 className="text-center text-white">Range : <span>0</span> - {this.state.numRange + 100}</h5>
                <h4 className={this.state.background}>{this.state.results}</h4>
                <form onSubmit={this.handleSubmit}>
                    <input type='number' value ={this.state.guess} onChange={this.handleChange} className ="form-control w-75 mx-auto mt-3" required name="guess" /> 
                    <button type="submit"  className="btn btn-block  mt-3 mx-auto w-50 mb-4">guess</button>
            
                    </form> 
                </div>
                </NumberStyled>,
                guess:''

            })
           
        })    
    
    }
    

     handleSubmit = (e)=>{
        e.preventDefault();
        const inputGuess = e.target.elements.guess.value;
        const abs = Math.abs(this.state.rndNum - inputGuess)
        e.target.elements.guess.value = '';
        console.log(abs)
        console.log(this.state.rndNum)
        
        if (inputGuess !== '' ){
            
            // this.setState(prevState => ({
            //     background: prevState.background = "bg-danger w-75 mx-auto text-center",
                
            // }))
            if (inputGuess && abs === 0){
              console.log(this.state.correctValue + 'hello')
              console.log(this.state.guess + 'hello')
               this.getCorrectValue(this.state.correctList,this.state.rndNum)
               
            }
        
               else if (inputGuess && (abs >= 1 && abs < 4)){
                this.setState({
                    background: "bg-danger w-75 mx-auto text-center",
                    results:"HOT!!!"
                })
            }
            else if (inputGuess && (abs > 5 && abs < 15)){
                this.setState({
                    background: "bg-warning w-75 mx-auto text-center",
                    results:"WARM!!!"
                })
            }
            else if(inputGuess && abs > 15){
                this.setState({
                    background: "bg-info w-75 mx-auto text-center",
                    results:"COLD!!!"
                })
            }
            
        }
              
        this.setState({
            guess:''
        })

       
       
     }

  render(){
    
    return (
        <NumberStyled>
        <div className="container main col-lg-6 mx-lg-auto">
            <h2 className="text-center text-white"> Guess Game</h2>
    <h5 className="text-center text-white">Range : <span>0</span> - {this.state.numRange}</h5>
    <h4 className={this.state.background}>{this.state.results}</h4>
           <form onSubmit={this.handleSubmit}>
              <input type='number' ref={this.inputRef} value ={this.state.guess} onChange={this.handleChange} className ="form-control w-75 mx-auto mt-3" required name="guess" /> 
              <button type="submit"  className="btn btn-block  mt-3 mx-auto w-50 mb-4">guess</button>
    
            </form> 
        </div>
    <div>{this.state.initialUI}</div>
        </NumberStyled>
        )  
    }
}      
       
    
   


export default Form


const NumberStyled = Styled.header`
.main{
    background:linear-gradient(140deg,hotpink,aqua);
    border-radius:1rem
}
h4{
    color: white;
    height:50px;
    border-radius:10px;
    line-height:3rem
}
button{
    border:2px solid white;
    color:white;
    text-transform:uppercase;
    margin-bottom:2rem !important;
}
button:hover{
    background:aqua;
    color:hotpink;
    border:2px solid hotpink;
}
`
