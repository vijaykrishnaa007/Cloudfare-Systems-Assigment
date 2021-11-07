import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import './posts.css'
const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch("https://getposts.vk2200.workers.dev");
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  return (
    <div>
      <div class="center"><h4>Cloudfare Social Media</h4></div>
      <Link to="/newpost">Create New Post</Link>
      {posts.map((post) => (
        <main class="card-container">
        <div class="card">
          <h1 class="center">
           {post.title}
          </h1>
          👱-{post.username}
          <p>{post.content}</p>
        </div>
      </main>
      ))}
    </div>
  );
};

export default Posts;