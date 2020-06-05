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
	const [ lastRestaurant, setLastRestaurant ] = useState([]);

	// These useState set the intitial state of the first item and how to change it in the second
	// useState doesn't work in a class component, only function component

	// initializing to empty arrays which can be updated with hooks(useState)
	// const newLikedRestaurants = [ ...likedRestaurants ];
	// const newDislikedRestaurants = [ ...dislikedRestaurants ];
	// const newSuperlikedRestaurants = [ ...superlikedRestaurants ];

	const removeFromList = (list, restaurant) => list.filter((res) => res !== restaurant);
	//takes in list and restId
	//filter from list - keep rest.id !== restaurantId

	// TO DO switch case for each component
	//const modifyComponent = comp;

	// mass method used for actions
	// TO DO THIS IS BROKEN, needs to be fixed
	const modifyLists = (restaurant, action) => {
		{
			console.log(lastRestaurant);
		}
		switch (action) {
			case 'LIKE_RESTAURANT':
				//newLikedRestaurants.push(data[restaurant]);
				setCurrentRestaurant(currentRestaurant + 1);
				setLikedRestaurants([ ...likedRestaurants, restaurant ]);
				setLastRestaurant([ restaurant, ...lastRestaurant ]);
				break;

			case 'DISLIKE_RESTAURANT':
				//newDislikedRestaurants.push(data[restaurant]);
				setCurrentRestaurant(currentRestaurant + 1);
				setDislikedRestaurants([ ...dislikedRestaurants, restaurant ]);
				setLastRestaurant([ restaurant, ...lastRestaurant ]);
				break;

			case 'SUPERLIKE_RESTAURANT':
				//newSuperlikedRestaurants.push(data[restaurant]);
				setCurrentRestaurant(currentRestaurant + 1);
				setSuperlikedRestaurants([ ...superlikedRestaurants, restaurant ]);
				setLastRestaurant([ restaurant, ...lastRestaurant ]);
				break;

			case 'REWIND_RESTAURANT':
				setLikedRestaurants(removeFromList(likedRestaurants, lastRestaurant[0]));
				setDislikedRestaurants(removeFromList(dislikedRestaurants, lastRestaurant[0]));
				setSuperlikedRestaurants(removeFromList(superlikedRestaurants, lastRestaurant[0]));
				setCurrentRestaurant(currentRestaurant - 1);
				setLastRestaurant(lastRestaurant.shift());
				console.log('lastrest:', lastRestaurant);
				break;

			case 'STATUS':
				console.log('Liked', likedRestaurants, 'Dislike:', dislikedRestaurants, 'Super', superlikedRestaurants);
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
						//liked={likedRestaurants}
						//superliked={superlikedRestaurants}
						//disliked={dislikedRestaurants}
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
