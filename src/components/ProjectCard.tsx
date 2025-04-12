
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <div className="bg-card rounded-lg overflow-hidden border shadow-sm group animate-fade-in">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-56 object-cover object-top transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {project.technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-3 py-1 bg-secondary text-xs text-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        
      </div>
    </div>
  );
};

export default ProjectCard;
