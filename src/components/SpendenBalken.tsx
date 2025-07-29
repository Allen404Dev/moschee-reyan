import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface SpendenBalkenProps {
  ziel: number;
  gesammelt: number;
}

export function SpendenBalken({ ziel, gesammelt }: SpendenBalkenProps) {
  // State, ob die Komponente im Viewport ist
  const [sichtbar, setSichtbar] = useState(false);
  // Ref auf das Container-Div
  const ref = useRef<HTMLDivElement | null>(null);

  // Prozent berechnen (max. 100)
  const prozent = Math.min((gesammelt / ziel) * 100, 100);

  useEffect(() => {
    // AOS initialisieren
    AOS.init({ duration: 1000, once: true });

    // Intersection Observer einrichten
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === ref.current && entry.isIntersecting) {
            setSichtbar(true);
            // einmal gemeldet, kann man auch observer.disconnect() aufrufen,
            // wenn man nur einmal animieren will:
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className="w-full container mx-auto my-16 px-4 flex flex-col gap-10"
      //data-aos="fade-up"
    >
      {/* Überschrift + Prozent */}
      <div className="flex justify-between mb-2 font-medium text-white text-xl">
        <span>Spendenfortschritt</span>
        <span>{prozent.toFixed(1)} %</span>
      </div>

      {/* Leerer Balken */}
      <div className="w-full bg-white rounded-full h-6 overflow-hidden">
        {/* Gefüllter Balken */}
        <div
          className="bg-amber-500 h-full transition-all duration-[2000ms] ease-in-out"
          style={{ width: sichtbar ? `${prozent}%` : "0%" }}
        />
      </div>

      {/* Untertitel */}
      <div className="text-xl text-center mt-2 text-white">
        <span className="text-xl font-semibold text-amber-300">
          {gesammelt.toLocaleString("de-AT")} €{" "}
        </span>
        von {ziel.toLocaleString("de-AT")}
         € gesammelt
      </div>
    </div>
  );
}
