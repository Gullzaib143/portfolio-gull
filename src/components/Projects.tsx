
import ProjectCard, { ProjectProps } from "./ProjectCard";

const Projects = () => {
  const projects: ProjectProps[] = [
    {
      title: "E-Commerce Platform",
      description: "A scalable and user-friendly online store solution designed for seamless product browsing, secure checkout, and order management. It supports real-time inventory updates, discount handling, payment gateway integration, and user authentication. Built to enhance both the shopping experience for customers and sales efficiency for admins.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&w=800&h=500&fit=crop",
      technologies: ["Angular 13+", "Flexbox", "Bootstrap", "Angular Material", "Firebase", "GitLab", "NgRx", "RxJs"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Customer Relationship Management",
      description: "A comprehensive web-based CRM system built to manage and optimize customer relationships across sales, marketing, and customer support. It offers features like lead and contact management, sales pipeline tracking, campaign management, automated follow-ups, and support ticket handling — all in one place. This tool helps teams improve collaboration, drive conversions, and deliver better customer experiences.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&w=800&h=500&fit=crop",
      technologies: ["Angular 14+", "TypeScript", "Firebase", "Bootstrap", "JSSIP", "SIP.js", "Web Socket", "GitLab", "NgRx", "RxJs"],
      githubUrl: "https://github.com",
      liveUrl: "https://example.com",
    },
    {
      title: "Call Center Solution",
      description: "A robust web-based call center system enabling real-time customer communication, agent performance tracking, and call management. Features include SIP.js-based VoIP calling, live call status monitoring, call logs, agent assignment, and integration with CRM for seamless customer support. Designed to improve response time, call quality, and operational efficiency.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&w=800&h=500&fit=crop",
      technologies: ["Angular 14+", "TypeScript", "Firebase", "Bootstrap", "JSSIP", "SIP.js", "Web Socket", "GitLab", "NgRx", "RxJs"],
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
