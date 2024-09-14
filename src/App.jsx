import "@/Styles/App.css";
import { Outlet } from "react-router-dom";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Sale from "@/Components/Sale";

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
