"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { Server, Shield, Lock, Cloud, Settings, Headphones } from "lucide-react";

export default function LayoutGridDemo() {
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
          <LayoutGrid cards={cards} />
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
    thumbnail:
      "https://www.aiib.org/en/news-events/media-center/blog/2020/_img/AIIB-blog-header_Infrastructure-Embracing-Technology-1200px.jpg",
  },
  {
    id: 2,
    title: "Cyber Security Solutions",
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXp5KSS9ryiLSKDG79C87kqweZg7PoDjtDsQ&s",
  },
  {
    id: 3,
    title: "Application Security",
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://www.fujitsu.com/us/imagesgig5/application-transformation-640x396_tcm127-4190627_tcm127-2750223-32.png",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://stl.tech/wp-content/uploads/2021/11/cloud-computing.jpg",
  },
  {
    id: 5,
    title: "AMC Services",
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail:
      "https://www.pbctoday.co.uk/news/wp-content/uploads/2025/09/iStock-2205274485-scaled.jpg",
  },
  {
    id: 6,
    title: "Managed Services",
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail:
      "https://lh3.googleusercontent.com/proxy/WVbavyo5JJh0L7Kme89VVYx0WrpiXLvmRRjs4wvfjpwaM0I4wI9O1uNqS0q77wdS62fKEDmh9jeLYWrlsbnIbqV5840uvgqRdPRHncnCl7KRN0vq7w2Y9ue4uBU",
  },
];
