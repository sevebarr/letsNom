import React, { useState } from 'react';
import Header from './components/Header';

//import FoodsView from './components/zDEPRECATED.FoodsView';
import AwaitingFriends from './components/AwaitingFriends';
////import data from './data.json';
import FetchRestaurantResults from './components/FetchRestaurantResults.js';
import FilterCritera from './components/FilterCriteria';
import './App.css';

function App() {
	//const restaurant = data;
	const [ searchTerms, setSearchTerms ] = useState('');
	const [ currentComponent, setCurrentComponent ] = useState('SEARCH');
	const [ currentRestaurant, setCurrentRestaurant ] = useState(0);
	const [ likedRestaurants, setLikedRestaurants ] = useState([]);
	const [ dislikedRestaurants, setDislikedRestaurants ] = useState([]);
	const [ superlikedRestaurants, setSuperlikedRestaurants ] = useState([]);
	const [ lastRestaurant, setLastRestaurant ] = useState();

	// These useState set the intitial state of the first item and how to change it in the second
	// useState doesn't work in a class component, only function component

	// initializing to empty arrays which can be updated with hooks(useState)
	const newLikedRestaurants = [ ...likedRestaurants ];
	const newDislikedRestaurants = [ ...dislikedRestaurants ];
	const newSuperlikedRestaurants = [ ...superlikedRestaurants ];

	const removeFromList = (list, restaurantId) => list.filter((res) => res.id !== restaurantId);
	//takes in list and restId
	//filter from list - keep rest.id !== restaurantId

	// TO DO switch case for each component
	//const modifyComponent = comp;

	// mass method used for actions
	// TO DO THIS IS BROKEN, needs to be fixed
	const modifyLists = (restaurantId, action) => {
		switch (action) {
			case 'LIKE_RESTAURANT':
				//newLikedRestaurants.push(data[restaurantId]);
				setCurrentRestaurant(currentRestaurant + 1);
				setLikedRestaurants(newLikedRestaurants);
				setLastRestaurant(restaurantId);
				break;

			case 'DISLIKE_RESTAURANT':
				//newDislikedRestaurants.push(data[restaurantId]);
				setCurrentRestaurant(currentRestaurant + 1);
				setDislikedRestaurants(newDislikedRestaurants);
				setLastRestaurant(restaurantId);
				break;

			case 'SUPERLIKE_RESTAURANT':
				//newSuperlikedRestaurants.push(data[restaurantId]);
				setCurrentRestaurant(currentRestaurant + 1);
				setSuperlikedRestaurants(newSuperlikedRestaurants);
				setLastRestaurant(restaurantId);
				break;

			case 'REWIND_RESTAURANT':
				setLikedRestaurants(removeFromList(newLikedRestaurants, lastRestaurant));
				setDislikedRestaurants(removeFromList(newDislikedRestaurants, lastRestaurant));
				setSuperlikedRestaurants(removeFromList(newSuperlikedRestaurants, lastRestaurant));

				setCurrentRestaurant(lastRestaurant);

				break;

			case 'STATUS':
				console.log(
					'Liked',
					newLikedRestaurants,
					'Dislike:',
					newDislikedRestaurants,
					'Super',
					newSuperlikedRestaurants
				);
				break;

			default:
				return null;
		}
	};

	return (
		<div className="App">
			<Header />
			<div className="mt-5" />
			{/* get the current restaurant of the current restaurant */}
			{currentComponent === 'SEARCH' ? (
				<FilterCritera setCurrentComponent={setCurrentComponent} setSearchTerms={setSearchTerms} />
			) : null}
			{currentComponent === 'RESTAURANTS' ? (
				<div>
					<FetchRestaurantResults
						currentRestaurant={currentRestaurant}
						modifyLists={modifyLists}
						liked={likedRestaurants}
						superliked={superlikedRestaurants}
						disliked={dislikedRestaurants}
						setCurrentComponent={setCurrentComponent}
						searchTerms={searchTerms}
					/>
					<button onClick={() => modifyLists(currentRestaurant, 'STATUS')}>
						<h1>My Choices</h1>
					</button>
				</div>
			) : null}
			{currentComponent === 'WAIT' ? (
				<div>
					<AwaitingFriends
						liked={likedRestaurants}
						superliked={superlikedRestaurants}
						disliked={dislikedRestaurants}
					/>
				</div>
			) : null}
		</div>
	);
}

export default App;
