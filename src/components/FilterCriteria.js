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
			<div className="search-container container rounded">
				<div className="search-header rounded">
					<h2 className="title">Filter Criteria</h2>
					<p className="random-paragraph">You want to eat? Let's pick a place to eat.</p>
				</div>

				<form>
					<div className="form-group">
						<div className="search-sub search_term ">
							<label htmlFor="term">Search: </label>
							<input
								className="form-control"
								value={this.state.term}
								onChange={this.handleTerm}
								type="text"
								id="term"
								name="term"
								placeholder="Burgers, Pizza, Sushi etc..."
							/>
						</div>

						<div className="search-sub location">
							<label htmlFor="term">Location: </label>
							<input
								className="form-control"
								value={this.state.location}
								onChange={this.handleLocation}
								type="text"
								id="location"
								name="location"
								placeholder="Brooklyn, Mission District, etc..."
							/>
						</div>

						<div className="search-sub ">
							<label for="inputPrice">Price:</label>

							<select
								className="form-control"
								id="inputPrice"
								value={this.state.price}
								onChange={this.handlePrice}
							>
								<option value="1">$</option>
								<option value="2">$$</option>
								<option value="3">$$$</option>
								<option value="4">$$$$</option>
							</select>
						</div>

						<div className="search-sub open_now ">
							<input
								type="checkbox"
								className="form-check-input"
								checked={this.state.open}
								onChange={this.handleOpen}
								id="open_now"
								name="open_now"
							/>
							<label htmlFor="open_now">Open Now</label>
						</div>

						<div className="search-sub submit">
							<button
								className="btn btn-primary btn-lg btn-block"
								type="button"
								onClick={this.handleSubmit}
							>
								Submit
							</button>

							<button
								className="btn btn-block btn-lg btn-warning"
								type="button"
								onClick={this.handleTest}
							>
								Test
							</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}
