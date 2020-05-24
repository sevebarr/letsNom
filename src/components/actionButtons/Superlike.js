import React from "react";

const Superlike = ({ restaurantId, modifyLists }) => (
  <button
    type="button"
    onClick={() => modifyLists(restaurantId, "SUPERLIKE_RESTAURANT")}
  >
    <img src="images/misc/superlike.png" alt="superlike" />
  </button>
);

export default Superlike;
