"use client";

export default function AboutContentSection() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 space-y-28">

        {/* ================= ABOUT TEXT ================= */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900">
            About ArtiflexIT
          </h2>
          <p className="mt-6 text-neutral-600 leading-relaxed text-base md:text-lg">
            <strong>ArtiflexIT</strong> is a leading IT solutions company serving businesses
            across Dubai, Abu Dhabi, Sharjah, and the UAE. With over
            <strong> 30 years of expertise</strong>, we deliver advanced IT services
            and integrated service management to help organizations overcome
            challenges and achieve sustainable growth.
          </p>

          <p className="mt-6 text-neutral-600 leading-relaxed text-base md:text-lg">
            Our certified professionals deliver tailored solutions — from
            on-premises infrastructure to hybrid and multi-cloud platforms —
            ensuring cost-effective, scalable, and future-ready systems.
          </p>

          <p className="mt-6 text-neutral-600 leading-relaxed text-base md:text-lg">
            As an <strong>ISO, TRA, SIRA, and MCC certified company</strong>, we uphold
            the highest standards of quality, security, and compliance. Our
            proven delivery framework ensures consistent excellence, making us
            a trusted technology partner for enterprises.
          </p>
        </div>

        {/* ================= VISION ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl group">
            <img
              src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1600&auto=format&fit=crop"
              alt="Vision"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="text-3xl font-bold text-neutral-900">
              Our Vision
            </h3>
            <p className="mt-4 text-neutral-600 leading-relaxed text-base md:text-lg">
              Empowering businesses with trust through 
cyber resilienc.
            </p>
          </div>
        </div>

        {/* ================= MISSION ================= */}
        <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
          {/* Text */}
          <div>
            <h3 className="text-3xl font-bold text-neutral-900">
              Our Mission
            </h3>
            <p className="mt-4 text-neutral-600 leading-relaxed text-base md:text-lg">
              To deliver customized, secure, and scalable IT 
solutions that empower industries from energy 
to fintech to operate efficiently and grow 
confidently.
            </p>
          </div>

          {/* Image */}
          <div className="overflow-hidden rounded-2xl group">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop"
              alt="Mission"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
          </div>
        </div>

        {/* ================= COMMITMENT ================= */}
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-neutral-900">
            Our Commitment
          </h3>
          <p className="mt-6 text-neutral-600 leading-relaxed text-base md:text-lg">
            Our commitment to customers is what makes us unique. We strive to
            build a reputable organization and a desirable place to work —
            positively impacting our clients and communities through innovation
            and excellence.
          </p>

          <p className="mt-6 text-neutral-600 leading-relaxed text-base md:text-lg">
            We do what we say. Our team goes above and beyond to respond quickly,
            adapt to customer needs, and deliver long-term value. When you
            engage artiflex, you benefit from the collective expertise of our
            entire organization.
          </p>
        </div>

      </div>
    </section>
  );
}
