import React from 'react';

const Rewind = (props) => (
	<button className="btn" type="button" onClick={() => props.modifyLists(props.restaurant.id, 'REWIND_RESTAURANT')}>
		<img src="images/misc/Rewind.png" alt="Rewind" />
	</button>
);

export default Rewind;
