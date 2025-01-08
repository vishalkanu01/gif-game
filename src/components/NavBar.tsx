import { Link } from "react-router-dom";
//
import GameLogoNavbarIcon from "../assets/GameLogoNavbarIcon";
import HamburgerMenuIcon from "../assets/HamburgerMenuIcon";

import ChevronRightIcon from "@/assets/ChevronRightIcon";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

const NavBar = () => {
  return (
    <header className="w-full bg-white shadow-md p-4">
      <div className="flex justify-between mx-8">
        <Link className="flex gap-4" to="/">
          <GameLogoNavbarIcon className="stroke-red-800" size={32} />
          <p className="font-medium text-lg text-red-800 ">GifMatchGame</p>
        </Link>

        <div className="font-medium text-lg text-red-800  hidden lg:flex gap-4 ">
          <Link className="flex gap-4 hover:underline" to="/">
            <p>Home</p>
          </Link>

          <Link className="flex gap-4 hover:underline" to="/leaderboard">
            <p>LeaderBoard</p>
          </Link>
        </div>

        <div className="lg:hidden block">
          <Drawer>
            <DrawerTrigger asChild>
              <button>
                <HamburgerMenuIcon className="stroke-red-800" />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Menu</DrawerTitle>
                </DrawerHeader>
                <div className="p-4">
                  <div className="font-medium text-lg text-red-800">
                    <Link className="flex gap-4 items-center hover:underline" to="/">
                      <ChevronRightIcon />
                      <p>Home</p>
                    </Link>

                    <Link className="flex gap-4 items-center hover:underline" to="/leaderboard">
                      <ChevronRightIcon />
                      <p>LeaderBoard</p>
                    </Link>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <button className="text-white bg-red-800 p-4 rounded-md w-2/3 self-center">
                      Cancel
                    </button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
