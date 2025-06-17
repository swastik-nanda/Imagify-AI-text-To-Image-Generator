import { assets, testimonialsData } from "../assets/assets";
import GenerateButton from "./GenerateButton";
function Testimonials() {
  return (
    <div className="flex flex-col items-center justify-center my-20 py-12">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-2">
        Customer Testimonials
      </h1>
      <p className="text-gray-500 mb-12">What our Users are saying...</p>

      <div className="flex flex-wrap gap-6 mb-6">
        {testimonialsData.map((item, index) => (
          <div
            key={index}
            className="bg-white/20 p-12 rounded-lg shadow-md border border-gray-200 w-80 
            m-auto hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center">
              <img src={item.image} alt="" className="rounded-full w-14" />
              <h2 className="font-semibold text-xl mt-3">{item.name}</h2>
              <p className="text-gray-500 mb-4">{item.role}</p>

              <div className="flex mb-4">
                {Array(item.stars)
                  .fill()
                  .map((star, index) => (
                    <img key={index} src={assets.rating_star} alt="" />
                  ))}
              </div>
              <p className="text-center text-sm text-gray-600">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
