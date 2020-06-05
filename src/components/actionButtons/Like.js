import React from 'react';

// passing down methods
const Like = ({ restaurant, modifyLists }) => (
	<button className="btn" type="button" onClick={() => modifyLists(restaurant, 'LIKE_RESTAURANT')}>
		<img src="images/misc/like.png" alt="Like" />
	</button>
);

// const Like = ({ userId, modifyLikes }) => (
//   <button
//     type="button"
//     onClick={() => modifyLikes(userId, "ADD_TO_LIKED_USERS")}
//   >
//     <img src="images/misc/like.png" alt="Like User" />
//   </button>
// );

export default Like;

//
