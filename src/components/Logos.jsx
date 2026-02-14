import dub from "../assets/dub.png";
import logo28 from "../assets/28.png";
import logo3 from "../assets/idAIdoQlaN_1766401349277.png";
import logo4 from "../assets/idIu5Lf4Sf_1766399953051.png";
import nbtc from "../assets/nbtc.png";
import logo6 from "../assets/idMNWTiY7c_logos.png";
import shaw from "../assets/shaw.jpeg";
import logo8 from "../assets/LnW7oU12lP7gNmfZJtUdl05IXcB1736410981931_200x200.png";

const logos = [
  dub,
  logo28,
  logo3,
  logo4,
  nbtc,
  logo6,
  shaw,
  logo8,
];

const Logos = () => {
  return (
    <section className="bg-[#fdfdfd] py-25 overflow-hidden w-full">
      <div className="w-full mx-auto px-6">

        

        <div className="relative overflow-hidden">
          {/* TRACK */}
          <div className="flex items-center gap-12 whitespace-nowrap animate-logos-scrolling w-max">
            
            {/* LOGOS */}
           {logos.concat(logos).map((logo, index) => (
  <div
    key={index}
    className="flex items-center justify-center min-w-[160px]"
  >
    <img
      src={logo}
      alt="Client logo"
      className={`
        object-contain
        ${
          logo === logo6 || logo === logo3
            ? "h-13"     // smaller logos
            : "h-30"     // default size
        }
      `}
    />
  </div>
))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Logos;
