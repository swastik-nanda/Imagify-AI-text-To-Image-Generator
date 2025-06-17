import { assets } from "../assets/assets";
function Footer() {
  return (
    <div className="flex items-center justify-between gap-4 py-3 mt-20">
      <img
        src={assets.logo}
        alt="logo"
        width={150}
        className="cursor-pointer"
      />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-400 max-sm:hidden">
        Copyright @SwastikNanda | All Rights Deserved
      </p>
      <div className="flex gap-4">
        <img
          src={assets.facebook_icon}
          alt="fb"
          width={35}
          className="cursor-pointer hover:scale-105 transition-all duration-300"
        />
        <img
          src={assets.twitter_icon}
          alt="twt"
          width={35}
          className="cursor-pointer hover:scale-105 transition-all duration-300"
        />
        <img
          src={assets.instagram_icon}
          alt="inst"
          width={35}
          className="cursor-pointer hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  );
}

export default Footer;
