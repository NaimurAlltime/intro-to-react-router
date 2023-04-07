import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const FriendDetail = () => {
  const friend = useLoaderData();
  console.log(friend);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h3>Friend Information</h3>
      <h2> {friend.name} </h2>
      <p>Email: {friend.email}</p>
      <p>Phone: {friend.phone} </p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default FriendDetail;
