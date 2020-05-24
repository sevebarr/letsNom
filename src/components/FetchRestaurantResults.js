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
			proxyUrl + 'https://api.yelp.com/v3/businesses/search\n?term=restaurant&limit=10&location=NYC',
			requestOptions
		);
		const theData = await response.json();
		this.setState({ restaurants: theData.businesses, loading: false });
	}

	render() {
		return (
			<div>
				{this.state.loading || !this.state.restaurants ? (
					<div>loading...</div>
				) : this.state.restaurants[this.props.currentRestaurant] ? (
					<div className="RestaurantView">
						<img
							src={this.state.restaurants[this.props.currentRestaurant].image_url}
							alt={this.state.restaurants[this.props.currentRestaurant].name}
						/>

						<h2>
							{this.state.restaurants[this.props.currentRestaurant].name} - {' '}
							{this.state.restaurants[this.props.currentRestaurant].rating} -
						</h2>
						<h3>Location: {this.state.restaurants[this.props.currentRestaurant].location.address1}</h3>
						<Actions restaurant={this.state.restaurants} modifyLists={this.props.modifyLists} />
					</div>
				) : (
					this.props.setCurrentComponent('WAIT')
				)}
			</div>
		);
	}
}
