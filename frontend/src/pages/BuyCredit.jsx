import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { assets, plans } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
function BuyCredit() {
  const { user, backendURL, loadCredits, setShowLogin, token } =
    useContext(AppContext);

  const navigate = useNavigate();

  const intiPay = async (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_TEST_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Credits Payment",
      description: "Credits Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            `${backendURL}/api/user/verify-razor`,
            response,
            { headers: { token } }
          );

          if (data.success) {
            loadCredits();
            navigate("/");
            toast.success("Credit Added!");
          }
        } catch (err) {
          toast.error(err.message);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  const paymentRazorPay = async (planId) => {
    try {
      if (!user) {
        setShowLogin(true);
        return;
      }

      const { data } = await axios.post(
        `${backendURL}/api/user/pay-razor`,
        { planId },
        { headers: { token } }
      );

      if (data.success) {
        intiPay(data.order);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <button className="border border-gray-400 px-10 py-2 rounded-full mb-6 cursor-pointer">
        Our Plans
      </button>
      <h1 className="text-center text-3xl font-medium mb-6 sm:mb-10">
        Choose the Plan
      </h1>

      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans.map((item, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-sm rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <img width={40} src={assets.logo_icon} alt="" />
            <p className="mt-3 mb-1 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">${item.price} </span> /{" "}
              {item.credits} credits
            </p>

            <button
              onClick={() => paymentRazorPay(item.id)}
              className="w-full cursor-pointer hover: scale-105 transition-all duration-300 bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52"
            >
              {user ? "Purchase" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BuyCredit;
