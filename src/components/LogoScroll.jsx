
import dub from "../assets/Resize/dub.png";
import logo28 from "../assets/Resize/tiger.png";
import logo3 from "../assets/Resize/al ghandi auto.png";
import logo4 from "../assets/Resize/alnasr.png";
import nbtc from "../assets/Resize/nbtc.png";
import logo6 from "../assets/Resize/giordano.png";
import shaw from "../assets/Resize/shaw.png";
import logo8 from "../assets/Resize/acc.png";

const logos = [
  dub,
  logo28,
  logo3,
  logo4,
  nbtc,
  logo6,
  shaw,
  logo8
];

const LogoScroll = () => {
  return (
    <section className="bg-black py-25 overflow-hidden mt-15">
      <div className="w-full mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight text-center mb-2">
          Our Valued Clients
        </h2>

        <p className="text-center text-gray-300 mb-12">
          Building strong partnerships through technology.
        </p>

      </div>

      {/* WHITE LOGO STRIP */}
      <div className="bg-white w-full py-10 overflow-hidden">
        <div className="flex items-center gap-12 whitespace-nowrap animate-logo-scroll w-max px-6">

          {logos.concat(logos).map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[160px]"
            >
              <img
                src={logo}
                alt="Client logo"
                className="object-contain h-10 sm:h-16 md:h-18"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default LogoScroll;