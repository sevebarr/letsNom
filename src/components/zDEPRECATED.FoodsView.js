import React from "react";
import Actions from "./Actions";

const FoodsView = ({ restaurant, modifyLists }) => {
  const { name, address, image, rating } = restaurant;
  return (
    <div className="RestaurantView">
      <img src={`/images/food/${image}`} alt={name} />
      <h2>
        {name} - {rating}
      </h2>
      <h3>Location:{address}</h3>
      <Actions restaurant={restaurant} modifyLists={modifyLists} />
    </div>
  );
};

export default FoodsView;
