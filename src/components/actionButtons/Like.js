import React from 'react';

const Like = (props) => (
	<button className="btn" type="button" onClick={() => props.modifyLists(props.restaurant, 'LIKE_RESTAURANT')}>
		<img src="images/misc/like.png" alt="Like" />
	</button>
);

export default Like;

//
