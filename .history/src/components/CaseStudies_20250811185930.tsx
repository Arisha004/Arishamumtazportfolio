import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Users, TrendingUp, Award } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "E-Commerce Redesign",
      category: "UX/UI Design",
      duration: "3 months",
      challenge: "Increase conversion rates and reduce cart abandonment",
      solution: "Implemented  product recommendations and streamlined checkout process",
      results: [
        { metric: "Conversion Rate", improvement: "+156%" },
        { metric: "Cart Abandonment", improvement: "-34%" },
        { metric: "User Engagement", improvement: "+89%" },
        { metric: "Revenue", improvement: "+$2.3M" }
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop&crop=edges",
      tools: ["Figma", "Adobe XD", "Canva", "Google Analytics"],
      testimonial: "Arisha's design thinking transformed our business. The AI-powered recommendations she designed increased our revenue by 200%.",
    },
    {
      title: "MOODFIT MENTAL HEALTH App",
      context: "Devpost Hackathon",
      category: "Mobile UX Design",
      duration: "4 months",
      challenge: "Create an accessible healthcare app for users",
      solution: "Designed large touch targets, songs suggestions based on mood, and simplified  health tracking",
      results: [
        { metric: "User Adoption", improvement: "+245%" },
        { metric: "Task Completion", improvement: "+78%" },
        { metric: "User Satisfaction", improvement: "4.8/5" },
        { metric: "Support Calls", improvement: "-67%" }
      ],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=500&fit=crop&crop=edges",
      tools: ["Figma", "Dribble", "Canva", "Lottie"],
      testimonial: "The accessibility features Arisha designed made our app usable for seniors who never used smartphones before.",
    },
    {
      title: "AI-Powered Healthcare",
      category: "Web Design",
      duration: "2 months",
      challenge: "Simplify complex healthcare data visualization",
      solution: "Created AI-powered insights dashboard with real-time data visualization and predictive analytics",
      results: [
        { metric: "User Comprehension", improvement: "+134%" },
        { metric: "Decision Speed", improvement: "+67%" },
        { metric: "Platform Usage", improvement: "+123%" },
        { metric: "Client Retention", improvement: "+45%" }
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop&crop=edges",
      tools: ["Figma", "Framer", "D3.js", "Chart.js", "Tableau"],
      testimonial: "Arisha turned our complex financial platform into something our users actually enjoy using daily.",
      clientRole: "CTO, CryptoVault"
    }
  ];

  return (
    <section id="case-studies" className="py-24 px-6 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Case Studies
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
                      <p className="text-lg text-primary font-semibold">{study.client}</p>
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

                    {/* Results Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {study.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="bg-gradient-to-br from-primary/5 to-accent/5 p-4 rounded-lg border border-primary/10">
                          <div className="text-lg font-bold text-primary mb-1">{result.improvement}</div>
                          <div className="text-xs text-muted-foreground">{result.metric}</div>
                        </div>
                      ))}
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
                      <p className="text-sm font-semibold text-primary">— {study.clientRole}</p>
                    </div>

                    <Button className="btn-ai w-fit group">
                      <Eye className="w-4 h-4 mr-2" />
                      View Full Case Study
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
              <Button size="lg" className="btn-ai">
                <TrendingUp className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:border-primary">
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