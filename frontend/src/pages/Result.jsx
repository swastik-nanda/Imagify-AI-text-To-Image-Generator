import { useContext, useState, react } from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";
function Result() {
  const [image, setImage] = useState(assets.sample_img_1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const { generateImage } = useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (input) {
      const image = await generateImage(input);

      if (image) {
        setIsImageLoaded(true);
        setImage(image);
      }
    }
    setLoading(false);
  };
  return (
    <motion.form
      initial={{ opacity: 0.2, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      onSubmit={onSubmitHandler}
      className="flex flex-col min-h-[90vh] justify-center items-center"
    >
      <div>
        <div className="relative">
          <img src={image} className="max-w-sm rounded" alt="" />
          <span
            className={`absolute bottom-0 h-1 left-0 ${
              loading ? "w-full transition-all duration-[10s]" : "w-0"
            } bg-blue-500 `}
          />
        </div>
        <p className={!loading ? "hidden" : ""}>Loading...</p>
      </div>

      {!isImageLoaded && (
        <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Describe what you want to generate"
            className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"
          />
          <button
            type="submit"
            className="bg-zinc-900 rounded-full px-10 sm:px-16 py-3 text-white cursor-pointer hover:scale-105 transition-all duration-300"
          >
            Generate
          </button>
        </div>
      )}

      {isImageLoaded && (
        <div className="flex flex-wrap gap-2 justify-center  text-sm p-0.5 mt-10  rounded-full text-white">
          <p
            onClick={() => {
              setIsImageLoaded(false);
            }}
            className="border-zinc-900 hover:scale-105 transition-all duration-300 bg-transparent border text-black px-8 py-3 rounded-full cursor-pointer"
          >
            Generate Another
          </p>
          <a
            className="border-zinc-900 bg-stone-800 border hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-3 rounded-full cursor-pointer"
            href={image}
            download
          >
            Download
          </a>
        </div>
      )}
    </motion.form>
  );
}

export default Result;
