import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Users, TrendingUp, Award } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    
    {
  title: "Bitcoin Dev Project Redesign — Summer of Bitcoin Proposal",
  category: "UI/UX Design",
  duration: "1 month",
  challenge: "Create a modern, user-friendly redesign for the Bitcoin Dev Project to improve accessibility, navigation, and developer onboarding experience",
  solution: "As part of my Summer of Bitcoin participation, I proposed a complete UI/UX overhaul of the Bitcoin Dev Project platform. My design focused on clear information architecture, improved readability, responsive layouts, and an engaging visual identity that aligns with the open-source Bitcoin ecosystem.",
  
  image: "https://i.postimg.cc/cJtKdgwP/Copy-of-Sunday-Service-Flyer-Made-with-Poster-My-Wall-1.png",
  tools: ["Figma", "Adobe XD", "Canva", "Lottie"],
  testimonial: "Although my proposal was not selected for the final cohort, it demonstrated my ability to deeply understand user needs, apply design thinking, and create a clean, functional UI",
  figmaLink:"https://www.figma.com/design/mRPUN1KbVQFSthEZxSGa51/Bitcoin-Dev-Project-Proposal-ARISHA-MUMTAZ?t=vJEQLJYvFhvKWwzH-0"
    },
,  {
      title: "MOODFIT MENTAL HEALTH App",
      context: "Devpost Hackathon",
      category: "Mobile UX Design",
      duration: "2 months",
      challenge: "Create an accessible healthcare app for users",
      solution: "Designed large touch targets, songs suggestions based on mood, and simplified  health tracking",
      
      image: "https://i.postimg.cc/26FS5469/i-Phone-16-Pro.png",
      tools: ["Figma", "Dribble", "Canva", "Lottie"],
      testimonial: "I built the MoodFit Health App during a Devpost hackathon. Although it didn’t win, the host appreciated the concept and mentioned that he really liked the app. This experience not only validated my approach but also demonstrated my ability to grow as a better UI/UX designer.",
      figmaLink:"https://www.figma.com/design/5vDSW61YyMaEFqncZidn3x/Mental-Health-App--by-arisha-mumtaz-?t=W5KoUwBawbdMhD4B-0"
    },
    {
    title: "AI-Powered Healthcare",
category: "Web Design",
duration: "2 months",
challenge: "Simplify complex healthcare website",
solution: "Created AI-powered insights dashboard with real-time data visualization and predictive analytics",
image: "https://i.postimg.cc/fL3QGMNW/Healthcare-Website-Login-Page.png",
tools: ["Figma", "Dribble", "Canva"],
 testimonial: "“I developed a healthcare app during a hackathon organized by LabLab AI. It was an exciting experience where I combined creativity and problem-solving to bring the idea to life.",
figmaLink:"https://www.figma.com/design/osHuFPQILl2vR2ZtCTBM52/Ai-in-healthcare?t=W5KoUwBawbdMhD4B-0"
    }
  ];

  return (
    <section id="case-studies" className="py-24 px-6 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Design Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Design Impact</span> Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world projects where AI-powered design thinking created measurable business impact 
            and transformed user experiences.
          </p>
        </div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-500 group">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image Section */}
                <div className={`relative overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <img 
                    src={study.image} 
                    alt={`${study.title} - UI/UX case study`}
                    className="w-full h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-primary/90 text-primary-foreground">
                      <Award className="w-3 h-3 mr-1" />
                      Featured Case Study
                    </Badge>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center space-x-4 mb-4">
                        <Badge variant="secondary" className="bg-accent/20 text-accent">
                          {study.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{study.duration}</span>
                      </div>
                      <h3 className="text-2xl lg:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {study.title}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                 

                    {/* Tools Used */}
                    <div>
                      <h4 className="font-semibold text-primary mb-3">Tools & Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.tools.map((tool, toolIndex) => (
                          <Badge key={toolIndex} variant="outline" className="text-xs border-primary/20">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-6 rounded-lg border-l-4 border-primary">
                      <p className="italic text-muted-foreground mb-3">"{study.testimonial}"</p>
                    </div>

                   
                   <Button className="btn-ai w-fit group">
  <Eye className="w-4 h-4 mr-2" />
  <a 
    href={study.figmaLink} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    View More
  </a>
  <span className="ml-2">on Figma</span>
  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
</Button>
  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-12 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4 text-primary">Ready to Create Your Success Story?</h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's collaborate to design solutions that drive real business results 
              and create exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Button
  size="lg"
  className="btn-ai"
  onClick={() =>
    window.open("https://www.linkedin.com/in/arisha-mumtaz/", "_blank", "noopener,noreferrer")
  }
>
  <TrendingUp className="w-5 h-5 mr-2" />
  Start Your Project
</Button>

<Button
  size="lg"
  variant="outline"
  className="border-primary/30 hover:border-primary"
  onClick={() => {
    const section = document.getElementById("schedule");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }}
>
  <Users className="w-5 h-5 mr-2" />
  Schedule Consultation
</Button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;