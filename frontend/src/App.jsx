import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import AppContextProvider, { AppContext } from "./context/AppContext";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { useContext } from "react";
function App() {
  const { showLogin } = useContext(AppContext);
  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <ToastContainer position="bottom-right"></ToastContainer>
      <Navbar></Navbar>
      {showLogin && <Login></Login>}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/result" element={<Result></Result>}></Route>
        <Route path="/buy-credits" element={<BuyCredit></BuyCredit>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
