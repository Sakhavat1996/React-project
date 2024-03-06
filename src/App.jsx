import { useState } from 'react'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home'
import About from './About';
import Products from './Products';
import Root from './Root';


function App() {
  const myrouter = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about",  element: <About/> },
        { path: "/products", element: <Products/> },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={myrouter}/>
    </>
  )
}

export default App
