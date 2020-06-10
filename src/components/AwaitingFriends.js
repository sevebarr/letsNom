import React from 'react';
import RestaurantRowDisplay from '../components/RestaurantRowDisplay';

// TODO - Create flexbox UI to show choices
const AwaitingFriends = ({ liked, disliked, superliked }) => {
	return (
		<div className="align-middle">
			<div className="h2 align-self-center">Your choices:</div>
			{superliked[0] ? (
				<div className="superliked jumbotron">
					<div className="h4">SUPERLIKED</div>
					{superliked.map((item) => <RestaurantRowDisplay res={item} />)}
				</div>
			) : (
				''
			)}

			{liked[0] ? (
				<div className="liked jumbotron">
					<div className="h4">LIKED</div>
					{liked.map((item) => <RestaurantRowDisplay res={item} />)}
				</div>
			) : (
				''
			)}

			{disliked[0] ? (
				<div className="disliked jumbotron">
					<div className="h4">DISLIKED</div>
					{disliked.map((item) => <RestaurantRowDisplay res={item} />)}
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default AwaitingFriends;
