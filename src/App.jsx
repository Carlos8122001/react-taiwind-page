import { useState } from "react";
import ToggleMode from "./components/ToggleMode";
import DrawerMenu from "./components/DrawerMenu";

function App() {
  const [darkMode, setDarMode] = useState(true);
  const [open, setOpen] = useState(false);

  const handleMode = () => {
    document.documentElement.classList.toggle("dark");
    setDarMode(!darkMode);
  };
  return (
    <>
      <header className="w-full  h-16 overflow-hidden py-4 dark:bg-[#111729] lg:py-6">
        <nav className="flex justify-between items-center content-center px-4 w-ful lg:px-16">
          <div className="max-w-lg z-10">
            <img
              className="max-w-lg h-full sm:h-9 md:h-4 lg:h-6"
              src={
                darkMode
                  ? "public/alarado-icon-homepage.svg"
                  : "public/alarado-icon-homepage-white.svg"
              }
              alt="logo"
            />
          </div>

          <div className="hidden md:flex gap-x-10 lg:gap-16">
            <a
              href="#"
              className="font-bold font-Poppins text-[#111729] dark:text-[#FFF] text-sm md:text-xs lg:text-sm"
            >
              About Us
            </a>
            <a
              href="#"
              className="font-bold font-Poppins text-[#909193]  text-sm md:text-xs lg:text-sm"
            >
              Product
            </a>
            <a
              href="#"
              className="font-bold font-Poppins text-[#909193] text-sm md:text-xs lg:text-sm"
            >
              Resource
            </a>
            <a
              href="#"
              className="font-bold font-Poppins text-[#909193] text-sm md:text-xs lg:text-sm"
            >
              Contact
            </a>
          </div>

          <div className="hidden md:block">
            <ToggleMode handleMode={handleMode} />
          </div>

          <DrawerMenu handleMode={handleMode} open={open} setOpen={setOpen} darkMode={darkMode}/>

          <button
            className="text-lg font-bold text-white md:hidden"
            onClick={() => setOpen(true)}
          >
          
            <img  src={
                darkMode
                  ? "public/menu.svg"
                  : "public/menuWhite.svg"
              } alt="close" className="w-8 fill-current" />
          </button>
        </nav>
      </header>

      <main className="min-h-screen flex flex-col gap-y-0 justify-center items-center lg:flex-row-reverse dark:bg-[#111729] m-0 ">
        <div className="flex justify-center grow-[1] items-center md:mt-16 lg:m-0">
          <img
            className="object-cover bg-no-repeat min-w-6xl px-2 md:px-16 lg:px-8 lg:h-auto"
            src="public/hero-image-simple-homepage.png"
            alt="hero"
          />
        </div>

        <div className="grow-[1] ml-4 px-4 sm:ml-5 sm:px-10 md:mt-20">
          <article className="mb-2 text-left">
            <h3 className="text-[9px] font-Poppins font-bold mb-2 text-[#223344] dark:text-[#F2F9FE] uppercase sm:text-sm">
              😎 simple way to communicate
            </h3>

            <h1 className="text-3xl font-Poppins font-extrabold font text-[#223344] dark:text-[#F2F9FE] leading-normal mb-5 sm:mb-8 sm:text-6xl sm:leading-relaxed flex-wrap">
              Actions for Accessibility in Design
            </h1>

            <h2 className="text-xs font-Poppins font-semibold text-[#909193] mb-5  sm:text-lg sm:leading-snug md:pr-40 md:leading-7">
              The fastest way to build and deploy websites with resusable
              components.
            </h2>
          </article>

          <div className="flex flex-row justify-start gap-1 mb-5 sm:mb-8 sm:mt-9">
            <button className="px-5 py-2  rounded-md bg-[#2A4DD0] text-[#FFF] font-Poppins text-center font-medium text-xs sm:px-7 sm:py-3 sm:text-sm md:px-8 md:py-4 md:text-base">
              GET STARTED
            </button>

            <button className="px-5 text-center font-Poppins text-[#2A4DD0] font-semibold  underline decoration-2 underline-offset-4 text-xs sm:text-sm md:px-8 md:py-4 md:text-base">
              Get live demo
            </button>
          </div>

          <article className="flex flex-row justify-start gap-2 items-center pb-4 sm:pb-12 md:pb-16 md:mt-11 lg:mt-9">
            <img
              src="public/Done_ring_round_fill.svg"
              alt="done"
              className="w-3 sm:w-5 md:w-6"
            />
            <h4 className="font-Poppins text-[#909193] font-semibold text-[10px] mr-4 sm:text-sm">
              No credit card required
            </h4>

            <img
              src="public/Done_ring_round_fill.svg"
              alt="done"
              className="w-3 sm:w-5 md:w-6"
            />
            <h3 className="font-Poppins text-[#909193] font-semibold text-[10px] sm:text-sm">
              No software to install
            </h3>
          </article>
        </div>
      </main>
    </>
  );
}

export default App;
