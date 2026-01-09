import React, { useState } from "react";

// Image Imports
import CR_Home from "../assets/CityResolved/Home.png";
import CR_Dash from "../assets/CityResolved/Dashboard.png";
import CR_Feat from "../assets/CityResolved/Feature.png";

import CC_Home from "../assets/CleanAndConnect/Home.png";
import CC_Dash from "../assets/CleanAndConnect/Dashboard.png";
import CC_Feat from "../assets/CleanAndConnect/Feature.png";

// Icons & UI
import { ExternalLink, Github, Lock, CreditCard, BarChart3, Zap, ShieldCheck, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { SiReact, SiNodedotjs, SiMongodb, SiFirebase, SiStripe, SiTailwindcss, SiExpress } from "react-icons/si";

const projectData = [
  {
    title: "CityResolved",
    subtitle: "Public Infrastructure Reporting",
    description: "Digital platform connecting citizens with municipal authorities for real-time infrastructure management. Features role-based dashboards, real-time notifications, and comprehensive analytics.",
    live: "https://city-resolved.web.app/",
    clientRepo: "https://github.com/S-Arafin/City-Resolved",
    images: [CR_Home, CR_Dash, CR_Feat],
    features: [
      { icon: <Lock size={14} />, label: "JWT Auth" },
      { icon: <CreditCard size={14} />, label: "Stripe Pay" },
      { icon: <BarChart3 size={14} />, label: "Analytics" },
    ],
    stack: [
      { Icon: SiReact, name: "React", color: "#61DAFB" },
      { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { Icon: SiExpress, name: "Express", color: "#ffffff" },
      { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
      { Icon: SiStripe, name: "Stripe", color: "#635BFF" },
    ],
    linear: "from-amber-500/20 via-orange-500/10 to-transparent",
  },
  {
    title: "CleanConnect",
    subtitle: "Community Issue Tracker",
    description: "Full-stack MERN application connecting community environmental problems with collective solutions through crowdfunding and volunteer coordination.",
    live: "https://clean-and-connect.web.app/",
    clientRepo: "https://github.com/S-Arafin/clean-and-connect",
    images: [CC_Home, CC_Dash, CC_Feat],
    features: [
      { icon: <Zap size={14} />, label: "Real-time" },
      { icon: <ShieldCheck size={14} />, label: "TanStack" },
      { icon: <BarChart3 size={14} />, label: "Analytics" },
    ],
    stack: [
      { Icon: SiReact, name: "React", color: "#61DAFB" },
      { Icon: SiNodedotjs, name: "Node.js", color: "#339933" },
      { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { Icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
      { Icon: SiFirebase, name: "Firebase", color: "#FFCA28" },
    ],
    linear: "from-emerald-500/20 via-teal-500/10 to-transparent",
  }
];

const ImageGallery = ({ images, title }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => setActiveIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative group">
      {/* Main Image Container */}
      <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-base-content/10 bg-base-300/50 shadow-2xl">
        {/* Browser Chrome */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-base-300/90 backdrop-blur-sm border-b border-base-content/10 flex items-center px-4 z-10">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="px-4 py-1 rounded-md bg-base-content/5 text-[10px] text-base-content/40 font-mono">
              {title.toLowerCase().replace(/\s/g, '-')}.web.app
            </div>
          </div>
        </div>

        {/* Image */}
        <img
          src={images[activeIndex]}
          alt={`${title} screenshot ${activeIndex + 1}`}
          className="w-full h-full object-cover object-top pt-8 transition-transform duration-500"
          loading="lazy"
        />

        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-base-300/90 backdrop-blur-sm border border-base-content/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-content hover:border-primary"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-base-300/90 backdrop-blur-sm border border-base-content/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-primary hover:text-primary-content hover:border-primary"
        >
          <ChevronRight size={20} />
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${activeIndex === i
                ? 'bg-primary w-6'
                : 'bg-base-content/30 hover:bg-base-content/50'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Thumbnail Strip */}
      <div className="flex gap-3 mt-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`relative flex-1 aspect-video rounded-xl overflow-hidden border-2 transition-all ${activeIndex === i
              ? 'border-primary shadow-lg shadow-primary/20 scale-[1.02]'
              : 'border-base-content/10 opacity-50 hover:opacity-80 hover:border-base-content/20'
              }`}
          >
            <img src={img} alt="" className="w-full h-full object-cover" loading="lazy" />
            {activeIndex === i && (
              <div className="absolute inset-0 bg-primary/10"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index }) => {
  const isReversed = index % 2 === 1;

  return (
    <div className="relative">
      {/* Background linear Blob */}
      <div className={`absolute -inset-4 bg-linear-to-br ${project.linear} rounded-[3rem] blur-3xl opacity-50`}></div>

      {/* Card Container */}
      <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Image Section */}
        <div className={isReversed ? "lg:order-2" : ""}>
          <ImageGallery images={project.images} title={project.title} />
        </div>

        {/* Content Section */}
        <div className={`space-y-4 sm:space-y-6 ${isReversed ? "lg:order-1 lg:text-right" : ""}`}>
          {/* Subtitle Badge */}
          <div className={`flex ${isReversed ? "lg:justify-end" : ""}`}>
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles size={12} className="text-primary sm:w-[14px] sm:h-[14px]" />
              <span className="text-primary text-xs sm:text-sm font-bold uppercase tracking-wider">
                {project.subtitle}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-base-content/60 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl">
            {project.description}
          </p>

          {/* Features Pills */}
          <div className={`flex flex-wrap gap-2 sm:gap-3 ${isReversed ? "lg:justify-end" : ""}`}>
            {project.features.map((feat, i) => (
              <div
                key={i}
                className="group flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-base-content/5 border border-base-content/10 hover:border-primary/30 hover:bg-primary/5 transition-all cursor-default"
              >
                <span className="text-primary group-hover:scale-110 transition-transform">{feat.icon}</span>
                <span className="text-xs sm:text-sm font-semibold">{feat.label}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div className={`flex items-center gap-3 sm:gap-4 ${isReversed ? "lg:justify-end" : ""}`}>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-base-content/40">
              Built with
            </span>
            <div className="h-px flex-1 max-w-8 sm:max-w-12 bg-base-content/10"></div>
            <div className="flex gap-1">
              {project.stack.map(({ Icon, name, color }, i) => (
                <div
                  key={i}
                  className="group relative w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-base-content/5 border border-base-content/10 flex items-center justify-center hover:border-base-content/20 hover:bg-base-content/10 transition-all cursor-pointer"
                >
                  <Icon className="text-sm sm:text-lg" style={{ color }} />
                  {/* Tooltip */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-base-300 rounded-lg text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-base-content/10 hidden sm:block">
                    {name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 ${isReversed ? "lg:justify-end" : ""}`}>
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-primary text-primary-content font-bold text-base sm:text-lg overflow-hidden transition-all hover:shadow-xl hover:shadow-primary/25 hover:scale-[1.02] text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Live Demo
                <ExternalLink size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </a>
            <a
              href={project.clientRepo}
              target="_blank"
              rel="noreferrer"
              className="group px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-base-content/5 border-2 border-base-content/10 font-bold text-base sm:text-lg hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-[1.02] text-center"
            >
              <span className="flex items-center justify-center gap-2">
                Source Code
                <Github size={16} className="group-hover:rotate-12 transition-transform" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="relative mb-14 lg:mb-32">
        {/* Background Text */}
        <div className="absolute -top-4 sm:-top-8 left-0 text-[5rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-base-content/[0.02] leading-none select-none pointer-events-none">
          WORK
        </div>

        <div className="relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-primary text-sm font-bold">Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tight mb-4 sm:mb-6">
            Featured<br />
            <span className="text-primary">Projects</span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-base-content/50 max-w-2xl">
            Crafting digital experiences with modern technologies and clean architecture.
          </p>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-20 sm:space-y-32 lg:space-y-48">
        {projectData.map((project, idx) => (
          <ProjectCard key={idx} project={project} index={idx} />
        ))}
      </div>

      {/* More Projects CTA */}
      <div className="mt-20 sm:mt-32 lg:mt-48 text-center">
        <div className="inline-flex flex-col items-center gap-4 sm:gap-6">
          <p className="text-base-content/50 text-base sm:text-lg">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/HabiburRahmanZihad"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-base-content/10 hover:border-primary/50 bg-base-content/5 hover:bg-primary/5 transition-all"
          >
            <Github size={20} />
            <span className="font-bold text-base sm:text-lg">View All Projects on GitHub</span>
            <ExternalLink size={16} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all hidden sm:block" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;