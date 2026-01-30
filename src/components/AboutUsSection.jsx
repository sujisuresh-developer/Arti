import Footer from "./Footer";
import Header from "./Header";
import HeroSection from "./HeroSection";
import OurPromiseVideo from "./OurPromiseVideo";
import TextGenerateEffectDemo from "./text-generate-effect-demo";

const AboutUsSection = () => {

    return (
        <>
            <Header />

            <section className="bg-[#f2f1e8] py-28 px-6 ">
                <div className="max-w-7xl mx-auto">

                    {/* TOP PROMISE */}
                   <TextGenerateEffectDemo/>

                    {/* VISION + MISSION */}
                    <div className="grid md:grid-cols-2 gap-16 mt-20">

                        {/* OUR VISION */}
                        <div>
                            <h3 className="text-3xl font-semibold mb-4 text-blue-900">
                                Our Vision
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
                                Empowering businesses with trust through cyber resilience.
                            </p>
                        </div>

                        {/* OUR MISSION */}
                        <div>
                            <h3 className="text-3xl font-semibold mb-4 text-blue-900">
                                Our Mission
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-lg max-w-xl">
                                To deliver customized, secure, and scalable IT solutions that empower
                                industries from energy to fintech to operate efficiently and grow
                                confidently.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            <OurPromiseVideo />


            <section className="relative overflow-hidden bg-[#f2f1e8] py-50">

                {/* 🔵 RIGHT SIDE CURVED BLUE GLOW */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">

                    {/* RIGHT EDGE BLUE ELLIPSE */}
                    <div
                        className="
      absolute
      top-1/2
      -translate-y-1/2
      -right-[25%]
      w-[520px]
      h-[300px]
      bg-blue-700
      opacity-60
      blur-[60px]
      rounded-full
    "
                    />

                    {/* LEFT EDGE BLUE ELLIPSE */}
                    <div
                        className="
      absolute
      top-1/2
      -translate-y-1/2
      -left-[25%]
      w-[520px]
      h-[300px]
      bg-blue-700
      opacity-50
      blur-[60px]
      rounded-full
    "
                    />

                </div>



                <div className="max-w-7xl mx-auto px-6 relative z-10">

                    {/* HEADING */}
                    <h2 className="text-4xl sm:text-5xl font-light mb-20">
                        <span className="font-normal"> Our Core Values</span> that guide our actions
                    </h2>

                    {/* VALUES GRID */}
                    <div className="grid sm:grid-cols-2 gap-x-24 gap-y-16 max-w-3xl">

                        {/* VALUE 1 */}
                        <div>
                            <div className="w-6 h-6 mb-4 rounded-full border border-blue-600 flex items-center justify-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Client Success</h4>
                            <p className="text-gray-600 leading-relaxed">
                                We prioritize understanding our clients’ goals and delivering solutions
                                that ensure measurable success.
                            </p>
                        </div>

                        {/* VALUE 2 */}
                        <div>
                            <div className="w-6 h-6 mb-4 rounded-full border border-blue-600 flex items-center justify-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            </div>
                            <h4 className="text-xl font-semibold mb-2"> Innovation</h4>
                            <p className="text-gray-600 leading-relaxed">
                                We embrace the latest technologies and approaches to keep our solutions
                                forward-thinking and effective.
                            </p>
                        </div>

                        {/* VALUE 3 */}
                        <div>
                            <div className="w-6 h-6 mb-4 rounded-full border border-blue-600 flex items-center justify-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Quality Program</h4>
                            <p className="text-gray-600 leading-relaxed">
                                Every project we undertake is driven by a strong commitment to quality
                                and continuous improvement.
                            </p>
                        </div>

                        {/* VALUE 4 */}
                        <div>
                            <div className="w-6 h-6 mb-4 rounded-full border border-blue-600 flex items-center justify-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Teamwork</h4>
                            <p className="text-gray-600 leading-relaxed">
                               Collaboration and mutual respect guide how we work with our clients and
                  within our teams.
                            </p>
                        </div>

                        {/* VALUE 5 */}
                        <div>
                            <div className="w-6 h-6 mb-4 rounded-full border border-blue-600 flex items-center justify-center">
                                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                            </div>
                            <h4 className="text-xl font-semibold mb-2">Ready for what’s next</h4>
                            <p className="text-gray-600 leading-relaxed">
                                We help you stay prepared for what’s ahead,
                                adapting as your business and threats evolve.
                            </p>
                        </div>

                    </div>
                </div>
            </section>


            <HeroSection/>

            <Footer />



        </>
    );
};


export default AboutUsSection;
