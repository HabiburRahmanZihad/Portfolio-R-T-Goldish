import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Facebook, ArrowUp, Code2, Heart, Sparkles, MapPin, ExternalLink } from 'lucide-react';

const Footer = () => {
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 500);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

    const socials = [
        { icon: <Github size={20} />, href: "https://github.com/HabiburRahmanZihad", label: "Github", color: "#ffffff" },
        { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/habiburrahmanzihad", label: "LinkedIn", color: "#0A66C2" },
        { icon: <Facebook size={20} />, href: "https://www.facebook.com/habiburrahmanzihad.zihad", label: "Facebook", color: "#1877F2" },
        { icon: <Mail size={20} />, href: "mailto:e241024@ugrad.iiuc.ac.bd", label: "Email", color: "#EA4335" },
    ];

    const links = [
        { name: "Home", href: "#hero" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <>
            {/* Floating Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-primary text-primary-content shadow-xl shadow-primary/25 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-primary/40 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                    }`}
                aria-label="Scroll to top"
            >
                <ArrowUp size={22} />
            </button>

            <footer className="relative mt-20 sm:mt-32 overflow-hidden">
                {/* Background Elements */}
                <div className="absolute inset-0 bg-linear-to-t from-base-300 via-base-200 to-transparent"></div>
                <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl"></div>

                {/* Top Divider */}
                <div className="relative h-px bg-linear-to-r from-transparent via-base-content/20 to-transparent"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Main Footer Content */}
                    <div className="py-12 sm:py-16 lg:py-24">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8">
                            {/* Brand Section */}
                            <div className="sm:col-span-2 lg:col-span-5 space-y-5 sm:space-y-6">
                                <div className="flex items-center gap-3">
                                    <div className="relative">
                                        <div className="absolute -inset-1 bg-linear-to-r from-primary to-amber-500 rounded-xl sm:rounded-2xl blur opacity-40"></div>
                                        <div className="relative p-1 sm:p-2 rounded-lg sm:rounded-xl  text-primary-content">
                                            {/* <Code2 size={24} /> */}
                                            <img src="https://habibur-rahman-zihad.vercel.app/assets/withBorder-B4aPql45.png"
                                            className='w-10'    alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-black tracking-tight">Habibur Rahman Zihad</h3>
                                        <p className="text-xs sm:text-sm text-base-content/50">Full-Stack Developer</p>
                                    </div>
                                </div>

                                <p className="text-base-content/60 text-base sm:text-lg leading-relaxed max-w-md">
                                    Crafting digital experiences with modern technologies. Passionate about clean code, scalable architecture, and user-centric design.
                                </p>

                                <div className="flex items-center gap-2 text-base-content/50">
                                    <MapPin size={14} />
                                    <span className="text-xs sm:text-sm">Chattogram, Bangladesh</span>
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse ml-1 sm:ml-2"></span>
                                    <span className="text-xs sm:text-sm text-green-500">Available for work</span>
                                </div>

                                {/* Social Links */}
                                <div className="flex gap-2 sm:gap-3 pt-1 sm:pt-2">
                                    {socials.map((social, i) => (
                                        <a
                                            key={i}
                                            href={social.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="group relative w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl border border-base-content/10 bg-base-content/5 flex items-center justify-center hover:border-base-content/20 transition-all hover:scale-110"
                                            aria-label={social.label}
                                        >
                                            <span style={{ color: social.color }} className="group-hover:scale-110 transition-transform">
                                                {social.icon}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="lg:col-span-2">
                                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-base-content/40 mb-4 sm:mb-6">Navigation</h4>
                                <ul className="space-y-3 sm:space-y-4">
                                    {links.map((link) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                className="group flex items-center gap-2 text-base-content/60 hover:text-primary transition-colors text-sm sm:text-base"
                                            >
                                                <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all"></span>
                                                <span className="font-medium">{link.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Resources */}
                            <div className="lg:col-span-2">
                                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-base-content/40 mb-4 sm:mb-6">Resources</h4>
                                <ul className="space-y-3 sm:space-y-4">
                                    <li>
                                        <a href="https://drive.google.com/file/d/1sOZMoUF9WEzITXZadlfNlYvSajeJ7AkL/view?usp=sharing" className="group flex items-center gap-2 text-base-content/60 hover:text-primary transition-colors text-sm sm:text-base">
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all"></span>
                                            <span className="font-medium">Resume</span>
                                            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/HabiburRahmanZihad" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-base-content/60 hover:text-primary transition-colors text-sm sm:text-base">
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all"></span>
                                            <span className="font-medium">GitHub</span>
                                            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://linkedin.com/in/habiburrahmanzihad" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-base-content/60 hover:text-primary transition-colors text-sm sm:text-base">
                                            <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all"></span>
                                            <span className="font-medium">LinkedIn</span>
                                            <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* CTA Section */}
                            <div className="sm:col-span-2 lg:col-span-3">
                                <div className="p-5 sm:p-6 rounded-2xl border border-base-content/10 bg-linear-to-br from-primary/10 via-transparent to-transparent">
                                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                        <Sparkles size={18} className="text-primary" />
                                        <h4 className="font-bold text-base sm:text-lg">Let's Work Together</h4>
                                    </div>
                                    <p className="text-base-content/60 text-xs sm:text-sm mb-4 sm:mb-5">
                                        Have a project in mind? I'd love to hear about it.
                                    </p>
                                    <a
                                        href="#contact"
                                        className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-primary text-primary-content font-bold text-sm sm:text-base transition-all hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02]"
                                    >
                                        Get in Touch
                                        <ArrowUp size={14} className="rotate-45 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="py-5 sm:py-6 border-t border-base-content/10">
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
                            <p className="text-xs sm:text-sm text-base-content/40 text-center sm:text-left">
                                © {currentYear} Habibur Rahman Zihad. All rights reserved.
                            </p>

                            <div className="flex items-center gap-4 sm:gap-6">
                                <p className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-base-content/40">
                                    Crafted with
                                    <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" />
                                    using React & Tailwind
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Bottom linear */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>
            </footer>
        </>
    );
};

export default Footer;