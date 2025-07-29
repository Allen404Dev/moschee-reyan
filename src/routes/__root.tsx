import { useEffect, useState } from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import heroImage from "../assets/bild5.jpg";
import logo from "../assets/logo/Znak bez adrese.png";
import AOS from "aos";
import "aos/dist/aos.css";

export const Route = createRootRoute({
  component: () => {
    useEffect(() => {
      AOS.init({ duration: 1000, once: true });
      AOS.refresh();
    }, []);

    const [menuOpen, setMenuOpen] = useState(false);

    return (
      <>
        <div
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            position: "relative",
          }}
        >
          <nav className="w-full z-50 text-white">
            <div className="container mx-auto flex items-center justify-between pt-10 px-4">
              {/* Hamburger Icon (nur auf small screens sichtbar) */}
              <button
                className="relative w-10 h-10 lg:hidden"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                {/* Top bar */}
                <span
                  className={`block absolute left-1 h-1 w-12 bg-amber-500 rounded transition-transform duration-300 ease-in-out ${
                    menuOpen ? "rotate-45 top-4" : "rotate-0 top-2"
                  }`}
                />
                {/* Middle bar */}
                <span
                  className={`block absolute left-1 top-5 h-1 w-12 bg-amber-500 rounded transition-opacity duration-300 ease-in-out ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                {/* Bottom bar */}
                <span
                  className={`block absolute left-1 h-1 w-12 bg-amber-500 rounded transition-transform duration-300 ease-in-out ${
                    menuOpen ? "-rotate-45 top-4" : "rotate-0 top-8"
                  }`}
                />
              </button>

              {/* Desktop-Menü */}
              <div className="hidden lg:flex gap-6 text-2xl z-50">
                {[
                  "Über uns",
                  "Aktivitäten",
                  "Gottesdienst",
                  "Moscheekauf",
                  "Kontakt",
                ].map((item, i) => (
                  <div
                    key={item}
                    className="cursor-pointer hover:text-amber-500 transition-colors duration-500"
                    data-aos="zoom-in"
                    data-aos-delay={i * 400}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Logo */}
              <img
                src={logo}
                className="w-24"
                data-aos="fade-left"
                data-aos-delay="0"
              />
            </div>

            {/* Mobile-Menü (sichtbar wenn Hamburger geöffnet) */}
            <div
              className={`z-[999] lg:hidden flex flex-col items-center gap-4 text-xl bg-black/30 backdrop-blur-2xl px-4 overflow-hidden transition-all duration-500 ease-in-out ${
                menuOpen
                  ? "max-h-100vh py-8 opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              }`}
            >
              {[
                "Über uns",
                "Aktivitäten",
                "Gottesdienst",
                "Moscheekauf",
                "Kontakt",
              ].map((item) => (
                <div
                  key={item}
                  className="cursor-pointer hover:text-amber-400 transition duration-300 text-2xl z-50"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </div>
              ))}
            </div>
          </nav>
          <div
            className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center text-white flex flex-col gap-8 justify-center items-center transition-all duration-300 ${
              menuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 drop-shadow-2xl drop-shadow-amber-100 text-br tracking-widest">
              <span data-aos="zoom-in" data-aos-delay="300">
                Unterstütze den Kauf <br />
              </span>
              <span data-aos="zoom-in" data-aos-delay="800">
                unsere Moschee
              </span>
            </h1>
            <button
              className="bg-gradient-to-r from-amber-400 to-amber-800 hover:from-amber-800 hover:to-amber-400 text-white px-8 py-4 rounded-full text-xl transition duration-300 shadow-lg w-fit lowercase"
              data-aos="zoom-in"
              data-aos-delay="1300"
            >
              Spende jetzt
            </button>
          </div>
        </div>

        <main>
          <Outlet />
        </main>
      </>
    );
  },
});
