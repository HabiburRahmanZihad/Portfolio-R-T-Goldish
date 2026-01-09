import { useTypewriter, Cursor } from "react-simple-typewriter";
import { ArrowRight, Download, Github, Linkedin, Mail, ChevronDown } from "lucide-react";

// Heartbeat glow animation
const glowStyles = `
  @keyframes heartbeat-glow {
    0%, 100% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 0.8;
      transform: scale(1.05);
    }
  }
  .heartbeat-glow {
    animation: heartbeat-glow 3s ease-in-out infinite;
  }
`;

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "Software Engineer",
      "MERN Stack Developer",
      "Full-Stack Developer",
      "Problem Solver",
    ],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 50,
  });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 lg:py-0 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.02)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>

      <div className="relative max-w-7xl w-full mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Text Content - 7 columns */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-center lg:text-left">

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-base-content/5 border border-base-content/10 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-sm font-medium text-base-content/60">Available for work</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight leading-[0.95] mb-4 sm:mb-6">
              <span className="block">Hi, I'm</span>
              <span className="block text-primary">Habibur</span>
              <span className="block text-primary">Rahman Zihad.</span>
            </h1>

            {/* Typewriter Role */}
            <div className="flex items-center gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-8">
              <div className="w-8 sm:w-12 h-px bg-primary/50"></div>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-base-content/50">
                {typeEffect}
                <Cursor cursorStyle="_" cursorColor="var(--color-primary)" />
              </p>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg md:text-xl text-base-content/40 max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0">
              I build exceptional digital experiences with modern technologies.
              Passionate about clean code, scalable architecture, and creating impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-10 sm:mb-12 px-2 sm:px-0">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl bg-primary text-primary-content font-bold text-base sm:text-lg transition-all hover:shadow-2xl hover:shadow-primary/25 hover:scale-[1.02]"
              >
                View My Work
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="https://drive.google.com/file/d/1sOZMoUF9WEzITXZadlfNlYvSajeJ7AkL/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-2xl border-2 border-base-content/10 font-bold text-base sm:text-lg hover:border-primary/50 hover:bg-primary/5 transition-all"
              >
                <Download size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 sm:gap-6 justify-center lg:justify-start">
              <span className="text-xs sm:text-sm text-base-content/30 font-medium">Find me on</span>
              <div className="flex gap-2">
                {[
                  { icon: <Github size={18} />, href: "https://github.com/HabiburRahmanZihad", label: "GitHub" },
                  { icon: <Linkedin size={18} />, href: "https://linkedin.com/in/habiburrahmanzihad", label: "LinkedIn" },
                  { icon: <Mail size={18} />, href: "mailto:e241024@ugrad.iiuc.ac.bd", label: "Email" },
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl border border-base-content/10 bg-base-content/[0.02] flex items-center justify-center text-base-content/50 hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image Section - 5 columns */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <style>{glowStyles}</style>
            <div className="relative">
              {/* Heartbeat Glow Effect */}
              <div className="absolute -inset-6 sm:-inset-8 md:-inset-12 bg-linear-to-br from-primary/40 via-primary/20 to-primary/30 rounded-3xl blur-3xl heartbeat-glow"></div>

              {/* Decorative ring */}
              <div className="absolute -inset-4 sm:-inset-6 rounded-3xl border border-dashed border-primary/20 animate-[spin_30s_linear_infinite]"></div>

              {/* Image Container */}
              <div className="relative">
                {/* Border linear */}
                <div className="absolute -inset-1 bg-linear-to-b from-primary via-primary/50 to-primary/20 rounded-2xl"></div>

                {/* Image */}
                <div className="relative w-56 h-72 sm:w-72 sm:h-96 md:w-80 md:h-[26rem] lg:w-[22rem] lg:h-[28rem] xl:w-[26rem] xl:h-[32rem] rounded-2xl overflow-hidden bg-base-300">
                  <img
                    src="https://res.cloudinary.com/dvq3pcykn/image/upload/v1758785330/IMG-20241101-WA0192_vyojiv.jpg"
                    alt="Habibur Rahman Zihad - Software Engineer"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>

                {/* Experience Badge */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:-left-4 px-4 py-3 rounded-2xl bg-base-200 border border-base-content/10 shadow-xl">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-black text-primary">2+</p>
                    <p className="text-[10px] sm:text-xs font-medium text-base-content/50 uppercase tracking-wide">Years Exp.</p>
                  </div>
                </div>

                {/* Projects Badge */}
                <div className="absolute -bottom-2 -right-2 sm:bottom-4 sm:-right-4 px-4 py-3 rounded-2xl bg-base-200 border border-base-content/10 shadow-xl">
                  <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-black text-primary">15+</p>
                    <p className="text-[10px] sm:text-xs font-medium text-base-content/50 uppercase tracking-wide">Projects</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hidden lg:flex flex-col items-center mt-20">
          <a href="#about" className="group flex flex-col items-center gap-2 text-base-content/30 hover:text-primary transition-colors">
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;