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
import Registration from './components/registration/Registration';
import Login from './components/login/Login';


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
        { path: "/registration", element: <Registration/>},
        { path: "/login", element: <Login/>},
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
