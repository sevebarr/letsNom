import React from 'react';

const Dislike = ({ restaurantId, modifyLists }) => (
	<button type="button" onClick={() => modifyLists(restaurantId, 'DISLIKE_RESTAURANT')}>
		<img src="images/misc/dislike.png" alt="dislike" />
	</button>
);

export default Dislike;
