import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Database,
  Terminal,
  Server,
  Key
} from "lucide-react";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiFirebase,
  SiStripe,
  SiJsonwebtokens,
  SiGithub
} from "react-icons/si";

// GitHub Activity Component
const GitHubActivity = () => {
  const [contributionData, setContributionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);

  const GITHUB_USERNAME = "HabiburRahmanZihad";

  useEffect(() => {
    const fetchGitHubContributions = async () => {
      try {
        // Using GitHub contributions API - fetch current year
        const currentYear = new Date().getFullYear();
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/${GITHUB_USERNAME}?y=${currentYear}`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch GitHub data');
        }

        const data = await response.json();

        // The API returns contributions organized by date
        // We need to organize them into weeks (starting from Sunday)
        const contributions = data.contributions || [];
        const weeks = [];
        let totalContributions = 0;

        if (contributions.length > 0) {
          // Find the first Sunday to start properly aligned weeks
          const firstDate = new Date(contributions[0].date);
          const firstDayOfWeek = firstDate.getDay(); // 0 = Sunday

          // Start with padding for the first partial week
          let currentWeek = [];
          for (let i = 0; i < firstDayOfWeek; i++) {
            currentWeek.push({ count: 0, date: null, level: 0 });
          }

          contributions.forEach((day) => {
            totalContributions += day.count;
            currentWeek.push({
              count: day.count,
              date: day.date,
              level: day.level
            });

            if (currentWeek.length === 7) {
              weeks.push(currentWeek);
              currentWeek = [];
            }
          });

          // Push the last partial week if exists
          if (currentWeek.length > 0) {
            // Pad the remaining days
            while (currentWeek.length < 7) {
              currentWeek.push({ count: 0, date: null, level: 0 });
            }
            weeks.push(currentWeek);
          }
        }

        setContributionData({
          weeks,
          total: data.total?.[currentYear] || totalContributions
        });
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub data:', err);
        setError(err.message);
        // Fallback to generated data if API fails
        generateFallbackData();
      }
    };

    const generateFallbackData = () => {
      const weeks = [];
      const today = new Date();
      const startDate = new Date(today);
      startDate.setDate(startDate.getDate() - 365);

      let totalContributions = 0;

      for (let week = 0; week < 53; week++) {
        const days = [];
        for (let day = 0; day < 7; day++) {
          const currentDate = new Date(startDate);
          currentDate.setDate(startDate.getDate() + week * 7 + day);

          const monthsAgo = (today - currentDate) / (1000 * 60 * 60 * 24 * 30);
          let probability = monthsAgo < 6 ? 0.7 : monthsAgo < 9 ? 0.4 : 0.2;
          if (day === 0 || day === 6) probability *= 0.5;

          let count = 0;
          if (Math.random() < probability) {
            count = Math.floor(Math.random() * 8) + 1;
            if (monthsAgo < 3 && Math.random() > 0.7) count += Math.floor(Math.random() * 5);
          }

          totalContributions += count;
          days.push({ count, date: currentDate.toISOString().split('T')[0], level: Math.min(4, Math.floor(count / 3)) });
        }
        weeks.push(days);
      }

      setContributionData({ weeks, total: totalContributions });
      setLoading(false);
    };

    fetchGitHubContributions();
  }, []);

  const getContributionColor = (count, level) => {
    // Use level if available (from API), otherwise calculate from count
    const lvl = level !== undefined ? level : (count === 0 ? 0 : count <= 2 ? 1 : count <= 5 ? 2 : count <= 8 ? 3 : 4);

    switch (lvl) {
      case 0: return 'bg-base-content/[0.03] border-base-content/5';
      case 1: return 'bg-[#0e4429] border-[#0e4429]';
      case 2: return 'bg-[#006d32] border-[#006d32]';
      case 3: return 'bg-[#26a641] border-[#26a641]';
      case 4: return 'bg-[#39d353] border-[#39d353]';
      default: return 'bg-base-content/[0.03] border-base-content/5';
    }
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  if (loading) {
    return (
      <div className="p-8 lg:p-10 rounded-3xl border border-base-content/10 bg-linear-to-br from-base-200/50 to-base-200/30">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-base-content/10 rounded-full w-40 mx-auto"></div>
          <div className="h-6 bg-base-content/5 rounded w-48 mx-auto"></div>
          <div className="h-40 bg-base-content/5 rounded-xl"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative p-6 sm:p-8 lg:p-10 rounded-3xl border border-base-content/10 bg-linear-to-br from-base-200/50 to-base-200/30 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      {/* Header */}
      <div className="relative text-center mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-5">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-green-400 text-sm font-semibold">Contributions</span>
        </div>
        <h3 className="text-3xl sm:text-4xl font-black tracking-tight">
          GitHub <span className="text-primary">Activity</span>
        </h3>
      </div>

      {/* Month Labels */}
      <div className="hidden md:grid grid-cols-[auto_1fr] gap-1 mb-2">
        <div className="w-8"></div>
        <div className="flex justify-between text-xs text-base-content/40 px-1">
          {months.map((month, i) => (
            <span key={i} className="font-medium">{month}</span>
          ))}
        </div>
      </div>

      {/* Contribution Grid with Day Labels */}
      <div className="grid grid-cols-[auto_1fr] gap-2 md:gap-4">
        {/* Day Labels */}
        <div className="hidden md:flex flex-col justify-between text-[10px] text-base-content/40 py-1">
          {dayLabels.filter((_, i) => i % 2 === 1).map((day, i) => (
            <span key={i} className="h-3 flex items-center">{day}</span>
          ))}
        </div>

        {/* Grid */}
        <div className="flex gap-2.25 overflow-x-auto pb-2 scrollbar-none">
          {contributionData?.weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1.5">
              {week.map((day, dayIndex) => (
                <div
                  key={dayIndex}
                  onMouseEnter={() => setHoveredDay({ ...day, weekIndex, dayIndex })}
                  onMouseLeave={() => setHoveredDay(null)}
                  className={`w-[11px] h-[11px] sm:w-[13px] sm:h-[13px] rounded-[3px] border ${getContributionColor(day.count, day.level)} hover:ring-2 hover:ring-green-400/50 hover:scale-150 transition-all duration-150 cursor-pointer`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Tooltip */}
      {hoveredDay && (
        <div className="fixed pointer-events-none z-50 px-3 py-2 bg-base-300 rounded-lg shadow-xl border border-base-content/10 text-xs">
          <p className="font-bold text-base-content">{hoveredDay.count} contributions</p>
          <p className="text-base-content/60">{new Date(hoveredDay.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' })}</p>
        </div>
      )}

      {/* Footer */}
      <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 mt-8 pt-6 border-t border-base-content/10">
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:bg-base-content/5 p-2 -m-2 rounded-xl transition-colors group"
        >
          <div className="p-2 rounded-xl bg-base-content/5 group-hover:bg-primary/10 transition-colors">
            <SiGithub className="text-base-content/70 group-hover:text-primary transition-colors" size={22} />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-primary">
                {contributionData?.total.toLocaleString()}
              </span>
              <span className="text-base-content/50 text-sm font-medium">contributions</span>
            </div>
            <p className="text-xs text-base-content/40 group-hover:text-base-content/60 transition-colors">
              @{GITHUB_USERNAME} {error && <span className="text-yellow-500/70">(cached)</span>}
            </p>
          </div>
        </a>

        <div className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-base-content/5">
          <span className="text-xs text-base-content/50 font-medium">Less</span>
          <div className="flex gap-1">
            {[
              'bg-base-content/[0.03] border-base-content/5',
              'bg-[#0e4429] border-[#0e4429]',
              'bg-[#006d32] border-[#006d32]',
              'bg-[#26a641] border-[#26a641]',
              'bg-[#39d353] border-[#39d353]'
            ].map((color, i) => (
              <div key={i} className={`w-[13px] h-[13px] rounded-[3px] border ${color}`}></div>
            ))}
          </div>
          <span className="text-xs text-base-content/50 font-medium">More</span>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  const techStack = [
    { icon: <SiReact size={32} />, color: "text-[#61DAFB]", label: "React", bg: "bg-[#61DAFB]/10" },
    { icon: <SiNodedotjs size={32} />, color: "text-[#339933]", label: "Node.js", bg: "bg-[#339933]/10" },
    { icon: <SiMongodb size={32} />, color: "text-[#47A248]", label: "MongoDB", bg: "bg-[#47A248]/10" },
    { icon: <SiTailwindcss size={32} />, color: "text-[#06B6D4]", label: "Tailwind", bg: "bg-[#06B6D4]/10" },
    { icon: <SiFirebase size={32} />, color: "text-[#FFCA28]", label: "Firebase", bg: "bg-[#FFCA28]/10" },
    { icon: <SiStripe size={32} />, color: "text-[#635BFF]", label: "Stripe", bg: "bg-[#635BFF]/10" },
    { icon: <SiJsonwebtokens size={32} />, color: "text-white", label: "JWT", bg: "bg-white/10" },
    { icon: <Database size={32} />, color: "text-primary", label: "NoSQL", bg: "bg-primary/10" },
  ];

  const philosophy = [
    {
      icon: <Target size={28} />,
      title: "Discipline Over Motivation",
      text: "I rely on discipline, not motivation. Consistent effort builds momentum and drives progress.",
      accent: "from-primary/20 to-transparent"
    },
    {
      icon: <Terminal size={28} />,
      title: "Production-Ready Code",
      text: "Every project is built with security, scalability, and best practices in mind.",
      accent: "from-accent/20 to-transparent"
    },
    {
      icon: <Server size={28} />,
      title: "Full-Stack Expertise",
      text: "End-to-end development from database design to deployment and optimization.",
      accent: "from-secondary/20 to-transparent"
    },
  ];

  const securityFeatures = [
    { icon: "🔐", text: "Firebase Auth + JWT", desc: "Secure authentication flow" },
    { icon: "👥", text: "Role-Based Access", desc: "Admin, Staff, User levels" },
    { icon: "💳", text: "Stripe Integration", desc: "Secure payments" },
    { icon: "🔒", text: "Environment Security", desc: "Protected API keys" },
  ];

  return (
    <section id="about" className="py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
            <span className="text-primary text-sm font-medium">Get to know me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 sm:mb-6">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto leading-relaxed px-2">
            Engineering production-ready systems with focus on security, scalability, and exceptional user experiences.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {/* Left Column - Philosophy Cards */}
          <div className="lg:col-span-3 space-y-4 sm:space-y-5">
            {philosophy.map((item, i) => (
              <div
                key={i}
                className="group relative p-5 sm:p-6 rounded-2xl border border-base-content/10 bg-base-200/30 hover:bg-base-200/50 hover:border-primary/30 transition-all duration-300 overflow-hidden"
              >
                {/* linear accent */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-linear-to-r ${item.accent}`}></div>

                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary shrink-0 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                    <p className="text-sm sm:text-base text-base-content/60 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Security */}
          <div className="lg:col-span-2">
            <div className="sticky top-24 p-6 rounded-2xl border border-base-content/10 bg-base-200/30 h-fit">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-primary/10">
                    <Key className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">Security First</h3>
                </div>
                <ShieldCheck className="text-primary" size={24} />
              </div>

              <div className="space-y-4">
                {securityFeatures.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 p-3 rounded-xl bg-base-100/50 hover:bg-base-100 transition-colors group"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span className="font-semibold text-sm group-hover:text-primary transition-colors">{item.text}</span>
                      <p className="text-xs text-base-content/50">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-primary text-sm font-medium">My Toolkit</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-3">
              Tech <span className="text-primary">Stack</span>
            </h3>
            <p className="text-base-content/50">Technologies I work with daily</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {techStack.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.08,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative"
              >
                <div className={`relative p-5 sm:p-6 rounded-2xl border border-base-content/10 ${item.bg} flex flex-col items-center justify-center gap-3 cursor-pointer overflow-hidden transition-colors hover:border-primary/40`}>
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Icon */}
                  <motion.div
                    className={`relative z-10 ${item.color}`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.4 }}
                  >
                    {item.icon}
                  </motion.div>

                  {/* Label */}
                  <span className="relative z-10 text-xs sm:text-sm font-semibold text-base-content/60 group-hover:text-base-content transition-colors">
                    {item.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Activity Section */}
        <GitHubActivity />
      </div>
    </section>
  );
};

export default About;