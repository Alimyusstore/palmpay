import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Landing from './Pages/Landing';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
import Pmedia from './Pages/Pmedia';
import Error from './Pages/Error';
import { pathAbout, pathBlog, pathContact, pathMedia } from './Pages/pathName';

const router = createBrowserRouter([{path: "/", element:<Landing/>},{path:pathContact, element:<Contact/>},{path: pathAbout, element:<About/>},{path: pathBlog, element:<Blog/>},{path: pathMedia, element: <Pmedia/>},{path: "*", element:<Error/>}])
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
