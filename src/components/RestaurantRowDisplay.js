import React from 'react';

const RestaurantRowDisplay = (res) => {
	return (
		<div className="container">
			{console.log(res)}
			<div className="row border border-dark align-self-center rounded">
				<a href={res.res.url} className="col-3 align-self-center ">{res.res.name}</a>
				<div className="col-2 align-self-center">
					<img className="img-thumbnail" src={res.res.image_url} />
				</div>
				<div className="col-2 align-self-center">
					{res.res.rating} stars ({res.res.review_count})
				</div>
				<div className="col-1 align-self-center">{res.res.price}</div>
				<div className="col-4 align-self-center">
					<div>{res.res.location.display_address[0]}</div>
					<div>{res.res.location.display_address[1]}</div>
				</div>
				{console.log(res.restaurant)}
			</div>
		</div>
	);
};

export default RestaurantRowDisplay;
