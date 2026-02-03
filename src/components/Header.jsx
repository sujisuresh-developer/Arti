import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/final.png";
import ContactModal from "./ContactModal";
import ContactButton from "./ContactButton";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      <ContactModal open={open} onClose={() => setOpen(false)} />

      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 mt-2 md:mt-2">
        {/* ===== NAV CONTAINER ===== */}
        <div className="w-full px-3 md:px-25">
          <div
            className="
              bg-gray-100 backdrop-blur-xl 
              rounded-full shadow-xl border border-blue-100
              mx-auto
              w-[94%] md:w-full
              py-2 md:py-0
            "
          >
            <div className="flex items-center justify-between px-4 py-2 md:py-2">

              {/* LOGO */}
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Artiflex IT"
                  className="h-10 md:h-14 ms-2 md:ms-4"
                />
              </Link>

              {/* DESKTOP NAV */}
              <nav className="hidden md:flex items-center gap-10 text-gray-800 font-medium">
                <Link to="/" className="hover:text-blue-600 transition">Home</Link>
                <Link to="/about" className="hover:text-blue-600 transition">About</Link>

                {/* SERVICES */}
                <div className="relative group">
                  <button
                   
                    className="flex items-center gap-1 hover:text-blue-600 transition"
                  >
                    Services <span className="text-xs">▼</span>
                  </button>


                  <div className="absolute top-10 left-0 w-72 rounded-xl bg-gradient-to-br from-blue-50 via-white to-blue-100 shadow-2xl border border-blue-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    {[
                      ["Infrastructure Solutions", "/infrastructure-solutions"],
                      ["Cyber Security", "/cyber-security-solutions"],
                      ["Application Security", "/application-security-solutions"],
                      ["Cloud Solutions", "/cloud-solutions"],
                      ["Managed Services", "/managed-services"],
                      ["AMC Services", "/amc-services"],
                    ].map(([name, path]) => (
                      <Link
                        key={name}
                        to={path}
                        className="block px-5 py-3 text-sm rounded-md text-gray-700 hover:text-blue-700 hover:bg-blue-100 transition"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                </div>

                <Link to="/faq" className="hover:text-blue-600 transition">FAQ</Link>
                <ContactButton onClick={() => setOpen(true)} />
              </nav>

              {/* MOBILE MENU BUTTON */}
              <button
                className="md:hidden text-3xl text-blue-700 me-2"
                onClick={() => setMobileOpen(true)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* ===== MOBILE FULL SCREEN MENU ===== */}
        {mobileOpen && (
          <div className="fixed inset-0 z-50 bg-gradient-to-br from-white via-blue-200 to-blue-500 flex flex-col items-center justify-center text-center">

            {/* CLOSE */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-3xl text-blue-700"
            >
              ✕
            </button>

            <nav className="space-y-8 text-xl font-medium text-gray-800">
              <Link onClick={() => setMobileOpen(false)} to="/" className="block hover:text-blue-600 transition">
                Home
              </Link>

              <Link onClick={() => setMobileOpen(false)} to="/about" className="block hover:text-blue-600 transition">
                About
              </Link>

              {/* SERVICES MOBILE */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-center gap-2 w-full hover:text-blue-600 transition"
                >
                  Services
                  <span className="text-xl">{servicesOpen ? "−" : "+"}</span>
                </button>

                {servicesOpen && (
                  <div className="mt-6 space-y-4 text-base">
                    {[
                      ["Infrastructure Solutions", "/infrastructure-solutions"],
                      ["Cyber Security", "/cyber-security-solutions"],
                      ["Application Security", "/application-security-solutions"],
                      ["Cloud Solutions", "/cloud-solutions"],
                      ["Managed Services", "/managed-services"],
                      ["AMC Services", "/amc-services"],
                    ].map(([name, path]) => (
                      <Link
                        key={name}
                        to={path}
                        onClick={() => {
                          setMobileOpen(false);
                          setServicesOpen(false);
                        }}
                        className="block hover:text-blue-700 transition"
                      >
                        {name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link onClick={() => setMobileOpen(false)} to="/faq" className="block hover:text-blue-600 transition">
                FAQ
              </Link>

              <Link
                onClick={() => setMobileOpen(false)}
                to="/contact"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow-lg hover:opacity-90 transition"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
