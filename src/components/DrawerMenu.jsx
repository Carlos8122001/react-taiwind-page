import React from "react";
import ToggleMode from "./ToggleMode";

export default function DrawerMenu({ open, setOpen, handleMode,darkMode }) {
  return (
    <>
      <nav
        className={` ${
          open === true ? "flex" : "hidden"
        }   flex gap-y-14 px-12 py-4 flex-col items-center w-80 h-screen fixed top-0 right-0 bg-[#F2F9FE] dark:bg-[#111729] md:hidden`}
      >
        <div>
          <button
            className="text-lg font-bold text-white"
            onClick={() => setOpen(false)}
          >
            <img src={
                darkMode
                  ? "public/close.svg"
                  : "public/closeWhite.svg"
              } alt="close" className="w-8 ml-56" />
          </button>
        </div>

        <a
          href="#"
          className="font-bold font-Poppins text-[#223344] dark:text-[#FFF] text-4xl"
        >
          About Us
        </a>
        <a href="#" className="font-bold font-Poppins text-[#909193] text-4xl">
          Product
        </a>
        <a href="#" className="font-bold font-Poppins text-[#909193] text-4xl">
          Resource
        </a>
        <a href="#" className="font-bold font-Poppins text-[#909193] text-4xl">
          Contact
        </a>

        <div className="max-w-xs">
          <ToggleMode handleMode={handleMode} />
        </div>
      </nav>
    </>
  );
}
