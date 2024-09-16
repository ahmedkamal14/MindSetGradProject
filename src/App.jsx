import "@/Styles/App.css";
import { Outlet } from "react-router-dom";
import Footer from "@/Components/Footer";
import Sale from "@/Components/Sale";
import Header from "./Components/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Sale />
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
