import { Link } from "react-router-dom";
import Contact from "./Contact";
import Header from "./Header";

const ServiceHero = ({
  tag = "SERVICE CATEGORY",
  title = "Clarity That Keeps You Compliant",
  points = [
    "Navigate Regulations",
    "Comply Confidently",
    "Protect Your Business",
  ],
}) => {
  return (
    <>
    <Header/>
    <section className="relative overflow-hidden rounded-3xl mx-6 my-12 mt-25">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-900 to-blue-300" />

      {/* HEX / HALFTONE PATTERN */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(rgba(0,0,0,0.25) 1px, transparent 1px)",
          backgroundSize: "6px 6px",
        }}
      />

      {/* SOFT LIGHT GLOW */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-blue-200 blur-[120px]" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-10 py-28 grid lg:grid-cols-2 gap-12">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-6 px-4 py-1 rounded-full bg-blue-100 text-sm font-semibold">
            {tag}
          </span>

          <h1 className="text-2xl lg:text-2xl font-light leading-tight mb-6">
            {title}
          </h1>

          <div className="flex flex-wrap gap-6 text-sm font-medium text-gray-800">
            {points.map((p, i) => (
              <span key={i} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-black" />
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT CTA CARD */}
        <div className="flex justify-end items-start">
          <div className="bg-black text-white rounded-2xl p-6 w-[300px] shadow-xl">
            <p className="text-lg leading-relaxed mb-6">
              Contact us to gain clarity on your security posture — delivered within{" "}
              <span className="font-semibold">72 hours</span> .
            </p>

            <Link to={'/Contact'} className="w-full flex items-center justify-between px-5 py-3 rounded-full bg-blue-200 text-black font-semibold hover:bg-blue-300 transition">
              Contact Us
              <span>→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default ServiceHero;
