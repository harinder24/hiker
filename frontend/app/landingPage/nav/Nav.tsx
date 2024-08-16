"use client";
import { useEffect, useState } from "react";
import LandscapeIcon from "@mui/icons-material/Landscape";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
export default function Nav() {
  //boolean to for hamburger menu if it's open or not
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  //boolean to check if YOffset is on home section is over 1px, if it is then nav bg will change
  const [isHome, setIsHome] = useState<boolean>(true);

  //useEffect to check YOffset for isHome boolean
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;

      if (scrollY < 1) {
        setIsHome(true);
      } else {
        setIsHome(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={`sticky top-0  w-[1400px] max-[1400px]:w-full z-[1] max-[450px]:pt-0  px-4 text-[#eee] h-[50px] pt-2 max-[450px]:px-0`}
    >
      <div
        className={`flex flex-row justify-between px-6 max-[450px]:px-4 ${
          isHome ? "" : "bg-[rgba(0,0,0,0.8)]"
        } rounded-full max-[450px]:rounded-none`}
      >
        <div className={` flex flex-row items-center gap-x-4 `}>
          <button className="text-green-700">
            <LandscapeIcon sx={{ fontSize: 50 }} />
          </button>
          <button className="cavet  text-xl font-semibold ">Hiker</button>
        </div>

        {isMenuOpen ? (
          <button
            onClick={() => setIsMenuOpen(false)}
            className="hidden max-[750px]:flex flex-row justify-center items-center "
          >
            <MenuOpenIcon sx={{ fontSize: 32 }} />
          </button>
        ) : (
          <button
            onClick={() => setIsMenuOpen(true)}
            className="hidden max-[750px]:flex flex-row justify-center items-center "
          >
            <MenuIcon sx={{ fontSize: 32 }} />
          </button>
        )}

        <div
          className={`flex flex-row gap-x-14 max-[950px]:gap-x-10 max-[850px]:gap-x-6 items-center text-sm font-semibold  ${
            isMenuOpen
              ? "max-[750px]:absolute max-[750px]:flex-col "
              : "max-[750px]:hidden"
          } max-[750px]:bg-[rgba(0,0,0,0.8)] max-[750px]:h-fit max-[750px]:p-2 max-[750px]:rounded-md max-[750px]:top-[68px] max-[750px]:right-10`}
        >
          <button className=" p-2 max-[750px]:w-full max-[750px]:text-center">
            Services
          </button>
          <button className="p-2 max-[750px]:w-full max-[750px]:text-center">
            About
          </button>

          <button className="p-2  max-[750px]:w-full max-[750px]:text-center">
            Contact
          </button>
          <button className=" bg-green-700 rounded-full py-3 px-4 text-xs hover:bg-green-800 max-[750px]:mt-2 max-[750px]:w-[160px]">
            Sign in
          </button>
        </div>
      </div>
    </nav>
  );
}
