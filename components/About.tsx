import { Monitor, Code, Layout, Zap } from "lucide-react";

const highlights = [
  {
    icon: <Monitor className="w-6 h-6 text-[#081856]" strokeWidth={1.5} />,
    title: "Modern Design",
    description: "Creating visually appealing and contemporary interfaces.",
  },
  {
    icon: <Code className="w-6 h-6 text-[#081856]" strokeWidth={1.5} />,
    title: "Responsive Dev",
    description: "Building layouts that adapt flawlessly to any screen size.",
  },
  {
    icon: <Layout className="w-6 h-6 text-[#081856]" strokeWidth={1.5} />,
    title: "UI/UX Focused",
    description: "Prioritizing intuitive user experiences and clear navigation.",
  },
  {
    icon: <Zap className="w-6 h-6 text-[#081856]" strokeWidth={1.5} />,
    title: "Performant",
    description: "Ensuring fast load times and smooth interactions.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-24 sm:py-32 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-b from-[#081856]/[0.03] to-transparent blur-[120px]" />
        <div className="absolute top-[40%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-[#081856]/[0.04] to-transparent blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_1fr] gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Main Glass Card */}
          <div className="group relative rounded-[2rem] bg-white/60 backdrop-blur-lg border border-[#081856]/15 shadow-xl p-8 sm:p-10 lg:p-12 transition-all duration-500 hover:shadow-2xl hover:border-[#081856]/25">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#081856] mb-6 sm:mb-8 tracking-tight">
              About Me
            </h2>
            <div className="space-y-6 text-[#081856]/80 text-lg leading-relaxed max-w-[600px] font-medium">
              <p>
                I am a web designer and developer focused on creating modern, responsive, and user-friendly digital experiences. I enjoy transforming ideas into clean, functional websites that deliver results.
              </p>
              <p>
                My approach combines strong visual design, performance optimization, and attention to detail to ensure every project looks professional and works seamlessly across devices.
              </p>
            </div>
          </div>

          {/* Right Column - Highlight Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {highlights.map((item, index) => (
              <div 
                key={index}
                className="group p-6 sm:p-8 rounded-2xl bg-white/50 backdrop-blur-md border border-[#081856]/10 shadow-md transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-[#081856]/20 hover:bg-white/70"
              >
                <div className="mb-5 bg-[#081856]/5 w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-[#081856]/10 transition-all duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#081856] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#081856]/70 leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
