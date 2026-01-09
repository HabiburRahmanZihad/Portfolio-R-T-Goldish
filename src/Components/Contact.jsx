import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Mail, MapPin, Phone, Linkedin, Github, Facebook, CheckCircle2, MessageSquare } from 'lucide-react';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setIsSending(false);
                setShowModal(true);
                form.current.reset();
            }, (error) => {
                console.error("EmailJS Error:", error);
                setIsSending(false);
                alert("Failed to send message. Please try again.");
            });
    };

    const contactInfo = [
        { icon: <Mail size={20} />, label: "Email", value: "e241024@ugrad.iiuc.ac.bd", href: "mailto:e241024@ugrad.iiuc.ac.bd" },
        { icon: <Phone size={20} />, label: "Phone", value: "+88013294535**", href: "tel:+88013294535**" },
        { icon: <MapPin size={20} />, label: "Location", value: "Chattogram, Bangladesh" },
    ];

    const socials = [
        { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/habiburrahmanzihad", label: "LinkedIn" },
        { icon: <Github size={20} />, href: "https://github.com/HabiburRahmanZihad", label: "GitHub" },
        { icon: <Facebook size={20} />, href: "https://www.facebook.com/habiburrahmanzihad.zihad", label: "Facebook" },
    ];

    return (
        <section id="contact" className="py-20 lg:py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Success Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md" onClick={() => setShowModal(false)}>
                    <div className="relative bg-base-100 rounded-3xl p-8 sm:p-10 max-w-md w-full text-center space-y-5 sm:space-y-6 border border-base-content/10 shadow-2xl" onClick={e => e.stopPropagation()}>
                        {/* Glow */}
                        <div className="absolute -inset-1 bg-linear-to-r from-primary/20 via-green-500/20 to-primary/20 rounded-3xl blur-xl opacity-50"></div>

                        <div className="relative">
                            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-black">Message Sent!</h3>
                            <p className="text-base-content/60 text-base sm:text-lg mt-2">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                            <button onClick={() => setShowModal(false)} className="mt-6 sm:mt-8 w-full py-3 sm:py-4 rounded-2xl bg-primary text-primary-content font-bold text-base sm:text-lg hover:shadow-xl hover:shadow-primary/25 transition-all">
                                Got it!
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Header */}
            <div className="relative mb-14 lg:mb-28">
                {/* Background Text */}
                <div className="absolute -top-4 sm:-top-8 left-0 text-[4rem] sm:text-[8rem] md:text-[12rem] lg:text-[16rem] font-black text-base-content/[0.02] leading-none select-none pointer-events-none">
                    CONTACT
                </div>

                <div className="relative">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 sm:mb-6">
                        <MessageSquare size={14} className="text-primary" />
                        <span className="text-primary text-sm font-bold">Let's Talk</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black tracking-tight mb-4 sm:mb-6">
                        Get in<br />
                        <span className="text-primary">Touch</span>
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-base-content/50 max-w-xl">
                        Ready to discuss your next project or opportunity. Let's create something amazing together.
                    </p>
                </div>
            </div>

            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                {/* Contact Info - Left Column */}
                <div className="lg:col-span-2 space-y-6">
                    {/* Contact Cards */}
                    <div className="space-y-3">
                        {contactInfo.map((item, i) => (
                            <div
                                key={i}
                                className="group p-4 rounded-2xl border border-base-content/10 bg-base-content/[0.02] hover:border-primary/30 hover:bg-base-content/5 transition-all cursor-pointer"
                            >
                                <div className="flex items-center gap-4">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-medium text-base-content/40 uppercase tracking-wider mb-0.5">{item.label}</p>
                                        {item.href ? (
                                            <a href={item.href} className="font-semibold truncate block hover:text-primary transition-colors">
                                                {item.value}
                                            </a>
                                        ) : (
                                            <p className="font-semibold truncate">{item.value}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <div className="pt-4">
                        <p className="text-xs font-medium text-base-content/40 uppercase tracking-wider mb-3">Connect</p>
                        <div className="flex gap-2">
                            {socials.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group w-12 h-12 rounded-xl border border-base-content/10 bg-base-content/[0.02] flex items-center justify-center hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Response Badge */}
                    <div className="pt-2">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary/10 border border-primary/20">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-primary text-sm font-medium">Responds within 24 hours</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form - Right Column */}
                <div className="lg:col-span-3">
                    <form ref={form} onSubmit={sendEmail} className="p-6 sm:p-8 rounded-2xl border border-base-content/10 bg-base-content/[0.02] space-y-5">
                        {/* Form Header */}
                        <div className="mb-4">
                            <h3 className="font-bold text-xl mb-1">Send a Message</h3>
                            <p className="text-sm text-base-content/50">I'll get back to you as soon as possible</p>
                        </div>

                        {/* Name & Email Row */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="text-sm font-medium text-base-content/60 mb-2 block">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    placeholder="Your name"
                                    className="w-full px-4 py-3 rounded-xl bg-base-100/80 border border-base-content/10 focus:border-primary focus:outline-none transition-colors placeholder:text-base-content/30"
                                />
                            </div>
                            <div>
                                <label className="text-sm font-medium text-base-content/60 mb-2 block">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 rounded-xl bg-base-100/80 border border-base-content/10 focus:border-primary focus:outline-none transition-colors placeholder:text-base-content/30"
                                />
                            </div>
                        </div>

                        {/* Subject Field */}
                        <div>
                            <label className="text-sm font-medium text-base-content/60 mb-2 block">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="What's this about?"
                                className="w-full px-4 py-3 rounded-xl bg-base-100/80 border border-base-content/10 focus:border-primary focus:outline-none transition-colors placeholder:text-base-content/30"
                            />
                        </div>

                        {/* Message Field */}
                        <div>
                            <label className="text-sm font-medium text-base-content/60 mb-2 block">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="5"
                                placeholder="Tell me about your project..."
                                className="w-full px-4 py-3 rounded-xl bg-base-100/80 border border-base-content/10 focus:border-primary focus:outline-none transition-colors resize-none placeholder:text-base-content/30"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSending}
                            className="group w-full py-4 rounded-xl bg-primary text-primary-content font-bold text-lg transition-all hover:shadow-lg hover:shadow-primary/25 disabled:opacity-50"
                        >
                            <span className="flex items-center justify-center gap-2">
                                {isSending ? (
                                    <>
                                        <span className="w-5 h-5 border-2 border-primary-content/30 border-t-primary-content rounded-full animate-spin"></span>
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </>
                                )}
                            </span>
                        </button>

                        {/* Privacy Note */}
                        <p className="text-center text-xs text-base-content/40">
                            Your information is safe and will never be shared.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;