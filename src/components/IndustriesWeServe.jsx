import {
  Zap,
  Building2,
  Heart,
  TrendingUp,
} from "lucide-react";
import { FocusCards } from "../components/ui/focus-cards";

const industries = [
  {
    title: "Energy & Utilities",
    desc: "Smart grid management and secure operational technology infrastructure for energy providers.",
    image:
      "https://images.unsplash.com/photo-1758797899821-46e9aa667409?w=600&auto=format&fit=crop&q=60",
    icon: Zap,
  },
  {
    title: "Financial Services",
    desc: "Compliance-ready infrastructure and advanced security for banking and fintech operations.",
    image:
      "https://plus.unsplash.com/premium_photo-1673208585690-fe33159386bd?w=600&auto=format&fit=crop&q=60",
    icon: Building2,
  },
  {
    title: "Healthcare",
    desc: "HIPAA-compliant systems ensuring patient data security and seamless healthcare delivery.",
    image:
      "https://media.istockphoto.com/id/1946361629/photo/artificial-intelligence-healthcare-medical-research-data-science.jpg?s=612x612&w=0&k=20&c=wuoOegbqBUmNH1XPaqqOXZ1E425O5yrpMUQSka9vig4=",
    icon: Heart,
  },
  {
    title: "Enterprise & SaaS",
    desc: "Scalable cloud architecture and DevOps for high-growth technology companies.",
    image:
      "https://media.istockphoto.com/id/2252195072/photo/digital-business-solution-with-ai-and-data-infrastructure-concept-3d-rendering.jpg?s=612x612&w=0&k=20&c=JaRinxhAxzWPNAZuXhec950mHknQueua9iKRBCTdzV0=",
    icon: TrendingUp,
  },
];

const IndustriesWeServe = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Industries We Serve
          </h2>
          <p className="mt-4 text-gray-600">
            Deep expertise across critical sectors, delivering industry-specific
            solutions that meet regulatory and operational demands.
          </p>
        </div>

        {/* FOCUS CARDS */}
        <div className="mt-16">
          <FocusCards cards={industries} />
        </div>

      </div>
    </section>
  );
};

export default IndustriesWeServe;
