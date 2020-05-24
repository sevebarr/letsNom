import React from "react";
import Like from "./actionButtons/Like";
import Superlike from "./actionButtons/Superlike";
import Rewind from "./actionButtons/Rewind";
import Dislike from "./actionButtons/Dislike";

const Actions = ({ restaurant, modifyLists }) => {
  return (
    <div className="actions">
      <Like restaurantId={restaurant.id} modifyLists={modifyLists} />
      <Superlike restaurantId={restaurant.id} modifyLists={modifyLists} />
      <Rewind restaurantId={restaurant.id} modifyLists={modifyLists} />
      <Dislike restaurantId={restaurant.id} modifyLists={modifyLists} />
    </div>
  );
};

export default Actions;
