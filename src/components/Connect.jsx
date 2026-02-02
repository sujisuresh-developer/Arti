import React from 'react'

function Connect() {
  return (
    <>
    <section className="min-h-screen bg-[black] flex justify-center px-4 py-28">
        {/* CONTENT WRAPPER */}
        <div className="w-full max-w-5xl">

          {/* CONTACT BOX */}
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
                  <p className="text-gray-700">info@artiflex.com</p>
                </div>

                <div className="mt-5 md:mt-6">
                  <h4 className="font-bold">Socials</h4>
                  <ul className="mt-2 space-y-1 underline text-gray-700">
                    <li>Instagram</li>
                    <li>Twitter</li>
                    <li>Facebook</li>
                  </ul>
                </div>
              </div>

              {/* RIGHT */}
              <form className="space-y-3 md:space-y-4">
                <div>
                  <label className="text-sm font-medium">Name</label>
                  <input
                    className="mt-1 w-full bg-gray-100 px-4 py-2.5 rounded-lg outline-none"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">Email</label>
                  <input
                    className="mt-1 w-full bg-gray-100 px-4 py-2.5 rounded-lg outline-none"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium">
                    What service are you interested in
                  </label>
                  <select className="mt-1 w-full bg-gray-100 px-4 py-2.5 rounded-lg outline-none">
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
    </>
  )
}

export default Connect