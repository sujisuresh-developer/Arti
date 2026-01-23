
import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Contact = () => {
    return (
        <>
            <Header />

            {/* FLOATING CONTACT CARD */}
            <section className="mt-30 relative z-10 mb-32">
                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 rounded-3xl overflow-hidden shadow-2xl bg-[#f2f1e8]">

                        {/* LEFT – INFO PANEL */}
                        {/* LEFT – INFO PANEL */}
                        <div className="relative p-10">

                            {/* HALFTONE WRAPPER (LEFT SIDE ONLY) */}
                            <div className="absolute inset-0 overflow-hidden rounded-l-xl">

                                {/* Halftone pattern */}
                                <div className="absolute inset-0 
      bg-[radial-gradient(#00000033_1px,transparent_1px)] 
      [background-size:6px_6px]" />

                                {/* Image centered inside halftone */}
                                <div
                                    className="absolute inset-2 bg-cover bg-center blur-sm opacity-50 rounded-2xl"
                                    style={{
                                        backgroundImage:
                                            "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c')",
                                    }}
                                />

                                {/* Soft color wash (yellow/blue style) */}
                                <div className="absolute inset-0 bg-blue-200/60" />
                            </div>

                            {/* CONTENT */}
                            <div className="relative z-10 space-y-6 text-neutral-900">

                                <h2 className="text-4xl font-light leading-tight">
                                    Get absolute <br />
                                    clarity within <span className="font-semibold">72 hours</span>
                                </h2>

                                <p className="max-w-md">
                                    We understand that growing businesses can’t afford to be in the dark.
                                </p>

                                {/* TIMELINE */}
                                <div className="space-y-3 max-w-md">

                                    <div className="bg-white/80 rounded-lg px-4 py-3 flex gap-4">
                                        <span className="text-xs font-semibold whitespace-nowrap">
                                            24 HOURS
                                        </span>
                                        <p className="text-sm">
                                            A tailored report highlighting your top cyber risks and vulnerabilities.
                                        </p>
                                    </div>

                                    <div className="bg-white/80 rounded-lg px-4 py-3 flex gap-4">
                                        <span className="text-xs font-semibold whitespace-nowrap">
                                            48 HOURS
                                        </span>
                                        <p className="text-sm">
                                            Clear, jargon-free recommendations aligned to your business needs.
                                        </p>
                                    </div>

                                    <div className="bg-white/80 rounded-lg px-4 py-3 flex gap-4">
                                        <span className="text-xs font-semibold whitespace-nowrap">
                                            72 HOURS
                                        </span>
                                        <p className="text-sm">
                                            A roadmap showing exactly what to do next to protect your business.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>


                        {/* RIGHT – FORM */}
                        <div className="relative p-10">

                            {/* Halftone behind form (middle visible like reference) */}
                            <div className="absolute inset-0 bg-[radial-gradient(#0000001a_1px,transparent_1px)] [background-size:6px_6px]" />

                            <div className="relative z-10">
                                <form className="space-y-10">

                                    <div className="grid sm:grid-cols-2 gap-10">
                                        <div>
                                            <label className="text-sm">First Name *</label>
                                            <input className="w-full bg-transparent border-b border-neutral-400 focus:outline-none py-2" />
                                        </div>

                                        <div>
                                            <label className="text-sm">Last Name *</label>
                                            <input className="w-full bg-transparent border-b border-neutral-400 focus:outline-none py-2" />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-10">
                                        <div>
                                            <label className="text-sm">Email *</label>
                                            <input className="w-full bg-transparent border-b border-neutral-400 focus:outline-none py-2" />
                                        </div>

                                        <div>
                                            <label className="text-sm">Select Service</label>
                                            <select className="w-full bg-transparent border-b border-neutral-400 focus:outline-none py-2">
                                               

                                                
                                                <option>Infrastructure Solutions</option>
                                                <option>Cyber Security</option>
                                                <option>Application Security</option>
                                                <option>Cloud Solutions</option>
                                                <option>Managed Services</option>
                                                <option>AMC Services</option>

                                            </select>
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-10">
                                        <div>
                                            <label className="text-sm">No. of Employees</label>
                                            <input className="w-full bg-transparent border-b border-neutral-400 focus:outline-none py-2" />
                                        </div>

                                        <div>
                                            <label className="text-sm">Phone</label>
                                            <input className="w-full bg-transparent border-b border-neutral-400 focus:outline-none py-2" />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="text-sm">Company *</label>
                                        <input className="w-full bg-transparent border-b border-neutral-400 focus:outline-none py-2" />
                                    </div>

                                    <div>
                                        <label className="text-sm">Message</label>
                                        <input className="w-full bg-transparent border-b border-neutral-400 focus:outline-none py-2"/>
                                            
                                      
                                    </div>

                                    <button className="w-full bg-black text-blue-400   py-4 rounded-full font-semibold flex items-center justify-center gap-2">
                                        Submit →
                                    </button>

                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <Footer />
        </>
    )
}

export default Contact
