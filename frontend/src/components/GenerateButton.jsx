import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
function GenerateButton() {
  const { user, setShowLogin } = useContext(AppContext);
  const navigate = useNavigate();
  const handleOnclick = () => {
    if (user) {
      navigate("/result");
    } else {
      setShowLogin(true);
    }
  };
  return (
    <motion.div>
      <motion.button
        initial={{ opacity: 0 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        animate={{ opacity: 1 }}
        transition={{
          default: { duration: 0.5 },
          opacity: { delay: 0.8, duration: 1 },
        }}
        onClick={handleOnclick}
        className="sm:text-sm hover:scale-105 transition-all
      duration-300 cursor-pointer text-white bg-black w-auto mt-8 px-8 py-2.5 flex gap-2 items-center rounded-full"
      >
        Generate Images
        <img className="h-7" src={assets.star_group} alt="" />
      </motion.button>
    </motion.div>
  );
}

export default GenerateButton;
