import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category";
import NewsLayout from "../Layout/NewsLayout";
import NewsDetails from "../Pages/Home/NewsDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Term from "../Pages/Terms/Terms";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: (
          <ProtectedRoute>
            <NewsDetails></NewsDetails>
          </ProtectedRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/news/${params.id}`),
      },
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: "register",
    element: <Register></Register>,
  },
  {
    path: "terms",
    element: <Term></Term>,
  },
]);
export default router;
