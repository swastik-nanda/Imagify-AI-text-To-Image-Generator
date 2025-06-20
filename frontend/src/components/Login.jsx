import { useContext, useEffect, useState } from "react";

import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [state, setState] = useState("Login");
  const { setShowLogin, token, setToken, backendURL, setUser } =
    useContext(AppContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      if (state === "Login") {
        const { data } = await axios.post(`${backendURL}/api/user/login`, {
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.setItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(`${backendURL}/api/user/register`, {
          name,
          email,
          password,
        });

        if (data.success) {
          setToken(data.token);
          setUser(data.user);
          localStorage.getItem("token", data.token);
          setShowLogin(false);
        } else {
          toast.error(data.message);
        }
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form
        onSubmit={onSubmitHandler}
        className="relative bg-white p-10 rounded-xl text-slate-500"
      >
        <h1 className="text-center text-2xl text-neutral-600 font-medium">
          {state}
        </h1>
        <p className="text-sm">Welcome back! Please sign in to continue.</p>
        {state !== "Login" && (
          <div className="flex border items-center hover:scale-105 transition-all duration-300 pl-2 gap-2 rounded-full mt-5">
            <img src={assets.profile_icon} width={40} alt="" />
            <input
              onChange={(ev) => setName(ev.target.value)}
              className="outline-none text-sm"
              type="text"
              placeholder="Full Name"
              required
            />
          </div>
        )}
        <div className="flex border items-center hover:scale-105 transition-all duration-300 pl-4 py-2 gap-4 rounded-full mt-5">
          <img src={assets.email_icon} width={30} alt="" />
          <input
            onChange={(ev) => setEmail(ev.target.value)}
            className="outline-none text-sm"
            type="email"
            placeholder="Email"
            required
          />
        </div>
        <div className="flex border hover:scale-105 transition-all duration-300 items-center pl-4 py-2 gap-4 rounded-full mt-5">
          <img src={assets.lock_icon} width={20} alt="" />
          <input
            onChange={(ev) => setPassword(ev.target.value)}
            className="outline-none text-sm"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <p className="text-sm text-blue-600 hover:underline my-4 cursor-pointer">
          Forgot Password?
        </p>

        <button className="bg-blue-600 w-full text-white cursor-pointer hover:scale-105 transition-all duration-300 py-2 rounded-full">
          {state === "Login" ? "Login" : "Create Account"}
        </button>

        {state === "Login" ? (
          <p className="mt-5 text-center">
            Don&apos;t have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => setState("Signup")}
            >
              Sign up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center ">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer hover:underline"
              onClick={() => setState("Login")}
            >
              Log In
            </span>
          </p>
        )}

        <img
          onClick={() => setShowLogin(false)}
          src={assets.cross_icon}
          className="absolute top-5 right-5 cursor-pointer"
          alt=""
        />
      </form>
    </div>
  );
}

export default Login;
