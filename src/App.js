import React, { useState } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap'; // Components provided by Bootstrap
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import Routes from './Routes';

//import FoodsView from './components/zDEPRECATED.FoodsView';
import Header from './components/Header';
import AwaitingFriends from './components/AwaitingFriends';
import FetchRestaurantResults from './components/FetchRestaurantResults.js';
import SearchCriteria from './components/SearchCriteria';
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


		<div className="App ">

			<Header />
			<div className="mt-5" />

			{/* SEARCH CRITERIA */}
			{currentComponent === 'SEARCH' ? (
				<SearchCriteria setCurrentComponent={setCurrentComponent} setSearchTerms={setSearchTerms} />
			) : null}

			{/* BROWSE RESULTS */}
			{currentComponent === 'RESTAURANTS' ? (
				<div className="container">
					<FetchRestaurantResults
						currentRestaurant={currentRestaurant}
						modifyLists={modifyLists}
						setRestaurantList={setRestaurantList}
						setCurrentComponent={setCurrentComponent}
						searchTerms={searchTerms}
					/>
					{/* TEST BUTTON */}
					{/* <button onClick={() => modifyLists(currentRestaurant, 'STATUS')}>
						<h1>My Choices</h1>
					</button> */}
				</div>
			) : null}

			{/* FINISHED SEARCH */}
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
