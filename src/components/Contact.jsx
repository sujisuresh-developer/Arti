import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, service, message } = formData;

    const whatsappMessage = `
New Enquiry from Artiflex IT Website

Name: ${name}
Email: ${email}
Service: ${service}
Message: ${message}
    `;

    const encodedMessage = encodeURIComponent(whatsappMessage);

    window.open(
      `https://wa.me/971522076531?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <>
      <Header />

      <section className="min-h-screen bg-[#F2F7FF] flex justify-center px-4 py-28">
        <div className="w-full max-w-5xl">
          <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">

              {/* LEFT */}
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-black">
                  Let’s Talk
                </h2>

                <p className="mt-4 md:mt-5 text-gray-700 leading-relaxed text-sm md:text-base">
                  Have some big idea or business to develop and need help?
                  Then reach out we’d love to hear about your project and provide help
                </p>

               <div className="mt-6 md:mt-8">
  <h4 className="font-bold">Email</h4>
  <a
    href="mailto:Info@artiflexit.com"
    className="text-gray-700 hover:text-[#02AEEC] transition"
  >
    Info@artiflexit.com
  </a>
</div>

<div className="mt-5">
  <h4 className="font-bold">Phone</h4>
  <a
    href="tel:+971558086462"
    className="text-gray-700 hover:text-[#02AEEC] transition"
  >
    +971 558086462
  </a>
</div>

<div className="mt-5">
  <h4 className="font-bold">Address</h4>
  <a
    href="https://www.google.com/maps/search/?api=1&query=Malik+Saeed+Suhail+Saeed+Bin+Daliwi+Al-Kutbi+Bardab+First+Commercial+Center+4"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-700 hover:text-[#02AEEC] transition leading-relaxed block"
  >
    Malik Saeed Suhail Saeed Bin Daliwi Al-Kutbi -
    Bardab - First Commercial Center 4
  </a>
</div>
              </div>

              {/* RIGHT */}
              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 w-full bg-gray-100 px-4 py-2.5 rounded-lg outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full bg-gray-100 px-4 py-2.5 rounded-lg outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    What service are you interested in
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1 w-full bg-gray-100 px-4 py-2.5 rounded-lg outline-none"
                  >
                    <option>Select a Service</option>
                    <option>Infrastructure Solutions</option>
                    <option>Cyber Security</option>
                    <option>Application Security</option>
                    <option>Cloud Solutions</option>
                    <option>Managed Services</option>
                    <option>AMC Services</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="3"
                    className="mt-1 w-full bg-gray-100 px-4 py-2.5 rounded-lg outline-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-3 py-3 rounded-full bg-[#02AEEC] text-white font-semibold hover:opacity-90 transition"
                >
                  Connect With Us
                </button>
              </form>

            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;