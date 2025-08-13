import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X, Calendar, Users, Clock, Award } from "lucide-react";

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    detailedDescription?: string;
    tags: string[];
    image: string;
    liveUrl: string;
    githubUrl: string;
    features?: string[];
    metrics?: { label: string; value: string }[];
    timeline?: string;
    team?: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-card to-card/50 border-primary/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient flex items-center justify-between">
            {project.title}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-6 w-6 p-0 hover:bg-primary/10"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative overflow-hidden rounded-xl">
            <img 
              src={project.image} 
              alt={`${project.title} - Detailed project view`}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
          </div>

          {/* Project Info Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-primary">Project Overview</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.detailedDescription || project.description}
                </p>
              </div>

              {project.features && (
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-primary">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies Used */}
              <div>
                <h3 className="text-lg font-semibold mb-3 text-primary">Technologies Used</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Project Metrics */}
            <div className="space-y-4">
              {project.metrics && (
                <div className="bg-gradient-to-br from-secondary/20 to-accent/10 p-4 rounded-lg border border-primary/10">
                  <h3 className="text-lg font-semibold mb-3 text-primary">Project Metrics</h3>
                  <div className="space-y-3">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">{metric.label}</span>
                        <span className="font-semibold text-primary">{metric.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Project Details */}
              <div className="space-y-3">
                {project.timeline && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Timeline: {project.timeline}</span>
                  </div>
                )}
                {project.team && (
                  <div className="flex items-center space-x-2 text-sm">
                    <Users className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Team: {project.team}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-primary/20">
            <Button variant="outline" className="flex-1 border-primary/30 hover:border-primary">
            <a
    href={project.githubUrl}
    target="_blank"
    rel="noopener noreferrer"
  >
    <Github className="w-4 h-4 mr-2" />
    Code
  </a>
</div>
              View Source Code
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;