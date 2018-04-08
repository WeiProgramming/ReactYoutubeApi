import React,{Component} from 'react'; 


export default class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = {term: ""};
	}

	onInputChange(event){
		this.setState(term: event.target.value);
	}

	render(){
		return (
			<div className = "text-center">
				<h3>Search: <input value = {this.state.term} onChange = {(event)=> this.setState({term:event.target.value})}/></h3>
				{this.state.term}
			</div>
		);
	}
}