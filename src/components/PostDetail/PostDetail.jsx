import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetail = () => {
  const post = useLoaderData();
  console.log(post);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Post Information</h2>
      <h5>{post.title}</h5>
      <p>{post.body}</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PostDetail;
