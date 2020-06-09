import React from 'react';

const Superlike = (props) => (
	<button className="btn" type="button" onClick={() => props.modifyLists(props.restaurant, 'SUPERLIKE_RESTAURANT')}>
		<img src="images/misc/superlike.png" alt="superlike" />
	</button>
);

export default Superlike;
