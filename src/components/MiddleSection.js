import { CreatePost } from "./CreatePost";
import { PostCard } from "./PostCard";
import { Posts } from "../data";
import { useState } from "react";

export const MiddleSection = () => {
  const [newPost, setNewPost] = useState(Posts); // State to hold posts

  // Function to handle adding a new post
  const handleAddPost = (post) => {
    setNewPost([post, ...newPost]); // Add new post at the beginning of the array
  };

  return (
    <>
      <div className="card m-1 shadow border-0  justify-content-between">
        <div className="m-1">
          <CreatePost addPost={handleAddPost}/>
        </div>
      </div>
      {newPost.map((item) => (
        <PostCard data={item} />
      ))}
    </>
  );
};
