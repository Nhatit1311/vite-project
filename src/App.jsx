import './style.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from "./pages/login/login";
import Register from "./pages/register/Register";
import Contact from "./pages/contact/contact";
import Book from "./pages/book/Book";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./components/Home/Home";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return(
    <div className="layout-app">
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <div>404 Not Found</div>,

      children: [
        { index: true, element: <Home/>},
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "book",
          element: <Book/>,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}
