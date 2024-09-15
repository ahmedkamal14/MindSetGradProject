import "@/Styles/App.css";
import { Outlet } from "react-router-dom";
import Footer from "@/Components/Footer";
import Sale from "@/Components/Sale";

function App() {
  return (
    <>
      <Sale />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
