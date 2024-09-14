import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "@/Styles/index.css";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
import Home from "@/Pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/MindSetGradProject/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
