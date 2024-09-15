import "@/Styles/App.css";
import { Outlet } from "react-router-dom";
import Footer from "@/Components/Footer";
import Sale from "@/Components/Sale";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Sale />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
