import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Suspense, lazy, useContext } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppContextProvider, { AppContext } from "./context/AppContext";

const Home = lazy(() => import("./pages/Home"));
const Result = lazy(() => import("./pages/Result"));
const BuyCredit = lazy(() => import("./pages/BuyCredit"));
const Login = lazy(() => import("./components/Login"));

function App() {
  const { showLogin } = useContext(AppContext);

  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <ToastContainer position="bottom-right" />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        {showLogin && <Login />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result" element={<Result />} />
          <Route path="/buy-credits" element={<BuyCredit />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
