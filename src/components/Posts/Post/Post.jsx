import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Post.css";

const Post = ({ post }) => {
  const { title, body, id } = post;

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="post-info">
      <h5>{title}</h5>
      <p>{body}</p>
      <Link to={`/posts/${id}`}>
        <button>See More</button>
      </Link>
      {/* or */}
      <button onClick={handleNavigation}>Detail post</button>
    </div>
  );
};

export default Post;
