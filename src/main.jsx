import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "@/Styles/index.css";
import { Provider } from "react-redux";
import store from "@/Store/Store.js";
import Home from "@/Pages/Home.jsx";
import Login from "@/Pages/Login.jsx";
import SignUp from "@/Pages/SignUp.jsx";
import NotFound from "@/Pages/NotFound.jsx";
import AllProducts from "@/Pages/AllProducts.jsx";

const router = createBrowserRouter([
  {
    path: "/MindSetGradProject/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "products",
        element: <AllProducts />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
