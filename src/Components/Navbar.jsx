import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "coffee");
    const [activeSection, setActiveSection] = useState("hero");
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "coffee" ? "nord" : "coffee"));
    };

    const navLinks = [
        { name: "Home", href: "#hero", id: "hero" },
        { name: "About", href: "#about", id: "about" },
        { name: "Projects", href: "#projects", id: "projects" },
        { name: "Contact", href: "#contact", id: "contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            const sections = navLinks.map(link => document.getElementById(link.id));
            const scrollPos = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPos) {
                    setActiveSection(navLinks[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setMobileMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const handleClick = (e, href) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const id = href.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-3">
                {/* Desktop Navigation */}
                <nav className={`hidden md:flex items-center gap-1 px-1.5 py-1.5 rounded-full transition-all duration-300 ${scrolled
                    ? 'bg-base-200/90 backdrop-blur-md shadow-lg border border-base-content/5'
                    : 'bg-base-200/70 border border-transparent'
                    }`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={(e) => handleClick(e, link.href)}
                            className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${activeSection === link.id
                                ? 'bg-primary text-primary-content shadow-md'
                                : 'text-base-content/70 hover:text-base-content hover:bg-base-content/5'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                    <div className="w-px h-6 bg-base-content/10 mx-1" />
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-primary hover:bg-base-content/10 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {theme === "coffee" ? <Sun size={18} /> : <Moon size={18} />}
                    </button>
                </nav>

                {/* Mobile Navigation Header */}
                <nav className={`md:hidden flex items-center justify-between w-full max-w-md px-4 py-2 rounded-full transition-all duration-300 ${scrolled
                    ? 'bg-base-200/90 backdrop-blur-md shadow-lg border border-base-content/5'
                    : 'bg-base-200/70 border border-transparent'
                    }`}>
                    <span className="text-lg font-bold text-primary">SA</span>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-primary hover:bg-base-content/10 transition-colors"
                            aria-label="Toggle theme"
                        >
                            {theme === "coffee" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="p-2 rounded-full hover:bg-base-content/10 transition-colors"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Panel */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-64 bg-base-200 border-l border-base-content/10 md:hidden transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full pt-20 pb-8 px-6">
                    <nav className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={(e) => handleClick(e, link.href)}
                                className={`px-4 py-3 rounded-xl font-medium transition-all ${activeSection === link.id
                                        ? 'bg-primary text-primary-content'
                                        : 'text-base-content/70 hover:text-base-content hover:bg-base-content/5'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>
                    <div className="mt-auto pt-6 border-t border-base-content/10">
                        <p className="text-xs text-base-content/40 text-center">© 2026 Habibur Rahman</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;