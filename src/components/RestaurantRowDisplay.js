import React from 'react';

const RestaurantRowDisplay = (res) => {
	return (
		<div className="container">
			{console.log(res)}
			<div className="row border border-primary rounded">
				<div className="col-3">{res.res.name}</div>
				<div className="col-2">
					<img className="img-thumbnail" src={res.res.image_url} />
				</div>
				<div className="col-2">
					{res.res.rating} ({res.res.review_count})
				</div>
				<div className="col-2">{res.res.price}</div>
				<div className="col-3">
					<div>{res.res.location.display_address[0]}</div>
					<div>{res.res.location.display_address[1]}</div>
				</div>
				{console.log(res.restaurant)}
			</div>
		</div>
	);
};

export default RestaurantRowDisplay;
