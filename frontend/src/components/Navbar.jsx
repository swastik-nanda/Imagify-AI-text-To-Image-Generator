import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
function Navbar() {
  const { user, setShowLogin, logout, credit } = useContext(AppContext);

  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-4">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-28 sm:w-32 lg:w-40" />
      </Link>

      <div>
        {user ? (
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={() => navigate("/buy-credits")}
              className="flex items-center gap-2 sm:gap-3 bg-blue-200 px-4 sm:px-6
             py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-400 cursor-pointer"
            >
              <img className="w-5" src={assets.credit_star} alt="credits" />
              <p className="text-xs sm:text-sm font-medium text-gray-600">
                Credits Left: ${credit}
              </p>
            </button>
            <p className="text-gray-600 max-sm:hidden pl-4">Hi, {user.name}</p>
            <div className="relative group">
              <img
                src={assets.profile_icon}
                className="w-10 drop-shadow"
                alt="profile"
              />
              <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-12">
                <ul className="list-none m-0 p-2 bg-white rounded-md text-sm border">
                  <li
                    onClick={logout}
                    className="py-1 px-2 cursor-pointer pr-10"
                  >
                    Logout
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 sm:gap-5">
            <p
              className="cursor-pointer"
              onClick={() => navigate("/buy-credits")}
            >
              Pricing
            </p>{" "}
            <button
              onClick={() => setShowLogin(true)}
              className="bg-zinc-800 text-white px-7 py-2 sm:px-10 cursor-pointer text-sm rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
