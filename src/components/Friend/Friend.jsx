import React from "react";
import { Link } from "react-router-dom";
import "./Friend.css";

const Friend = ({ friend }) => {
  const { name, email, phone, id } = friend;
  return (
    <div className="friends-info">
      <h2> {name} </h2>
      <p>Email: {email}</p>
      <p>Phone: {phone} </p>
      <button>
        <Link to={`/friend/${id}`}>Details</Link>
      </button>
    </div>
  );
};

export default Friend;
