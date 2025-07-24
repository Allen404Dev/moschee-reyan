import { createFileRoute } from "@tanstack/react-router";
import halkaImage from "../assets/halka.png";
import mektebImage from "../assets/mekteb.png";
import sufaraImage from "../assets/sufara.png";
import individuallUnterrichtImage from "../assets/individueller_unterricht.png";
import dersSamstag from "../assets/ders_samstag.png";
import rukijaSitzung from "../assets/rukija_sitzung.png";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <section className="h-[1000px] container mx-auto py-20">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-red-800 bg-clip-text text-transparent text-center">
          Aktivitäten
        </h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 py-10 gap-8">
          <div className="flex flex-col justify-center items-center gap-4 shadow-xl text-sm rounded-xl p-4">
            <div className="relative">
              <img src={halkaImage} className="rounded-2xl w-full" />
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl pointer-events-none"></div>
              <h2 className="absolute bottom-10 left-20 text-3xl  bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent text-center uppercase font-bold tracking-wider">
                Halka Quran
              </h2>
            </div>

            <div className="text-center text-gray-700">
              Die Quran-Rezitation ist einer der besten gottesdienstlichen
              Handlungen (Ibada), durch die ein Diener Allahs seinem Herrn näher
              kommt.
            </div>
            <div className="text-center text-gray-700">
              Allah der Allmächtige sagt:
              <span className="font-semibold italic">
                „Gewiss, diejenigen, die Allahs Buch verlesen, das Gebet
                verrichten und von dem, womit Wir sie versorgt haben, heimlich
                und öffentlich ausgeben, hoffen auf einen Handel, der nicht zu
                Fall kommen wird“ (Sura 35:29).
              </span>
            </div>
            <div className="text-center text-gray-700">
              Es wurde vom Propheten (möge Allah ihn in Ehren halten und ihm
              Wohlergehen schenken) authentisch überliefert, dass er sagte:
              <span className="font-bold italic">
                „Niemals versammeln sich Menschen in einem der Häuser Allahs, um
                das Buch Allahs zu rezitieren, zu lernen und zu lehren, außer
                dass Gelassenheit auf sie herabsteigt, Barmherzigkeit sie
                umgibt, die Engel sie umgeben und Allah sie in der Gegenwart
                derer, die Ihm nahe sind, erwähnt“ (Muslim).
              </span>
            </div>
          </div>

          <div>
            <img src={mektebImage} className="rounded-2xl p-2" />"
          </div>
          <div>
            <img src={sufaraImage} className="rounded-2xl p-2" />"
          </div>
          <div>
            <img src={individuallUnterrichtImage} className="rounded-2xl p-2" />
            "
          </div>
          <div>
            <img src={dersSamstag} className="rounded-2xl p-2" />"
          </div>
          <div>
            <img src={rukijaSitzung} className="rounded-2xl p-2" />"
          </div>
        </div>
      </section>
      <section className="h-[1000px]"></section>
    </>
  );
}
