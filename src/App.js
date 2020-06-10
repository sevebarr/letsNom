import React, { useState } from 'react';
import Header from './components/Header';
//import FoodsView from './components/zDEPRECATED.FoodsView';
import AwaitingFriends from './components/AwaitingFriends';
import FetchRestaurantResults from './components/FetchRestaurantResults.js';
import FilterCritera from './components/FilterCriteria';
import './App.css';

function App() {
	const [ searchTerms, setSearchTerms ] = useState('');
	const [ currentComponent, setCurrentComponent ] = useState('SEARCH');
	const [ restaurantList, setRestaurantList ] = useState([]);
	const [ currentRestaurant, setCurrentRestaurant ] = useState(0);
	const [ likedRestaurants, setLikedRestaurants ] = useState([]);
	const [ dislikedRestaurants, setDislikedRestaurants ] = useState([]);
	const [ superlikedRestaurants, setSuperlikedRestaurants ] = useState([]);
	const [ lastRestaurant, setLastRestaurant ] = useState([]);

	const removeFromList = (list, restaurant) => list.filter((res) => res !== restaurant);
	//takes in list and restId
	//filter from list - keep rest.id !== restaurantId

	const modifyLists = (restaurant, action) => {
		switch (action) {
			case 'LIKE_RESTAURANT':
				setCurrentRestaurant(currentRestaurant + 1);
				setLikedRestaurants([ ...likedRestaurants, restaurant ]);
				setLastRestaurant([ restaurant, ...lastRestaurant ]);
				break;

			case 'DISLIKE_RESTAURANT':
				setCurrentRestaurant(currentRestaurant + 1);
				setDislikedRestaurants([ ...dislikedRestaurants, restaurant ]);
				setLastRestaurant([ restaurant, ...lastRestaurant ]);
				break;

			case 'SUPERLIKE_RESTAURANT':
				setCurrentRestaurant(currentRestaurant + 1);
				setSuperlikedRestaurants([ ...superlikedRestaurants, restaurant ]);
				setLastRestaurant([ restaurant, ...lastRestaurant ]);
				break;

			case 'REWIND_RESTAURANT':
				setLikedRestaurants(removeFromList(likedRestaurants, restaurantList[currentRestaurant - 1]));
				setDislikedRestaurants(removeFromList(dislikedRestaurants, restaurantList[currentRestaurant - 1]));
				setSuperlikedRestaurants(removeFromList(superlikedRestaurants, restaurantList[currentRestaurant - 1]));
				setCurrentRestaurant(currentRestaurant - 1);

				break;

			case 'STATUS':
				console.log('Liked', likedRestaurants, 'Dislike:', dislikedRestaurants, 'Super', superlikedRestaurants);
				break;

			default:
				return null;
		}
	};

	return (
		<div className="App mt-5">
			<Header />
			<div className="mt-5" />
			{currentComponent === 'SEARCH' ? (
				<FilterCritera setCurrentComponent={setCurrentComponent} setSearchTerms={setSearchTerms} />
			) : null}
			{currentComponent === 'RESTAURANTS' ? (
				<div className="container">
					<FetchRestaurantResults
						currentRestaurant={currentRestaurant}
						modifyLists={modifyLists}
						setRestaurantList={setRestaurantList}
						setCurrentComponent={setCurrentComponent}
						searchTerms={searchTerms}
					/>
					{/* <button onClick={() => modifyLists(currentRestaurant, 'STATUS')}>
						<h1>My Choices</h1>
					</button> */}
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
