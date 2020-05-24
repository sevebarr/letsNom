import React from "react";

// passing down methods
const Like = ({ restaurantId, modifyLists }) => (
  <button
    type="button"
    onClick={() => modifyLists(restaurantId, "LIKE_RESTAURANT")}
  >
    <img src="images/misc/like.png" alt="Like" />
  </button>
);

// const Like = ({ userId, modifyLikes }) => (
//   <button
//     type="button"
//     onClick={() => modifyLikes(userId, "ADD_TO_LIKED_USERS")}
//   >
//     <img src="images/misc/like.png" alt="Like User" />
//   </button>
// );

export default Like;

//
