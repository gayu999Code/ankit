import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, Heart, MessageSquare, Upload } from "lucide-react";

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "John Doe",
      content: "Just got a call from a fake bank representative. Stay alert!",
      image: null,
      likes: 10,
      comments: ["Thanks for the warning!", "Had a similar experience."],
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [image, setImage] = useState(null);

  const handlePostSubmit = () => {
    if (newPost.trim() === "" && !image) return;
    const newEntry = {
      id: posts.length + 1,
      user: "Anonymous", // Replace with authenticated user later
      content: newPost,
      image,
      likes: 0,
      comments: [],
    };
    setPosts([newEntry, ...posts]);
    setNewPost("");
    setImage(null);
  };

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                ScamShield AI
              </span>
              <Link to="/" className="ml-6 text-gray-700 hover:text-indigo-600">
                Home
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/community"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Community
              </Link>
              <Link
                to="/check"
                className="text-indigo-600 hover:text-indigo-700 font-medium"
              >
                Call Detector
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-2xl mx-auto py-10 px-4">
        {/* Post Creation */}
        <div className="bg-white shadow rounded-lg p-4 mb-6">
          <textarea
            className="w-full border rounded-lg p-3 text-gray-700"
            rows="3"
            placeholder="Share your scam call experience..."
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
          />
          {/* Image Upload */}
          <label className="flex items-center space-x-2 mt-2 cursor-pointer text-indigo-600 hover:text-indigo-700">
            <Upload className="h-5 w-5" />
            <span>Upload Image</span>
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))}
            />
          </label>
          {image && (
            <img
              src={image}
              alt="Preview"
              className="mt-2 max-h-40 rounded-lg"
            />
          )}
          <button
            onClick={handlePostSubmit}
            className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            Post
          </button>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow rounded-lg p-4">
              <h3 className="font-semibold text-gray-900">{post.user}</h3>
              <p className="text-gray-700 mt-2">{post.content}</p>
              {post.image && (
                <img
                  src={post.image}
                  alt="User upload"
                  className="mt-3 rounded-lg max-h-60 w-full object-cover"
                />
              )}
              <div className="flex items-center space-x-4 mt-3">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center text-gray-600 hover:text-red-500"
                >
                  <Heart className="h-5 w-5 mr-1" />
                  {post.likes}
                </button>
                <button className="flex items-center text-gray-600 hover:text-indigo-600">
                  <MessageSquare className="h-5 w-5 mr-1" />
                  {post.comments.length}
                </button>
              </div>

              {/* Comments Section */}
              <div className="mt-3">
                {post.comments.map((comment, index) => (
                  <p key={index} className="text-gray-600 text-sm border-l-4 pl-2 border-indigo-400 mt-1">
                    {comment}
                  </p>
                ))}
                <div className="flex mt-2">
                  <input
                    type="text"
                    placeholder="Write a comment..."
                    className="w-full p-2 border rounded-lg"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && e.target.value.trim() !== "") {
                        handleComment(post.id, e.target.value);
                        e.target.value = "";
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-600">
          <p>© 2024 ScamShield AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Community;
