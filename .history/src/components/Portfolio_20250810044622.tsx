import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Sparkles, ArrowRight } from "lucide-react";
import ProjectModal from "./ProjectModal";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProjectModal = (project: any) => {
    const enhancedProject = {
      ...project,
      detailedDescription: `${project.description} This project showcases advanced AI integration with modern development practices, featuring real-time data processing, intelligent user interactions, and scalable architecture designed for enterprise-level performance.`,
      features: [
        "AI-powered intelligent recommendations",
        "Real-time data synchronization",
        "Advanced analytics dashboard", 
        "Mobile-responsive design",
        "Enterprise-grade security",
        "Cloud-native architecture"
      ],
      metrics: [
        { label: "Performance Score", value: "98/100" },
        { label: "User Satisfaction", value: "4.9/5" },
        { label: "Load Time", value: "<2s" },
        { label: "Uptime", value: "99.9%" }
      ],
      timeline: "3 months",
      team: "Solo Developer"
    };
    setSelectedProject(enhancedProject);
    setIsModalOpen(true);
  };
  const projects = [
    {
      title: "Business Nexus",
      description: "Built with Lovable AI , Business Nexus is a modern networking platform connecting entrepreneurs and investors to drive business growth, funding opportunities, and professional networking through a sleek, responsive web application.",
      tags: ["React", "Vite", "Lovable AI", "TypeScript","TailwindCSS","ShadCN/UI (Radix)"],
      image: "https://i.postimg.cc/pXDJYQN8/Business-Nexus-Portfolio-Optimized.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/Arisha004/Bussiness-Nexus",
      featured: true
    },
    {
      title: "COOKING BOT",
      description: "COOKING-BOT — a modern recipe assistant built with Vite, TypeScript, React, shadcn-ui, and Tailwind CSS.",
      tags: ["Vite", "TypeScript", "React", "MGX","shadcn-ui","Tailwind CSS"],
      image: "https://i.postimg.cc/Hs8RTQjR/Chat-GPT-Image-Aug-10-2025-04-06-21-AM.png",
      liveUrl: "#",
      githubUrl: "https://github.com/Arisha004/COOKING-BOT",
      featured: true
    },
    {
      title: "AI Gesture Control",
      description: "Created with MGX, automatically detects gesture detections e.g:thumbs_up,peace and open palm sign.",
      tags: ["TypeScript", "Tensorflow.js", "MGX", "React", "Tailwind CSS"],
      image: "https://i.postimg.cc/DZPSRJ3M/Chat-GPT-Image-Aug-10-2025-04-26-32-AM.png",
      liveUrl: "#",
      githubUrl: "https://github.com/Arisha004/AI-GESTURE-CONTROL",
      featured: false
    },
    {
      title: "PRISMA",
      description: "Prisma is a project designed to provide a platform for readers and authors using the Java framework Spring Boot, connected to a MySQL database.",
      tags: ["MySQL", "Spring Boot", "Thymeleaf", "Ht"],
      image: "https://i.postimg.cc/KzM6YB80/prisma.jpg",
      liveUrl: "#",
      githubUrl: "https://github.com/Arisha004/PRISMA",
      featured: false
    },
    {
      title: "Voice-Controlled Web App",
      description: "Revolutionary interface using Web Speech API and AI natural language processing.",
      tags: ["Web Speech API", "Node.js", "AI/ML", "WebRTC"],
      image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?w=600&h=400&fit=crop&crop=edges",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "AR/VR Experience Platform",
      description: "Immersive experiences built with Three.js and AI-powered 3D model generation.",
      tags: ["Three.js", "WebXR", "AI 3D", "React Three Fiber"],
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=600&h=400&fit=crop&crop=edges",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Portfolio
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">AI-Powered</span> Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions built with cutting-edge AI tools and modern technologies.
            Each project demonstrates the power of human creativity amplified by artificial intelligence.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card key={index} className="group overflow-hidden bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-500 hover:scale-[1.02] ai-glow">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - AI-powered application screenshot`}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      <Sparkles className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      className="flex-1 btn-ai"
                      onClick={() => openProjectModal(project)}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                    <Button variant="outline" className="border-primary/30 hover:border-primary">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <Card key={index} className="group overflow-hidden bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.title} - Project thumbnail`}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.slice(0, 2).map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.tags.length - 2}
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1 text-xs"
                      onClick={() => openProjectModal(project)}
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Details
                    </Button>
                    <Button size="sm" variant="outline" className="border-primary/30">
                      <Github className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary hover:bg-primary/10">
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>

        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </section>
  );
};

export default Portfolio;
