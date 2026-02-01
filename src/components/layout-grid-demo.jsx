"use client";
import React from "react";
import { LayoutGrid } from "./ui/layout-grid";
import { Server, Shield, Lock, Cloud, Settings, Headphones } from "lucide-react";

export default function LayoutGridDemo() {
  return (
    <section className="min-h-screen py-20 w-full bg-background mt-40">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Core IT Solutions for <br /> Modern Enterprises
          </h2>
          <p className="mt-4 text-muted-foreground">
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
      <p className="font-bold md:text-4xl text-xl text-white">
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
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=3534&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Cyber Security Solutions",
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Application Security",
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Cloud Solutions",
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=3544&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "AMC Services",
    content: <SkeletonFive />,
    className: "md:col-span-2",
    thumbnail:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=3540&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Managed Services",
    content: <SkeletonSix />,
    className: "col-span-1",
    thumbnail:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=3540&auto=format&fit=crop",
  },
];
