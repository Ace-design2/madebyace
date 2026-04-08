import { FiArrowUpRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

// Helper components for scroll animations
const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } ${className}`}
    >
      {children}
    </div>
  );
};

const devProjects = [
  {
    title: "Restaurant Website",
    description: "Modern responsive restaurant website built with React and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind"],
    gradient: "from-red-50 to-white dark:from-[#1a0505] dark:to-black",
  },
  {
    title: "Live Football Scores App",
    description: "Real-time sports tracking dashboard focusing on performance and responsive design.",
    tags: ["Next.js", "API", "WebSockets"],
    gradient: "from-gray-50 to-white dark:from-black dark:to-[#220000]",
  },
  {
    title: "Portfolio Website",
    description: "Minimalist personal portfolio built with modern tools and smooth animations.",
    tags: ["React", "Framer Motion", "CSS"],
    gradient: "from-stone-50 to-white dark:from-[#0a0a0a] dark:to-[#1a0505]",
  },
  {
    title: "E-commerce Store",
    description: "Full-stack online shop featuring cart functionality and secure checkout.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    gradient: "from-neutral-50 to-white dark:from-[#110505] dark:to-[#0A0A0A]",
  },
  {
    title: "Chat Application",
    description: "Messaging platform designed with layout clarity and intuitive user flow.",
    tags: ["React", "Socket.io", "Node.js"],
    gradient: "from-red-50/50 to-white dark:from-[#1c0000] dark:to-black",
  },
  {
    title: "Admin Dashboard",
    description: "Complex data visualization interface highlighting key metrics beautifully.",
    tags: ["React", "Recharts", "UX"],
    gradient: "from-gray-50 to-white dark:from-[#050505] dark:to-[#120000]",
  },
];

const designProjects = [
  {
    title: "Banking Mobile App UI",
    description: "Designed using Figma with focus on usability, layout clarity, and modern UI patterns.",
    tags: ["Figma", "UI Design", "App Design"],
    gradient: "from-zinc-100 to-white dark:from-[#111] dark:to-[#1a0505]",
  },
  {
    title: "Real Estate Website Design",
    description: "Elegant and spacious web interface focused on high-quality real estate imagery.",
    tags: ["Figma", "Web Design", "Typography"],
    gradient: "from-gray-100 to-white dark:from-[#0A0A0A] dark:to-[#110000]",
  },
  {
    title: "Restaurant UI Design",
    description: "Aesthetic interfaces for a premium dining experience and seamless reservations.",
    tags: ["UI/UX", "Prototyping", "Figma"],
    gradient: "from-red-50 to-white dark:from-black dark:to-[#1a0505]",
  },
  {
    title: "Dashboard UI Design",
    description: "Clean enterprise dashboard emphasizing data scannability and fast workflows.",
    tags: ["Figma", "Layout", "B2B"],
    gradient: "from-stone-100 to-white dark:from-[#1a0000] dark:to-[#0a0a0a]",
  },
  {
    title: "Landing Page Design",
    description: "High-conversion marketing page with clear visual hierarchy and call-to-actions.",
    tags: ["Web Design", "Layout", "Marketing"],
    gradient: "from-neutral-100 to-white dark:from-[#050505] dark:to-[#140505]",
  },
  {
    title: "Mobile App Wireframe",
    description: "Structural blueprints defining fundamental UX journeys and interaction models.",
    tags: ["Wireframing", "UX", "Planning"],
    gradient: "from-gray-50 to-white dark:from-[#1c0a0a] dark:to-[#050505]",
  },
];

const ProjectCard = ({ project }: { project: any }) => (
  <div className="group relative rounded-[2.5rem] bg-gray-50 dark:bg-[#0A0A0A] shadow-md dark:shadow-2xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,26,26,0.15)] hover:-translate-y-2 p-4 sm:p-5 flex flex-col h-full cursor-pointer border border-black/5 dark:border-transparent">
    
    {/* Base inactive border */}
    <div className="absolute inset-0 border border-black/5 dark:border-white/5 rounded-[2.5rem] transition-colors duration-500 pointer-events-none group-hover:border-transparent z-0"></div>
    
    {/* SVG Progress Border */}
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        rx="40"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        pathLength="100"
        strokeDasharray="100"
        className="text-red-500 [stroke-dashoffset:100] group-hover:[stroke-dashoffset:0] transition-all duration-700 ease-out"
      />
    </svg>

    <div className={`w-full aspect-video sm:aspect-square overflow-hidden rounded-[2rem] relative mb-6 bg-gradient-to-br ${project.gradient} z-10`}>
      {/* Cinematic Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay z-0" />
      
      {/* Hover Reveal Overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out flex items-center justify-center bg-black/50 backdrop-blur-[2px] z-10">
         <div className="px-6 py-2 rounded-full border border-red-500/50 bg-red-600/20 text-white font-bold tracking-[0.2em] uppercase text-xs sm:text-sm translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center gap-2 shadow-[0_0_20px_rgba(255,26,26,0.3)]">
            <span>View Case</span>
            <FiArrowUpRight className="w-4 h-4" />
         </div>
      </div>

      <div className="w-full h-full bg-cover bg-center group-hover:scale-105 group-hover:rotate-1 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] z-0" />
      
      {/* Decorative inner border */}
      <div className="absolute inset-0 border border-black/5 dark:border-white/5 rounded-[2rem] pointer-events-none transition-colors duration-500 z-20" />
    </div>

    <div className="flex flex-col flex-1 px-2 pb-2 z-10 relative">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="text-xl sm:text-2xl font-bold text-black dark:text-white leading-snug group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors duration-300">
          {project.title}
        </h3>
        {/* Animated Arrow Icon */}
        <div className="rounded-full shrink-0 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 group-hover:bg-red-600 group-hover:border-red-500 group-hover:shadow-[0_0_15px_rgba(255,26,26,0.5)] transition-all duration-500 ease-out -mt-1 sm:-top-1">
          <FiArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500 dark:text-gray-400 group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
        </div>
      </div>
      
      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-medium mb-8 flex-1 transition-colors duration-500">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 sm:gap-3 mt-auto">
        {project.tags.map((tag: string) => (
          <span
            key={tag}
            className="text-[10px] sm:text-xs font-bold uppercase tracking-widest px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-600 dark:text-gray-400 group-hover:border-red-500/30 group-hover:text-black dark:group-hover:text-gray-200 transition-all duration-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-white dark:bg-black text-black dark:text-white pt-10 md:pt-16 pb-20 md:pb-32 overflow-hidden selection:bg-red-500/30 transition-colors duration-500">
      
      {/* Background Cinematic Decor Element */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-red-600/10 blur-[150px] mix-blend-screen opacity-60" />
        <div className="absolute bottom-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-red-900/10 blur-[150px] mix-blend-screen opacity-40" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 dark:opacity-5 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 pt-0 lg:px-12 space-y-16 md:space-y-32">
        
        {/* Section Header */}
        <FadeIn>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-marags font-extrabold tracking-tight text-black dark:text-white transition-colors duration-500">
              Selected <span className="text-red-600 dark:text-red-500">Works</span>
            </h2>
            <div className="w-24 h-[3px] bg-red-600 rounded-full" />
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mt-6 transition-colors duration-500">
              A curated execution of high-performance digital products, merging premium aesthetics with robust engineering.
            </p>
          </div>
        </FadeIn>

        {/* Development Projects */}
        <div className="space-y-12">
          <FadeIn>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-marags font-black tracking-widest text-black/80 dark:text-white/90 uppercase transition-colors duration-500">
                Development
              </h3>
              <div className="h-[1px] w-full bg-gradient-to-r from-red-600/50 to-transparent rounded-full" />
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {devProjects.map((project, idx) => (
              <FadeIn key={idx} delay={idx * 150}>
                <ProjectCard project={project} />
              </FadeIn>
            ))}
          </div>
        </div>



      </div>
    </section>
  );
}
