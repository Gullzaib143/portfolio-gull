
import ProjectCard, { ProjectProps } from "./ProjectCard";

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "E-Commerce Platform",
      description: "A modern e-commerce platform with product filtering, cart functionality, and secure checkout process.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&w=800&h=500&fit=crop",
      technologies: ["React", "Redux", "Node.js", "MongoDB"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=800&h=500&fit=crop",
      technologies: ["React", "Firebase", "Tailwind CSS"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Travel Booking Platform",
      description: "A comprehensive travel booking platform with search, filtering, and booking capabilities.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&w=800&h=500&fit=crop",
      technologies: ["Next.js", "TypeScript", "GraphQL", "Prisma"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
          <p className="text-muted-foreground max-w-3xl">
            Explore a selection of my recent work, showcasing my skills and approach to solving
            complex problems through well-crafted user interfaces and experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
