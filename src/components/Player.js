import React,{Component} from 'react';

class Player extends Component{
	handleform(e){
			e.preventDefault();
			this.props.player(e.target.player.value);
		}
	render(){

		return(
				<div>
				<div class="choose"> choose player</div>
				<form onSubmit = {(e) => this.handleform(e)}>
				<label>
						Player X
						<input type="radio" name="player" value="X"/>
				</label>
				<label>
						Player O
						<input type="radio" name="player" value="O"/>
				</label>
						<input type="submit" class="bt" value="Start"/>
				</form>
				</div>
			)
	}
}
export default Player;