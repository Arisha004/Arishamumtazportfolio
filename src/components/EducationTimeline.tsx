import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award, Calendar, MapPin, Star } from "lucide-react";

const EducationTimeline = () => {
  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "Shaheed Zulfikar Ali Bhutto Institute of Science and Technology (SZABIST)",
      location: "Karachi, Pakistan",
      period: "2023 - 2027",
      gpa: "3.88/4.0",
      honors: ["Participated in Zabefest (Debugging & Speed Coding) annually",
      "Strong academic performance with consistent top grades",
      "Engaged in industry-driven workshops and guest lectures"],
      description: "Pursuing a well-structured Computer Science program at SZABIST, combining theoretical knowledge with hands-on practice. Equipped with modern labs, industry exposure, and opportunities for innovation, focusing on cutting-edge technologies in software engineering, UI/UX, and AI-driven development.",
      projects: ["Debugging & Speed Coding Challenge Solutions",
      "Full-stack web applications as part of coursework",
      "Collaborative team projects integrating UI/UX and backend development"],
      type: "undergraduate",
      skills: ["C Programming",
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "COAL",
      "UI/UX Design",
      "Communication",
      "Public Speaking",
      "Storytelling"]
    },
    {
      degree: "Diploma in Information Systems Management",
      institution: "Aptech Pakistan",
      location: "Karachi, Pakistan", 
      period: "2023-2024",
      gpa: "Distinction",
      honors: [ "Student of the Month Award",
      "Project of the Month Award",
      "Full Attendance & Punctuality Certificate"],
      description: "Completed CPISM and DISM with distinction, gaining expertise in front-end and back-end development, UI/UX design, and project execution. Developed strong technical, communication, and problem-solving skills, preparing for industry-level challenges.",
      projects: ["Full-stack CRUD applications",
      "UI/UX design projects using modern frameworks",
      "Database-driven web platforms"],
      type: "certification",
      skills: [ "Front-End Development",
      "Back-End Development",
      "UI/UX Design",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "PhpMyAdmin",
      "Microsoft Office Suite"]
    },
    {
      degree: "Pre-Medical (Science Group)",
      institution:  "Sir Syed College",
      location: "Karachi, Pakistan",
      period:  "2020 - 2022",
      gpa: "A-One Grade",
      honors: ["Top academic performer",
      "Active participation in extracurricular activities"],
      description: "Completed pre-medical studies with a strong academic record before transitioning into Computer Science, bringing analytical thinking and precision into technology projects.",
      projects: ["Biology research presentations",
      "Science exhibitions"],
      type: "highschool",
      skills: [ "Storytelling",
      "Story Writing",
      "Research Presentation"]
    }
  ];

  const certifications = [
    {
      name: "CPISM (Certificate in Proficiency in Information Systems Management)",
      issuer: "Aptech Pakistan",
      year: "2023",
      icon: "💻",
      skills: ["User Research", "Prototyping", "Front-End Development", "UI/UX Design"]
    },
    {
      name: "DISM (Diploma in Information Systems Management)",
      issuer:  "Aptech Pakistan",
      year: "2024", 
      icon: "🖥️",
      skills: ["Back-End Development", "Web Application Development", "Project Management","Database Management"]
    },
    {
      name: "Student of the Month Award",
      issuer: "Aptech Pakistan",
      year: "2023",
      icon: "🏅",
      skills: ["Academic Excellence", "Punctuality", "Professional Discipline"]
    },
    {
      name: "Project of the Month Award",
      issuer: "Aptech Pakistan",
      year: "2023",
      icon: "🚀",
      skills: ["Innovative Project Design", "Full-Stack Development", "Collaboration"]
    }
  ];

  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            Education & Certifications
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Academic <span className="text-gradient">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A solid foundation in computer science, design, and artificial intelligence 
            from world-renowned institutions.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary-glow"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 ai-glow"></div>

                {/* Content Card */}
                <Card className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:ml-0' : 'md:ml-auto md:mr-0'
                } bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 slide-up`}
                style={{animationDelay: `${index * 200}ms`}}>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <GraduationCap className="w-5 h-5 text-primary" />
                            <Badge variant="secondary" className="text-xs">
                              {edu.type.charAt(0).toUpperCase() + edu.type.slice(1)}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                          <p className="text-lg font-semibold text-foreground">{edu.institution}</p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-sm text-muted-foreground mb-1">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4 mr-1" />
                            {edu.location}
                          </div>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed">{edu.description}</p>

                      {/* GPA and Honors */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="bg-gradient-to-r from-primary/5 to-accent/5 p-3 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold">GPA: {edu.gpa}</span>
                          </div>
                        </div>
                        <div className="bg-gradient-to-r from-accent/5 to-primary/5 p-3 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <Award className="w-4 h-4 text-accent" />
                            <span className="text-sm font-semibold">
                              {edu.honors.length} Honors
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Honors List */}
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Honors & Awards</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.honors.map((honor, honorIndex) => (
                            <Badge key={honorIndex} variant="outline" className="text-xs border-primary/20">
                              {honor}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Projects */}
                      <div>
                        <h4 className="font-semibold text-primary mb-2">Key Projects</h4>
                        <ul className="space-y-1">
                          {edu.projects.map((project, projectIndex) => (
                            <li key={projectIndex} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{project}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-8 text-primary">Professional Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-card/50 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-105 pulse-glow">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl mb-3">{cert.icon}</div>
                  <h4 className="font-semibold text-foreground mb-2">{cert.name}</h4>
                  <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 rounded-2xl border border-primary/20 text-center">
          <h3 className="text-xl font-bold mb-4 text-primary">Continuous Learning Philosophy</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            "In the rapidly evolving world of AI and design, continuous learning isn't just important—it's essential. 
            I dedicate 20% of my time to exploring new technologies, attending workshops, and contributing to the 
            design community to stay at the forefront of innovation."
          </p>
        </div>
      </div>
    </section>
  );
};

export default EducationTimeline;