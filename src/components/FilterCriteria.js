import React, { Component } from 'react';

// ### TO DO
// - Take in filter criteria
// - Append filter criteria
// - Pass criteria to fetch componennt

export default class SeachCriteron extends React.Component {
	state = {
		term: '',
		price: 1,
		open: false
	};

	handleTerm = (event) => {
		this.setState({ term: event.target.value });
	};

	handleOpen = (event) => {
		this.setState({ open: event.target.checked });
	};

	handlePrice = (event) => {
		this.setState({ price: event.target.value });
	};
	myTerms = () => {
		let terms = 'term=' + this.state.term + '&price=' + this.state.price + '&open_now=' + this.state.open;
		console.log(terms);
	};

	handleSubmit = () => {
		this.myTerms();
		//this.props.setCurrentComponent('RESTAURANTS');
	};
	render() {
		return (
			<div class="search_criteron">
				Filter Criteria
				<div id="search_term">
					<label for="term">Search: </label>
					<input value={this.state.term} onChange={this.handleTerm} type="text" id="term" name="term" />
				</div>
				<div id="price">
					<label for="price">Price: </label>
					<select value={this.state.price} onChange={this.handlePrice}>
						<option value="1">$</option>
						<option value="2">$$</option>
						<option value="3">$$$</option>
						<option value="4">$$$$</option>
					</select>
				</div>
				<div id="open_now">
					<label for="open_now">Open Now: </label>
					<input
						type="checkbox"
						checked={this.state.open}
						onChange={this.handleOpen}
						id="open_now"
						name="open_now"
					/>
				</div>
				<div id="submit">
					<button type="button" onClick={this.handleSubmit}>
						Submit
					</button>
				</div>
			</div>
		);
	}
}
