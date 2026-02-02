import {
  Target,
  Layers,
  Users,
  Award
} from "lucide-react";
import { motion } from "framer-motion";
import { FocusCards } from "./ui/focus-cards";

const features = [
  {
    icon: Target,
    title: "Tailored IT Solutions",
    desc: "Custom-built infrastructure and services designed specifically for your business size, industry, and growth objectives.",
    image:
      "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg?semt=ais_user_personalization&w=740&q=80",
  },
  {
    icon: Layers,
    title: "Secure & Scalable Frameworks",
    desc: "Future-ready architecture that grows with your business while maintaining the highest security standards.",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFMFMUGbCPidwAUhI57qfFeNtafiIlKy4Ssg&s",
  },
  {
    icon: Users,
    title: "Dedicated Technology Partner",
    desc: "A committed team working as an extension of your organization, understanding your unique challenges.",
    image:"https://img.freepik.com/premium-photo/concept-partnership-teamwork-mixed-media_641298-9260.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    desc: "500+ successful implementations across global enterprises with 99.9% uptime and client satisfaction.",
    image:"https://plus.unsplash.com/premium_photo-1661878265739-da90bc1af051?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGF0YSUyMHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-[#F7FAFF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Artiflex IT
          </h2>
          <p className="mt-4 text-gray-600">
            We're not just another IT provider — we're your strategic technology
            partner committed to your long-term success.
          </p>
        </div>

        {/* 🔵 BLUE BLOCK LINE */}
       <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] mt-14">
  <div className="h-[30px] bg-[#2563eb]" />
</div>

      <div className="mt-16">
          {/* Cards */}
         <FocusCards cards={features} />
  
      </div>
      </div>
    </section>



  );
};

export default WhyChooseUs;
