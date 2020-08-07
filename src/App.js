import React,{Component} from 'react';
import { MDBContainer} from "mdbreact";
import Player from './components/Player'
import "./App.css";
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      board : Array(9).fill(null),
      player : null,
      winner : null
    }
  }
  checkW(){
    let winl = [
      ["0","1","2"],
      ["3","4","5"],
      ["6","7","8"],
      ["0","3","6"],
      ["1","4","7"],
      ["2","5","8"],
      ["0","4","8"],
      ["2","4","6"],
    ]
      this.checkMatch(winl)
   
  }
  checkMatch(winl){
        let board = this.state.board
      for(let index =0; index<winl.length; index++){
      const [a,b,c] = winl[index]
      if(board[a] && board[a]===board[b] && board[a] === board[c]){
        alert("you won bravooooooo")
        this.setState({
          winner: this.state.player
        })
        break;
      }
      else if(!board.includes(null) && this.state.winner ==null){
        this.setState({
          winner: "draw"
        })
    }
    }
  }
  handleChange(index){
    if(this.state.player && !this.state.winner){
    let newb = this.state.board;
    if(this.state.board[index]===null){
      newb[index] = this.state.player;
      let newp = this.state.player === 'X'?'O':'X'
      this.setState({
        board : newb,
        player : newp
      })
      this.checkW()
    }
  }
    console.log(this.state.board)
    console.log(this.state.player)
  }
  setPlayer(player){
      this.setState({
          player : player
      })
  }
  reset() {
    this.setState({
      player: null,
      winner: null,
      board: Array(9).fill(null)
    })
  }
  render(){
    const Box = this.state.board.map(
      (box,index) => 
      <div className="box" 
      key = {index} 
      onClick={()=>this.handleChange(index)}>
      {box}
      </div> 
    )
    let status = this.state.player ? (this.state.winner ? (this.state.winner==="draw" ? <h2 class="draw">Draw....</h2> :<h2 class="win">winner is {this.state.winner}</h2>):<h2> Next player is {this.state.player}</h2>):<Player player = {(e)=> this.setPlayer(e)}/>
  return (
    <MDBContainer>
      <h1>Tic Tac Toe App</h1>
      {status}
      <div className="board">
        {Box}
      </div>
       <button  class="bt" disabled={!this.state.winner} onClick={() => this.reset()}> Reset</button >
    </MDBContainer>
  );
}
}

export default App;
