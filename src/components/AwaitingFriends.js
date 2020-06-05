import React from "react";


// TODO - Create flexbox UI to show choices
const AwaitingFriends = ({ liked, disliked, superliked }) => {
  return (
    <div>
      <h1>Let's wait and see what your friends picked</h1>
      <h2>Your choices:</h2>
      {superliked[0] ? (
        <div className="superliked">
          You superliked these
          {superliked.map(item => (
            <h3>{item.name}</h3>
          ))}
        </div>
      ) : (
        ""
      )}

      {liked[0] ? (
        <div className="liked">
          You liked these
          {liked.map(item => (
            <h3>{item.name}</h3>
          ))}
        </div>
      ) : (
        ""
      )}

      {disliked[0] ? (
        <div className="disliked">
          You disliked these
          {disliked.map(item => (
            <h3>{item.name}</h3>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default AwaitingFriends;
