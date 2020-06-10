import React from 'react';
import Actions from './Actions';

// could also set as const and then export class at the bottom
export default class FetchRestaurantResults extends React.Component {
	state = {
		loading: true,
		restaurants: []
	};

	//only class components can use lifecycle methods
	async componentDidMount() {
		var myHeaders = new Headers();
		myHeaders.append('Authorization', process.env.REACT_APP_YELP_API_KEY);

		var requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};

		//TO DO - find a way to use this without proxying, this will not work if the app is distributed
		var proxyUrl = 'https://cors-anywhere.herokuapp.com/';

		const response = await fetch(
			proxyUrl +
				'https://api.yelp.com/v3/businesses/search\n?categories=restaurants+cafes&limit=10' +
				this.props.searchTerms,
			requestOptions
		);
		const theData = await response.json();
		this.setState({ restaurants: theData.businesses, loading: false });

		this.props.setRestaurantList(theData.businesses);

		console.log(
			proxyUrl +
				'https://api.yelp.com/v3/businesses/search\n?categories=restaurants+cafes&limit=10' +
				this.props.searchTerms
		);
	}

	render() {
		return (
			<div className='v'>
				{this.state.loading || !this.state.restaurants ? (
					<div className="container-fluid">
						<div className="jumbotron vertical-center align-items-center">
							<div className="container">Finding some places that match your criteria... 😋</div>
						</div>
					</div>
				) : this.state.restaurants[this.props.currentRestaurant] ? (
					<div className="RestaurantView mb-5">
						<img
							className="restaurant-img img-fluid w-100"
							src={this.state.restaurants[this.props.currentRestaurant].image_url}
							alt={this.state.restaurants[this.props.currentRestaurant].name}
						/>

						<a className="display-4" href={this.state.restaurants[this.props.currentRestaurant].url}>
							{this.state.restaurants[this.props.currentRestaurant].name}
						</a>
						<div>
							Rating: <strong>{this.state.restaurants[this.props.currentRestaurant].rating}</strong> ({this.state.restaurants[this.props.currentRestaurant].review_count}{' '}
							reviews)
						</div>
						<div>
							Location: {
								this.state.restaurants[this.props.currentRestaurant].location.display_address[0]
							}, {this.state.restaurants[this.props.currentRestaurant].location.display_address[1]}
						</div>
						<Actions
							restaurant={this.state.restaurants[this.props.currentRestaurant]}
							modifyLists={this.props.modifyLists}
						/>
					</div>
				) : (
					this.props.setCurrentComponent('WAIT')
				)}
			</div>
		);
	}
}
