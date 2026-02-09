"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { Server, Shield, Lock, Cloud, Settings, Headphones } from "lucide-react";
import { useNavigate } from "react-router-dom";
import inf from "../assets/3d.jpg";
import secure from "../assets/secure.jpg";
import apps from "../assets/apps.jpg";
import clouds from "../assets/clouds.jpg";



export default function LayoutGridDemo() {
    const navigate = useNavigate();
  return (
    <section className="min-h-screen py-20 w-full bg-background mt-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
            Core IT Solutions for <br /> Modern Enterprises
          </h2>
          <p className="mt-4 mt-6 text-lg text-slate-600 leading-relaxed">
            Comprehensive technology services designed to accelerate your digital
            transformation and secure your infrastructure.
          </p>
        </div>
        <div className="mt-16">
          <LayoutGrid cards={cards} 
          onCardClick={(card) => navigate(card.href)}
          />
        </div>
      </div>
    </section>
  );
}

/* ===== CONTENT ===== */

const SkeletonOne = () => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <Server className="w-6 h-6 text-white" />
      <p className="font-extrabold md:text-4xl text-xl text-white">
        Infrastructure Solutions
      </p>
    </div>
    <p className="text-neutral-200">
      Build robust, scalable network architectures that power enterprise operations.
    </p>
  </div>
);

const SkeletonTwo = () => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <Shield className="w-6 h-6 text-white" />
      <p className="font-bold md:text-4xl text-xl text-white">
        Cyber Security Solutions
      </p>
    </div>
    <p className="text-neutral-200">
      Comprehensive threat protection and monitoring.
    </p>
  </div>
);

const SkeletonThree = () => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <Lock className="w-6 h-6 text-white" />
      <p className="font-bold md:text-4xl text-xl text-white">
        Application Security
      </p>
    </div>
    <p className="text-neutral-200">
      End-to-end security for applications.
    </p>
  </div>
);

const SkeletonFour = () => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <Cloud className="w-6 h-6 text-white" />
      <p className="font-bold md:text-4xl text-xl text-white">
        Cloud Solutions
      </p>
    </div>
    <p className="text-neutral-200">
      Cloud migration and optimization services.
    </p>
  </div>
);

const SkeletonFive = () => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <Settings className="w-6 h-6 text-white" />
      <p className="font-bold md:text-4xl text-xl text-white">
        AMC Services
      </p>
    </div>
    <p className="text-neutral-200">
      Proactive annual maintenance services.
    </p>
  </div>
);

const SkeletonSix = () => (
  <div>
    <div className="flex items-center gap-2 mb-2">
      <Headphones className="w-6 h-6 text-white" />
      <p className="font-bold md:text-4xl text-xl text-white">
        Managed Services
      </p>
    </div>
    <p className="text-neutral-200">
      24/7 IT support and monitoring.
    </p>
  </div>
);

/* ===== CARDS DATA ===== */

const cards = [
  {
    id: 1,
    title: "Infrastructure Solutions",
    content: <SkeletonOne />,
    className: "md:col-span-2",
     href: "/infrastructure-solutions",
    thumbnail:
      inf,
  },
  {
    id: 2,
    title: "Cyber Security Solutions",
    content: <SkeletonTwo />,
    className: "col-span-1",
        href: "/cyber-security-solutions",
    thumbnail:
      secure,
  },
  {
    id: 3,
    title: "Application Security",
    content: <SkeletonThree />,
    className: "col-span-1",
    href: "/application-security-solutions",
    thumbnail:
      apps,
  },
  {
    id: 4,
    title: "Cloud Solutions",
    content: <SkeletonFour />,
    className: "md:col-span-2",
    href: "/cloud-solutions",
    thumbnail:
      "https://stl.tech/wp-content/uploads/2021/11/cloud-computing.jpg",
  },
  {
    id: 5,
    title: "AMC Services",
    content: <SkeletonFive />,
    className: "md:col-span-2",
    href: "/amc-services",
    thumbnail:
      "https://media.istockphoto.com/id/2179880282/photo/businessman-hands-hold-global-hosting-technology-server-management-cloud-storage-uptime.jpg?s=612x612&w=0&k=20&c=HqlqJpsXHSXyb_1f5h236gFJg9UAfHqnGVmjTDMXMDA=",
  },
  {
    id: 6,
    title: "Managed Services",
    content: <SkeletonSix />,
    className: "col-span-1",
    href: "/managed-services",
    thumbnail:
      "https://lh3.googleusercontent.com/proxy/WVbavyo5JJh0L7Kme89VVYx0WrpiXLvmRRjs4wvfjpwaM0I4wI9O1uNqS0q77wdS62fKEDmh9jeLYWrlsbnIbqV5840uvgqRdPRHncnCl7KRN0vq7w2Y9ue4uBU",
  },
];
