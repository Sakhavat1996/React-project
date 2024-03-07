import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home'
import About from './pages/About';
import Products from './pages/Products';
import Root from './Root';
import Category from './pages/Category';


function App() {
  const myrouter = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about",  element: <About/> },
        { path: "/products", element: <Products/> },
        { path: "/products/:category", element: <Category/> },
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
