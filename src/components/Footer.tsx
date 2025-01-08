import { Link } from "react-router-dom";
//
import GameLogoNavbarIcon from "@/assets/GameLogoNavbarIcon";
import { FacebookIcon } from "@/assets/SocialIconsFooter/FacebookIcon";
import { InstagramIcon } from "@/assets/SocialIconsFooter/InstagramIcon";
import { LinkedInIcon } from "@/assets/SocialIconsFooter/LinkedInIcon";
import { YoutubeIcon } from "@/assets/SocialIconsFooter/YoutubeIcon";

const Footer = () => {
  return (
    <footer className="w-full bg-red-800 text-white p-4">
      <div className="flex gap-10 justify-between flex-col lg:flex-row mx-10">
        <div className="flex-col gap-4">
          <Link className="flex gap-4" to="/">
            <GameLogoNavbarIcon className="stroke-white" size={32} />
            <p className="font-medium text-lg text-white ">GifMatchGame</p>
          </Link>
          <div className="mx-12">
            <h1 className="text-md mt-4 font-bold text-white">Explore More</h1>
            <p>Powered by Giphy</p>
          </div>
        </div>
        <div className="flex-col">
          <h1 className="text-lg font-bold">Follow Us on Our Socials</h1>{" "}
          <div className="flex gap-4 mt-4 ">
            {/* facebook */}
            <Link
              to="https://www.facebook.com/vishal.kanu.7"
              className="flex group h-8 w-8 items-center justify-center rounded-full  bg-white hover:bg-[#1877F2]  transition-colors duration-300"
              target="_blank"
            >
              <FacebookIcon className="group-hover:fill-white fill-red-800 transition-colors duration-300" />
            </Link>

            {/* LinkedIn */}
            <Link
              to="https://www.linkedin.com/in/vishal-kanu/"
              className="flex group h-8 w-8 items-center justify-center rounded-lg  bg-white hover:bg-[#0A66C2]  transition-colors duration-300"
              target="_blank"
            >
              <LinkedInIcon className="group-hover:fill-white fill-red-800 transition-colors duration-300 " />
            </Link>

            {/* Youtube */}
            <Link
              to="https://youtube.com/"
              className="flex group h-8 w-8 items-center justify-center rounded-full  bg-white hover:bg-[#FF0000]  transition-colors duration-300"
              target="_blank"
            >
              <YoutubeIcon className="group-hover:fill-white fill-red-800 transition-colors duration-300" />
            </Link>
            {/* Instagram */}
            <Link
              to="https://www.instagram.com/vishal.kanu"
              className="flex group h-8 w-8 items-center justify-center rounded-lg  bg-white 
           hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FEDA77] 
           transition-all duration-300"
              target="_blank"
            >
              <InstagramIcon className="group-hover:fill-white fill-red-800 transition-colors duration-300 size-full" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <hr className=" p-4 text-white mx-10" />
        <p className="text-center  text-xs sm:text-sm text-white mx-10">
          Copyright {new Date().getFullYear()} © All Rights Reserved Design by GifMatchGame
        </p>
      </div>
    </footer>
  );
};

export default Footer;
