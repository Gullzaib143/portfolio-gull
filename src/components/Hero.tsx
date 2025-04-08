
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-background to-secondary/30"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Frontend Developer
              <span className="block text-primary">Building Exceptional Web Experiences</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl">
              I craft responsive and performant web applications with modern technologies
              to deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={scrollToProjects} size="lg">
                View My Work
              </Button>
              <Button variant="outline" size="lg">
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-primary/10 rounded-full -translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 border-2 border-primary rounded-full"></div>
              <img
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&w=800&h=800&crop=faces&fit=crop"
                alt="Developer coding"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-24">
          <a
            href="#about"
            className="animate-bounce p-2 bg-background rounded-full border border-border"
            aria-label="Scroll to About Section"
          >
            <ArrowDown size={24} className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
