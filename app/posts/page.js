import Link from "next/link";
import React from "react";

const Posts = async () => {
  const response = await fetch("http://localhost:3000/api/posts");
  const posts = await response.json();
  console.log(posts);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 m-8">All Posts</h1>
      {posts?.posts?.map((post) => {
        return (
          <div className="max-w-4xl mx-auto p-4">
            <div className="p-4 bg-white hover:scale-102 shadow-md hover:shadow-2xl transition-shadow rounded-lg flex items-center justify-between border border-gray-400">
              <div className="">
                <h2 className="text-xl font-semibold text-gray-700">
                  {post?.title}
                </h2>
                <p className="text-gray-600 line-clamp-1">
                  {post?.description}
                </p>
              </div>
              <div className="shrink-0">
                <Link
                  href={`posts/${post?._id}`}
                  className="text-blue-500 hover:text-blue-700 transition-colors duration-300 font-bold hover:underline"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
