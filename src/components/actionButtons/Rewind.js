import React from "react";

const Rewind = ({ restaurantId, modifyLists }) => (
  <button
    type="button"
    onClick={() => modifyLists(restaurantId, "REWIND_RESTAURANT")}
  >
    <img src="images/misc/Rewind.png" alt="Rewind" />
  </button>
);

export default Rewind;
