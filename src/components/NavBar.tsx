import { Link, useLocation } from "react-router-dom";
//
import GameLogoNavbarIcon from "../assets/GameLogoNavbarIcon";
import HamburgerMenuIcon from "../assets/HamburgerMenuIcon";
import ChevronRightIcon from "@/assets/ChevronRightIcon";
import { cn } from "@/lib/utils";
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
  const location = useLocation();

  // Helper function to determine if a link is active
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="w-full p-4 bg-white shadow-md">
      <div className="flex justify-between mx-8">
        <Link className="flex gap-4" to="/">
          <GameLogoNavbarIcon className="stroke-red-800" size={32} />
          <p className="text-lg font-medium text-red-800">GifMatchGame</p>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden gap-4 text-lg font-medium text-red-800 lg:flex">
          <Link className={cn("flex gap-4 hover:underline", isActive("/") && "font-bold ")} to="/">
            <p>Home</p>
          </Link>

          <Link
            className={cn("flex gap-4 hover:underline", isActive("/leaderboard") && "font-bold ")}
            to="/leaderboard">
            <p>LeaderBoard</p>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="block lg:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <button>
                <HamburgerMenuIcon className="stroke-red-800" />
              </button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="w-full max-w-sm mx-auto">
                <DrawerHeader>
                  <DrawerTitle>Menu</DrawerTitle>
                </DrawerHeader>
                <div className="p-4">
                  <div className="text-lg font-medium text-red-800">
                    <Link
                      className={cn(
                        "flex items-center gap-4 hover:underline",
                        isActive("/") && "text-red-600 font-bold underline"
                      )}
                      to="/">
                      <ChevronRightIcon />
                      <p>Home</p>
                    </Link>

                    <Link
                      className={cn(
                        "flex items-center gap-4 hover:underline",
                        isActive("/leaderboard") && "text-red-600 font-bold underline"
                      )}
                      to="/leaderboard">
                      <ChevronRightIcon />
                      <p>LeaderBoard</p>
                    </Link>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <button className="self-center w-2/3 p-4 text-white bg-red-800 rounded-md">
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
