import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Partners() {
  return (
    <>
      <Header />

      {/* PARTNER PAGE */}
      <section className="w-full min-h-screen bg-white pt-28">
        <div className="w-full h-[90vh]">
          <iframe
            src="https://www.sophos.com/en-us/site-in-a-box?partner_referral_id=0014w000047pf2XAAQ"
            title="Sophos Partner"
            className="w-full h-full border-0"
            allowFullScreen
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Partners;