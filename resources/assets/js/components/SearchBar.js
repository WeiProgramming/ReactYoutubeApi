import React,{Component} from 'react'; 


export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {term: ""};
	}

	render(){
		return (
			<div className = "text-center">
				<h3>Search: 
					<input value = {this.state.term} onChange = {
						(event)=> {this.setState({
							term:event.target.value});
							this.props.onInputChange(event.target.value);
						}
					}
					/>
				</h3>
			</div>
		);
	}
}