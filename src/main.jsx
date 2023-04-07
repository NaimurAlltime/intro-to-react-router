import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import FriendDetail from "./components/FriendDetail/FriendDetail";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import PostDetail from "./components/PostDetail/PostDetail";
import Posts from "./components/Posts/Posts";
import "./index.css";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App></App>,
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path: "/contact",
//     element: <Contact></Contact>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/friends",
        element: <Friends></Friends>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "/friend/:friendId",
        element: <FriendDetail></FriendDetail>,
        loader: ({ params }) =>
          fetch(
            `https://jsonplaceholder.typicode.com/users/${params.friendId}`
          ),
      },
      {
        path: "/posts",
        element: <Posts></Posts>,
        loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
      },
      {
        path: "/posts/:postId",
        element: <PostDetail></PostDetail>,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
