import React from 'react';

export default class SearchCriteron extends React.Component {
	state = {
		term: '',
		location: '',
		price: '',
		open: false
	};

	handleTerm = (event) => {
		this.setState({ term: event.target.value });
	};

	handleLocation = (event) => {
		this.setState({ location: event.target.value });
	};

	handleOpen = (event) => {
		this.setState({ open: event.target.checked });
	};

	handlePrice = (event) => {
		this.setState({ price: event.target.value });
	};

	replaceSpace = (string) => {
		let newString = [];
		for (let i of string) {
			i === ' ' ? newString.push('+') : newString.push(i);
		}
		return newString.join('');
	};

	myTerms = () => {
		let terms =
			(this.state.term ? '&term=restaurant+' + this.replaceSpace(this.state.term) : '&term=restaurant') +
			(this.state.location ? '&location=' + this.replaceSpace(this.state.location) : '&location=NYC') +
			(this.state.price ? '&price=' + this.state.price : '&price=1') +
			(this.state.open ? '&open=' + this.state.open : '&open=0');

		return terms;
	};

	handleSubmit = () => {
		this.props.setSearchTerms(this.myTerms());
		this.props.setCurrentComponent('RESTAURANTS');
	};

	handleTest = () => {
		console.log(this.myTerms());
	};

	render() {
		return (
			<div className="search-container container">
				<div className="search-header">
					<h2 className="title">Filter Criteria</h2>
					<p className="random-paragraph">You want to eat? Let's pick a place to eat.</p>
				</div>
				<div className="search-sub search_term ">
					<label htmlFor="term">Search: </label>
					<input value={this.state.term} onChange={this.handleTerm} type="text" id="term" name="term" />
				</div>

				<div className="search-sub location">
					<label htmlFor="term">Location: </label>
					<input
						value={this.state.location}
						onChange={this.handleLocation}
						type="text"
						id="location"
						name="location"
					/>
				</div>

				<div className="search-sub price ">
					<label htmlFor="price">Price: </label>
					<select value={this.state.price} onChange={this.handlePrice}>
						<option value="1">$</option>
						<option value="2">$$</option>
						<option value="3">$$$</option>
						<option value="4">$$$$</option>
					</select>
				</div>

				<div className="search-sub open_now ">
					<label htmlFor="open_now">Open Now: </label>
					<input
						type="checkbox"
						checked={this.state.open}
						onChange={this.handleOpen}
						id="open_now"
						name="open_now"
					/>
				</div>

				<div className="search-sub submit">
					<button className="btn btn-primary btn-lg btn-block" type="button" onClick={this.handleSubmit}>
						Submit
					</button>
				</div>
				<div className="search-sub TEST_BUTTON">
					<button className="btn btn-primary btn-lg btn-block" type="button" onClick={this.handleTest}>
						Test
					</button>
				</div>
			</div>
		);
	}
}
