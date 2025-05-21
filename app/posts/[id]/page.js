import React from "react";

const PostDetails = async ({ params }) => {
  const { id } = params;
  const response = await fetch(`https://localhost:3000/posts/${id}`);
  const data = response.json();
  console.log(data);

  return <div>PostDetails</div>;
};

export default PostDetails;
