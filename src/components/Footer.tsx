import { Link } from "react-router-dom";
//
import GameLogoNavbarIcon from "@/assets/GameLogoNavbarIcon";
import { FacebookIcon } from "@/assets/SocialIconsFooter/FacebookIcon";
import { InstagramIcon } from "@/assets/SocialIconsFooter/InstagramIcon";
import { LinkedInIcon } from "@/assets/SocialIconsFooter/LinkedInIcon";
import { YoutubeIcon } from "@/assets/SocialIconsFooter/YoutubeIcon";
import Giphy from "@/assets/Poweredby_100px-Black_VertLogo.png";

const RickRolled = "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley";

const Footer = () => {
  return (
    <footer className="w-full p-4 text-white bg-red-800">
      <div className="flex flex-col justify-between gap-10 mx-10 lg:flex-row">
        <div className="flex-col gap-4">
          <Link className="flex gap-4" to="/">
            <GameLogoNavbarIcon className="stroke-white" size={32} />
            <p className="text-lg font-medium text-white ">GifMatchGame</p>
          </Link>
          <div className="mx-12">
            <img src={Giphy} alt="gifmatchgame" className="mt-4" />
          </div>
        </div>
        <div className="flex-col">
          <h1 className="text-lg font-bold">Follow Us on Our Socials</h1>{" "}
          <div className="flex gap-4 mt-4 ">
            {/* facebook */}
            <Link
              to={RickRolled}
              className="flex group h-8 w-8 items-center justify-center rounded-full  bg-white hover:bg-[#1877F2]  transition-colors duration-300"
              target="_blank">
              <FacebookIcon className="transition-colors duration-300 group-hover:fill-white fill-red-800" />
            </Link>

            {/* LinkedIn */}
            <Link
              to={RickRolled}
              className="flex group h-8 w-8 items-center justify-center rounded-lg  bg-white hover:bg-[#0A66C2]  transition-colors duration-300"
              target="_blank">
              <LinkedInIcon className="transition-colors duration-300 group-hover:fill-white fill-red-800 " />
            </Link>

            {/* Youtube */}
            <Link
              to={RickRolled}
              className="flex group h-8 w-8 items-center justify-center rounded-full  bg-white hover:bg-[#FF0000]  transition-colors duration-300"
              target="_blank">
              <YoutubeIcon className="transition-colors duration-300 group-hover:fill-white fill-red-800" />
            </Link>
            {/* Instagram */}
            <Link
              to={RickRolled}
              className="flex group h-8 w-8 items-center justify-center rounded-lg  bg-white 
           hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#FEDA77] 
           transition-all duration-300"
              target="_blank">
              <InstagramIcon className="transition-colors duration-300 group-hover:fill-white fill-red-800 size-full" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
