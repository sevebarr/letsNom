import React from 'react';

const Dislike = (props) => (
	<button type="button" onClick={() => props.modifyLists(props.restaurant, 'DISLIKE_RESTAURANT')}>
		<img src="images/misc/dislike.png" alt="dislike" />
	</button>
);

export default Dislike;
