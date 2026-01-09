import React, { useState, useEffect } from 'react';
import Hero from '../Components/Hero';
import About from '../Components/About';
import Projects from '../Components/Projects';
import Contact from '../Components/Contact';
import PageSkeleton from '../Components/PageSkeleton';

const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (loading) return <PageSkeleton />;

    return (
        <main className="relative w-full overflow-hidden">
            <Hero />
            <About />
            <Projects />
            <Contact />
        </main>
    );
};

export default Home;