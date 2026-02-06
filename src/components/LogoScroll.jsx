import dub from "../assets/dub.png";
import logo28 from "../assets/28.png";
import logo3 from "../assets/idAIdoQlaN_1766401349277.png";
import logo4 from "../assets/idIu5Lf4Sf_1766399953051.png";
import nbtc from "../assets/nbtc.png";
import logo6 from "../assets/idMNWTiY7c_logos.png";
import shaw from "../assets/shaw.jpeg";
import logo8 from "../assets/LnW7oU12lP7gNmfZJtUdl05IXcB1736410981931_200x200.png";
import sophos from "../assets/sophos.png";

const logos = [
  dub,
  logo28,
  logo3,
  logo4,
  nbtc,
  logo6,
  shaw,
  logo8,
  sophos
];

const LogoScroll = () => {
  return (
    <section className="bg-[#fdfdfd] py-25 overflow-hidden">
      <div className="w-full mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight text-center mb-12">
          Our Clients
        </h2>

        <div className="relative overflow-hidden">
          {/* TRACK */}
          <div className="flex items-center gap-12 whitespace-nowrap animate-logo-scroll">
            
            {/* LOGOS */}
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center min-w-[160px]"
              >
                <img
                  src={logo}
                  alt="Client logo"
                  className="h-30 object-contain"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default LogoScroll;
