import { FiArrowUpRight } from "react-icons/fi";

const devProjects = [
  {
    title: "Restaurant Website",
    description: "Modern responsive restaurant website built with React and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind"],
    gradient: "from-[#f0f4fd] to-[#d6e0f9]",
  },
  {
    title: "Live Football Scores App",
    description: "Real-time sports tracking dashboard focusing on performance and responsive design.",
    tags: ["Next.js", "API", "WebSockets"],
    gradient: "from-[#eef2fc] to-[#e0e7ff]",
  },
  {
    title: "Portfolio Website",
    description: "Minimalist personal portfolio built with modern tools and smooth animations.",
    tags: ["React", "Framer Motion", "CSS"],
    gradient: "from-[#f4f7ff] to-[#dbe4fa]",
  },
  {
    title: "E-commerce Store",
    description: "Full-stack online shop featuring cart functionality and secure checkout.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    gradient: "from-[#e6ecfa] to-[#cfdcf6]",
  },
  {
    title: "Chat Application",
    description: "Messaging platform designed with layout clarity and intuitive user flow.",
    tags: ["React", "Socket.io", "Node.js"],
    gradient: "from-[#ebf0fc] to-[#dae5f9]",
  },
  {
    title: "Admin Dashboard",
    description: "Complex data visualization interface highlighting key metrics beautifully.",
    tags: ["React", "Recharts", "UX"],
    gradient: "from-[#f2f6ff] to-[#e4ebfc]",
  },
];

const designProjects = [
  {
    title: "Banking Mobile App UI",
    description: "Designed using Figma with focus on usability, layout clarity, and modern UI patterns.",
    tags: ["Figma", "UI Design", "App Design"],
    gradient: "from-[#fdfaf6] to-[#f4ebe1]",
  },
  {
    title: "Real Estate Website Design",
    description: "Elegant and spacious web interface focused on high-quality real estate imagery.",
    tags: ["Figma", "Web Design", "Typography"],
    gradient: "from-[#fafaf9] to-[#ecece9]",
  },
  {
    title: "Restaurant UI Design",
    description: "Aesthetic interfaces for a premium dining experience and seamless reservations.",
    tags: ["UI/UX", "Prototyping", "Figma"],
    gradient: "from-[#fefafb] to-[#fae6ec]",
  },
  {
    title: "Dashboard UI Design",
    description: "Clean enterprise dashboard emphasizing data scannability and fast workflows.",
    tags: ["Figma", "Layout", "B2B"],
    gradient: "from-[#f6f9fc] to-[#e1ecf6]",
  },
  {
    title: "Landing Page Design",
    description: "High-conversion marketing page with clear visual hierarchy and call-to-actions.",
    tags: ["Web Design", "Layout", "Marketing"],
    gradient: "from-[#fdfcf5] to-[#f6f0dd]",
  },
  {
    title: "Mobile App Wireframe",
    description: "Structural blueprints defining fundamental UX journeys and interaction models.",
    tags: ["Wireframing", "UX", "Planning"],
    gradient: "from-[#f6f7f8] to-[#e8ebee]",
  },
];

const ProjectCard = ({ project }: { project: any }) => (
  <div className="group rounded-[2rem] overflow-hidden bg-white/60 backdrop-blur-lg border border-[#081856]/10 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 p-3 sm:p-4 flex flex-col h-full cursor-pointer hover:border-[#081856]/20">
    <div className={`w-full aspect-square overflow-hidden rounded-[1.5rem] relative mb-5 bg-gradient-to-br ${project.gradient}`}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center bg-[#081856]/5">
         <span className="text-[#081856]/40 font-medium tracking-widest uppercase text-sm">Preview</span>
      </div>
      <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500 ease-out" />
    </div>
    <div className="flex items-start justify-between gap-4 flex-1 px-2 pb-2">
      <div className="flex flex-col h-full">
        <h3 className="text-lg font-bold text-[#081856] mb-2 leading-snug">
          {project.title}
        </h3>
        <p className="text-sm text-[#081856]/70 leading-relaxed font-medium mb-5 flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.map((tag: string) => (
            <span
              key={tag}
              className="text-[11px] font-semibold px-3 py-1.5 rounded-full bg-[#081856]/[0.06] text-[#081856]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-full p-2.5 bg-[#081856]/5 group-hover:bg-[#081856] transition-colors duration-300 shrink-0">
        <FiArrowUpRight className="w-5 h-5 text-[#081856] group-hover:text-white transition-colors duration-300" strokeWidth={2.5} />
      </div>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-white py-24 sm:py-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[40%] h-[40%] rounded-full bg-gradient-to-r from-[#081856]/[0.02] to-transparent blur-[120px]" />
        <div className="absolute bottom-[20%] right-[0%] w-[50%] h-[40%] rounded-full bg-gradient-to-l from-[#081856]/[0.03] to-transparent blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 space-y-20 lg:space-y-28">
        
        {/* Section Header */}
        <div className="text-center space-y-5">
          <h2 className="text-4xl md:text-5xl font-bold text-[#081856] tracking-tight">
            Projects
          </h2>
          <p className="text-base sm:text-lg text-[#081856]/70 max-w-2xl mx-auto font-medium leading-relaxed">
            A selection of my development and design work focused on performance, usability, and modern user experiences.
          </p>
        </div>

        {/* Development Projects */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#081856]">
              Development Projects
            </h3>
            <div className="h-[2px] w-full bg-[#081856]/10 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>

        {/* Design Projects */}
        <div className="space-y-10">
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-semibold text-[#081856]">
              Design Projects
            </h3>
            <div className="h-[2px] w-full bg-[#081856]/10 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designProjects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
