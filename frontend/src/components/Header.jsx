import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import GenerateButton from "./GenerateButton";
function Header() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0.1, y: 100 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col justify-center items-center text-center my-20"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-stone-500 inline-flex text-center gap-2 bg-white px-6 py-1 rounded-full border border-neutral-500"
        >
          <p>Best Text To Image Generator</p>
          <img className="" src={assets.star_icon} alt="star-icon" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-4xl max-w-[500px] sm:text-6xl sm:max-w-[600px] mt-10 text-center"
        >
          Turn Text To <span className="text-blue-600">Image</span>, in Seconds.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center max-w-xl mx-auto mt-5"
        >
          Unleash your creativity with AI. Turn your imagination to visual arts
          in seconds - just type, and watch the magic happen.
        </motion.p>
        <GenerateButton></GenerateButton>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex items-center gap-3 mt-16 flex-wrap justify-center "
        >
          {Array(6)
            .fill("")
            .map((item, index) => (
              <img
                loading="lazy"
                className="rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10"
                src={
                  index % 2 === 0 ? assets.sample_img_1 : assets.sample_img_2
                }
                alt=""
                key={index}
                width={70}
              ></img>
            ))}
        </motion.div>
        <p className="text-md mt-4 text-neutral-600">
          Generated images from Imagify
        </p>
      </motion.div>
    </>
  );
}

export default Header;
