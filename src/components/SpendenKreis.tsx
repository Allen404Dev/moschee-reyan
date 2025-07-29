import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

interface SpendenBalkenProps {
  ziel: number;
  gesammelt: number;
}

export function SpendenKreis({ ziel, gesammelt }: SpendenBalkenProps) {
  const [sichtbar, setSichtbar] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  // Prozent, max 100
  const prozent = Math.min((gesammelt / ziel) * 100, 100);

  // SVG Kreis-Radius & Umfang
  const radius = 50;
  const umfang = 2 * Math.PI * radius;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === ref.current && entry.isIntersecting) {
            setSichtbar(true);
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
      className="w-full max-w-xs mx-auto my-16 p-4 flex flex-col items-center"
      data-aos="fade-up"
    >
      {/* SVG Kreis */}
      <svg width="120" height="120" className="transform -rotate-90">
        {/* Hintergrund-Kreis (grau) */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#D1D5DB" // Tailwind gray-300
          strokeWidth="10"
          fill="none"
        />
        {/* Fortschritts-Kreis (amber) */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#f59e0b" // Tailwind amber-500
          strokeWidth="10"
          fill="none"
          strokeDasharray={umfang}
          strokeDashoffset={sichtbar ? umfang * (1 - prozent / 100) : umfang}
          style={{ transition: "stroke-dashoffset 2s ease-in-out" }}
          strokeLinecap="round"
        />
      </svg>

      {/* Prozentzahl in der Mitte */}
      <div className="absolute text-2xl font-semibold text-gray-700 mt-[-88px]">
        {prozent.toFixed(1)}%
      </div>

      {/* Untertitel */}
      <div className="text-sm text-center mt-6 text-gray-600">
        {gesammelt.toLocaleString("de-AT")} € von {ziel.toLocaleString("de-AT")}
         € gesammelt
      </div>
    </div>
  );
}
