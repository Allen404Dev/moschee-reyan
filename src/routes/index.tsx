import { createFileRoute } from "@tanstack/react-router";
import halkaImage from "../assets/halka.png";
import mektebImage from "../assets/mekteb.png";
import sufaraImage from "../assets/sufara.png";
import individuallUnterrichtImage from "../assets/individueller_unterricht.png";
import dersSamstag from "../assets/ders_samstag.png";
import rukijaSitzung from "../assets/rukija_sitzung.png";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { SpendenBalken } from "@/components/SpendenBalken";
import { SpendenKreis } from "@/components/SpendenKreis";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const getResponsiveAos = (largeScreenType: string) => {
    const isLargeScreen = window.innerWidth >= 1024;
    return isLargeScreen ? largeScreenType : "fade-right";
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <section className="container mx-auto py-20">
        <h2
          className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-red-800 bg-clip-text text-transparent text-center"
          data-aos="zoom-in"
        >
          Aktivitäten
        </h2>
        <div className="grid lg:grid-cols-3 grid-cols-1 py-10 gap-8">
          {/* halka Quran Card */}
          <div
            className="flex flex-col justify-start items-center gap-4 shadow-xl text-sm rounded-xl p-4"
            data-aos={getResponsiveAos("fade-right")}
            data-aos-offset={window.innerWidth >= 1024 ? "400" : "200"}
          >
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
                {" "}
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

          {/* Mekteb Card */}
          <div
            className="flex flex-col justify-start items-center gap-4 shadow-xl text-sm rounded-xl p-4"
            data-aos={getResponsiveAos("fade-down")}
            data-aos-offset={window.innerWidth >= 1024 ? "400" : "200"}
          >
            <div className="relative">
              <img src={mektebImage} className="rounded-2xl w-full" />
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl pointer-events-none"></div>
              <h2 className="absolute bottom-10 left-20 text-3xl  bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent text-center uppercase font-bold tracking-wider">
                Mekteb
              </h2>
            </div>

            <div className="text-center text-gray-700">
              Das wichtigste und nachhaltigste Geschenk oder Vermächtnis, das
              wir unseren Kindern übergeben können, ist islamisches Wissen. Es
              ist eine Pflicht, unseren Kindern islâmisches Wissen beizubringen,
              da wir als Eltern verantwortlich für deren Erfolg und Misserfolg
              sind.
            </div>
            <div className="text-center text-gray-700">
              Der Prophet (möge Allah ihn in Ehren halten und ihm Wohlergehen
              schenken) macht es sehr deutlich, dass jeder für seine Familie und
              seine Kinder verantwortlich ist:
              <span className="font-semibold italic">
                {" "}
                Abdullah ibn Umar berichtete, dass er den Propheten Muhammad
                (möge Allah ihn in Ehren halten und ihm Wohlergehen schenken)
                Folgendes sagen hörte: „Jeder von euch ist ein Hirte und jeder
                von euch wird über diejenigen befragt werden, über die er wacht.
                Der Herrscher ist der Hirte seiner Untergebenen und wird über
                diejenigen befragt werden, über die er wacht. Der Mann ist der
                Hirte seiner Familie, und wird über diejenigen befragt werden,
                über die er wacht. Die Frau ist eine Hirtin über das Haus ihres
                Mannes und wird über das befragt werden, worüber sie wacht, und
                der Diener ist ein Hirte über das Eigentum seines Herren und
                wird über das befragt werden, worüber er wacht. Ein Mann ist ein
                Hirte über das Eigentum seines Vaters und wird über das befragt
                werden, worüber er wacht. Demnach seid ihr alle Hirten und
                werdet über die Schutzbefohlenen und Dinge befragt werden, über
                die ihr wacht.“ (Al-Buchari 3/592).
              </span>
            </div>
            <div className="text-center text-gray-700"></div>
          </div>

          {/* Sufara Card */}
          <div
            className="flex flex-col justify-start items-center gap-4 shadow-xl text-sm rounded-xl p-4"
            data-aos={getResponsiveAos("fade-left")}
            data-aos-offset={window.innerWidth >= 1024 ? "400" : "200"}
          >
            <div className="relative">
              <img src={sufaraImage} className="rounded-2xl w-full" />
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl pointer-events-none"></div>
              <h2 className="absolute bottom-10 left-20 text-3xl  bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent text-center uppercase font-bold tracking-wider">
                Sufara
              </h2>
            </div>

            <div className="text-center text-gray-700">
              Von 'Abdullah Ibn Mas'ud (möge Allah mit ihm zufrieden sein) wird
              überliefert, dass er sagte: Der Gesandte Allahs (Allahs Segen und
              Frieden auf ihm) sagte:{" "}
              <span className="font-bold italic">
                „Wer auch immer einen Buchstaben aus dem Quran liest, wird eine
                Belohnung (gute Tat) dafür bekommen und die Belohnung wird
                verzehnfacht. Ich sage nicht, dass "Alif Lam Mim" ein Buchstabe
                ist, sondern 'Alif' ist ein Buchstabe, 'Lam' ist ein Buchstabe
                und 'Mim' ist ein Buchstabe.“
              </span>{" "}
              [Verlässlich (Hasan)] [Sunan at-Tirmidhi - 2910]
            </div>
            <div className="text-center text-gray-700">
              Der Prophet (Allahs Segen und Frieden auf ihm) berichtete, dass
              jeder Muslim, der einen Buchstaben aus dem Buch Allahs liest,
              dafür eine Belohnung erhält, und dass die Belohnung auf das
              Zehnfache vervielfacht wird. Dann erklärte er das mit den Worten:
              „Ich sage nicht, dass 'Alif-Lam-Mim' ein Buchstabe ist, sondern
              'Alif' ist ein Buchstabe, 'Lam' ist ein Buchstabe und 'Mim' ist
              ein Buchstabe.“ So ergibt sich, dass es drei Buchstaben mit
              dreißig Belohnungen sind.
            </div>
          </div>

          {/* indiviudall Unterricht Card */}
          <div
            className="flex flex-col justify-start items-center gap-4 shadow-xl text-sm rounded-xl p-4"
            data-aos={getResponsiveAos("fade-right")}
            data-aos-offset={window.innerWidth >= 1024 ? "1000" : "200"}
          >
            <div className="relative">
              <img
                src={individuallUnterrichtImage}
                className="rounded-2xl w-full"
              />
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl pointer-events-none"></div>
              <h2 className="absolute bottom-10 left-10 text-3xl  bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent text-center uppercase font-bold tracking-wider">
                Einzelunterricht
              </h2>
            </div>
            <div className="text-center text-gray-700">
              Einzelunterricht mit dem Imam – nach Vereinbarung möglich Unser
              Imam bietet bei Bedarf Einzelunterricht an – ganz flexibel und
              individuell auf deine Wünsche abgestimmt. Egal ob du das Lesen des
              Qur’an verbessern möchtest, Fragen zu islamischen Themen hast oder
              dich in bestimmten Bereichen weiterbilden willst – der Imam nimmt
              sich gerne Zeit für dich.
            </div>
            <div className="text-center text-gray-700">
              Der Unterricht erfolgt nach vorheriger Terminvereinbarung – sprich
              den Imam einfach persönlich an oder kontaktiere uns über die
              bekannten Wege. Offen für alle Altersgruppen und Wissensstände.
              Wir freuen uns, dich auf deinem Weg zu mehr Wissen im Islam zu
              begleiten!
            </div>
          </div>

          {/* Rukija Card */}
          {/*  <div
            className="flex flex-col justify-start items-center gap-4 shadow-xl text-sm rounded-xl p-4"
            data-aos={getResponsiveAos("fade-up")}
            data-aos-offset={window.innerWidth >= 1024 ? "1000" : "200"}
          >
            <div className="relative">
              <img src={rukijaSitzung} className="rounded-2xl w-full" />
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl pointer-events-none"></div>
              <h2 className="absolute bottom-10 left-20 text-3xl  bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent text-center uppercase font-bold tracking-wider">
                Rukija
              </h2>
            </div>

            <div className="text-center text-gray-700">
              Unser Imam bietet auf Anfrage{" "}
              <span className="font-bold italic">Ruqya (الرقية الشرعية)</span>{" "}
              an – eine islamische Heilungsmethode auf Grundlage des{" "}
              <span className="font-bold italic">
                Qur’an und der authentischen Sunna
              </span>
              . Diese wird ausschließlich nach den Vorgaben der Scharia
              durchgeführt, ohne jegliche Bid'a (unerlaubte Neuerungen) oder
              zweifelhafte Praktiken. Die Erfahrung zeigt, dass viele Menschen
              durch Allahs Erlaubnis{" "}
              <span className="font-bold italic">deutliche Besserung</span> oder
              sogar vollständige Heilung erfahren haben – sei es bei seelischen
              Belastungen, unerklärlichen Beschwerden, Neid (Hasad), sihr
              (Schwarzmagie) oder dem bösen Blick (Ain).
            </div>
            <div className="text-center text-gray-700">
              Während der Ruqya werden ausschließlich{" "}
              <span className="font-bold italic">
                Qur’an-Verse und authentische Bittgebete (Duʿāʾ)
              </span>{" "}
              verwendet.
            </div>
            <div className="text-center text-gray-700">
              Die Sitzungen erfolgen{" "}
              <span className="font-bold italic">
                nur nach vorheriger Terminvereinbarung
              </span>{" "}
              und mit der festen Absicht auf Heilung durch Allah.
            </div>
            <div className="text-center text-gray-700">
              <span className="font-bold italic">Hinweis:</span> Ruqya ersetzt
              keine medizinische Behandlung, kann aber begleitend hilfreich sein
              – immer im Vertrauen auf Allah (tawakkul).
            </div>
          </div> */}

          {/*Samstag Ders */}
          <div
            className="flex flex-col justify-start items-center gap-4 shadow-xl text-sm rounded-xl p-4"
            data-aos={getResponsiveAos("fade-left")}
            data-aos-offset={window.innerWidth >= 1024 ? "1000" : "200"}
          >
            <div className="relative">
              <img src={dersSamstag} className="rounded-2xl w-full" />
              <div className="absolute bottom-0 left-0 w-full h-[40%] bg-gradient-to-t from-black/90 to-transparent rounded-b-2xl pointer-events-none"></div>
              <h2 className="absolute bottom-10 left-20 text-3xl  bg-gradient-to-r from-amber-300 to-amber-400 bg-clip-text text-transparent text-center uppercase font-bold tracking-wider">
                Samstags - Ders
              </h2>
            </div>

            <div className="text-center text-gray-700">
              Samstags-Vorträge in unserer Moschee – herzliche Einladung!{" "}
              <span className="font-bold italic">Jeden Samstag</span> findet in
              unserer Moschee ein islamischer Vortrag (Ders) statt. Die Themen
              sind vielfältig und behandeln verschiedenste Bereiche unserer
              Religion – verständlich, alltagsnah und bereichernd.
            </div>
            <div className="text-center text-gray-700">
              <span className="font-bold italic">
                Beginn ist jeweils nach dem Abendgebet (Maghrib)
              </span>
              . Die Dauer ist überschaubar, aber der Nutzen ist groß – in scha
              Allah.
            </div>
            <div className="text-center text-gray-700">
              Von Zeit zu Zeit dürfen wir auch{" "}
              <span className="font-bold italic">
                bekannte Gäste und Sheikhs{" "}
              </span>
              begrüßen, die uns mit ihrem Wissen und ihrer Erfahrung bereichern.
            </div>
            <div>
              Vor dem Vortrag laden wir in entspannter Atmosphäre zu{" "}
              <span>Grill, Getränken und Kaffee</span> ein – eine schöne
              Gelegenheit für Austausch, Gemeinschaft und neue Bekanntschaften.
            </div>
            <div>
              Kommt gerne vorbei, bringt Freunde und Familie mit – jeder ist
              herzlich willkommen!{" "}
              <span className="font-bold italic">
                Möge Allah unser Zusammensein segnen und uns Wissen geben, das
                uns nützt.
              </span>
            </div>
          </div>
        </div>
      </section>

      <div>
        {/* Graue Sektion mit Inhalt und Platz für die untere Welle */}
        <section className="relative bg-gray-700 py-20 pb-40 h-[1000px] z-10 text-white">
          {/* Wellen-Übergang oben */}
          <div className="-mt-31 overflow-hidden pb-0">
            <svg
              className="block w-full h-12"
              viewBox="0 0 1440 150"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#374151" /* bg-gray-700 */
                d="M0,32L48,48C96,64,192,96,288,96C384,96,480,64,576,58.7C672,53,768,75,864,96C960,117,1056,139,1152,138.7C1248,139,1344,117,1392,106.7L1440,96V150H0Z"
              />
            </svg>
          </div>

          <h2
            className="text-4xl font-bold text-center pt-20"
            data-aos="zoom-in"
          >
            Moscheekauf
          </h2>
          <SpendenBalken ziel={780000} gesammelt={155000} />
          {/* <SpendenKreis ziel={780000} gesammelt={155000} /> */}

          {/* Untere Welle */}
          <div
            className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] text-[0] pointer-events-none -mb-12"
            style={{ height: "80px" }}
          >
            <svg
              className="block w-full h-full"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#374151"
                transform="scale(1, -1) translate(0, -320)"
                d="M0,64L48,80C96,96,192,128,288,144C384,160,480,160,576,138.7C672,117,768,75,864,74.7C960,75,1056,117,1152,133.3C1248,149,1344,139,1392,133.3L1440,128V320H0Z"
              />
            </svg>
          </div>
        </section>
      </div>

      <section className="h-[1000px]"></section>
    </>
  );
}
