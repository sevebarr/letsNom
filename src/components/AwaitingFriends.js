import React from 'react';
import RestaurantRowDisplay from '../components/RestaurantRowDisplay';

// TODO - Create flexbox UI to show choices
const AwaitingFriends = ({ liked, disliked, superliked }) => {
	return (
		<div className="">
			<h1>Let's wait and see what your friends picked</h1>
			<h2>Your choices:</h2>
			{superliked[0] ? (
				<div className="superliked">
					<div className="display-4">You superliked these</div>
					{superliked.map((item) => <RestaurantRowDisplay res={item} />)}
				</div>
			) : (
				''
			)}

			{liked[0] ? (
				<div className="liked">
					<div className="display-4">You liked these</div>
					{liked.map((item) => <RestaurantRowDisplay res={item} />)}
				</div>
			) : (
				''
			)}

			{disliked[0] ? (
				<div className="disliked">
					<div className="display-4">You disliked these</div>
					{disliked.map((item) => <RestaurantRowDisplay res={item} />)}
				</div>
			) : (
				''
			)}
		</div>
	);
};

export default AwaitingFriends;
