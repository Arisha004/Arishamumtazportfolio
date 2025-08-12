import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Palette, Zap, Users, Trophy } from "lucide-react";
import aiWorkspace from "@/assets/ai-workspace.webp";

const About = () => {
  const stats = [
    { icon: Trophy, value: "10+", label: "AI-Powered Projects" },
    { icon: Users, value: "10+", label: "Happy Clients" },
    { icon: Zap, value: "3 Years", label: "Experience" },
    { icon: Brain, value: "10+", label: "AI Tools Mastered" }
  ];

  const skills = [
    "React & TypeScript", "Next.js", "Node.js", "Firebase", "Supabase",
    "Replit AI", "Cursor IDE", "Lovable", "MGX", "Claude AI", "ChatGPT",
    "Figma", "Adobe Creative Suite", "Tailwind CSS", "Three.js"
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Inspired by <span className="text-gradient">Top Talent</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Following in the footsteps of design leaders at Google and Microsoft, 
            I leverage cutting-edge AI tools to create revolutionary digital experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Why AI is the Future</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Artificial Intelligence isn't replacing creativity—it's amplifying it. 
                Just like the pioneers hired by Google and Microsoft, I believe in using 
                AI to solve complex problems faster and more efficiently than ever before.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every project I build leverages AI tools like <span className="text-primary font-semibold">Replit Agent</span>, 
                <span className="text-accent font-semibold"> Cursor's AI pair programming</span>, and 
                <span className="text-primary-glow font-semibold"> Lovable's intelligent generation </span> 
                to deliver results that would have taken months in just days.
              </p>
            </div>

{/* NEW: My Journey Section */}
  <div>
    <h3 className="text-2xl font-bold mb-4 text-primary">My Journey</h3>
    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
      From freelance graphic design to building AI-powered web experiences, my journey has been fueled 
      by curiosity and hands-on learning. I've collaborated with startups, participated in hackathons, 
      and worked on diverse projects—ranging from frontend development to full-scale UI/UX design.
    </p>
    <ul className="space-y-3 text-muted-foreground">
      <li> <strong>UI/UX Designer</strong> — Ally Solutions (2025, Remote)</li>
      <li> <strong>Hackathon Contributor</strong> — lablab.ai & Devpost (2024–2025)</li>
      <li> <strong>Frontend Developer Intern</strong> — DevelopersHub, KK Solutions, Devsinz</li>
      <li> <strong>Freelance Designer</strong> — Logos, catalogs, and t-shirt branding for international clients</li>
      <li> <strong>UI/UX Intern</strong> — Summer of Bitcoin</li>
      <li> <strong>UI/UX Designer</strong> — Progmize</li>
   
    </ul>
  </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-primary/20 pulse-glow">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src={aiWorkspace} 
                alt="AI-powered development environment with multiple screens and holographic interfaces"
                className="w-full rounded-2xl shadow-2xl ai-glow"
                loading="lazy"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* Inspiring AI Quote Section */}
        <div className="text-center mb-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -top-4 -left-4 w-8 h-8 text-primary/30 text-6xl font-serif">"</div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 text-primary/30 text-6xl font-serif rotate-180">"</div>
            <blockquote className="slide-up-delayed text-2xl md:text-3xl font-light leading-relaxed text-foreground/90 italic px-8">
              Leveraging AI in this world doesn't replace you—it makes work 
              <span className="text-gradient font-semibold"> easier and faster</span>. 
              I know most portfolios don't showcase this, but I want to show you what's 
              <span className="text-accent font-semibold"> really possible</span>. 
              While AI builds, <span className="text-primary font-bold">fixing errors and resolving complex issues</span> 
              remains our domain—this is what separates true developers in this tech world.
            </blockquote>
            <div className="mt-8 slide-up-delayed" style={{animationDelay: '0.3s'}}>
              <cite className="text-lg text-primary font-semibold">— Arisha Mumtaz</cite>
              <p className="text-sm text-muted-foreground mt-2">AI-Powered Developer & Problem Solver</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8 text-primary">AI-Powered Technology Stack</h3>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll space-x-6 pb-4">
              {[...skills, ...skills].map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="text-sm py-2 px-4 bg-gradient-to-r from-secondary to-secondary/70 hover:from-primary/20 hover:to-accent/20 transition-all duration-300 cursor-pointer whitespace-nowrap flex-shrink-0"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;