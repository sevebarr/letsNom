import React from 'react';
import Like from './actionButtons/Like';
import Superlike from './actionButtons/Superlike';
import Rewind from './actionButtons/Rewind';
import Dislike from './actionButtons/Dislike';

const Actions = (props) => {
	return (
		<div className="actions fixed-bottom bg-light">
			<Like restaurant={props.restaurant} modifyLists={props.modifyLists} />
			<Superlike restaurant={props.restaurant} modifyLists={props.modifyLists} />
			<Rewind restaurant={props.restaurant} modifyLists={props.modifyLists} />
			<Dislike restaurant={props.restaurant} modifyLists={props.modifyLists} />
		</div>
	);
};

export default Actions;
