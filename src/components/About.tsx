
import { Code, Briefcase, User } from "lucide-react";

const About = () => {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", 
    "CSS/SCSS", "Tailwind CSS", "Node.js", "GraphQL",
    "Redux", "Webpack", "Jest", "Git/GitHub"
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col items-center text-center space-y-4 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">About Me</h2>
            <div className="w-20 h-1 bg-primary rounded-full"></div>
            <p className="text-muted-foreground max-w-3xl">
              I'm a passionate frontend developer with a strong focus on creating 
              intuitive and performant user interfaces. With a keen eye for design and
              a dedication to clean, maintainable code, I bridge the gap between 
              design and development to deliver exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card rounded-lg p-6 shadow-sm border flex flex-col items-center text-center space-y-4 animate-fade-in">
              <div className="p-4 bg-primary/10 rounded-full">
                <Code size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Frontend Development</h3>
              <p className="text-muted-foreground">
                I specialize in building responsive, accessible, and performant web applications
                using modern JavaScript frameworks and libraries.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border flex flex-col items-center text-center space-y-4 animate-fade-in">
              <div className="p-4 bg-primary/10 rounded-full">
                <Briefcase size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Professional Experience</h3>
              <p className="text-muted-foreground">
                With X years of industry experience, I've collaborated with diverse teams
                to deliver projects across various domains and industries.
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 shadow-sm border flex flex-col items-center text-center space-y-4 animate-fade-in">
              <div className="p-4 bg-primary/10 rounded-full">
                <User size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Continuous Learner</h3>
              <p className="text-muted-foreground">
                I'm constantly upskilling and exploring new technologies to stay at the
                forefront of frontend development best practices.
              </p>
            </div>
          </div>

          <div className="animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-secondary text-foreground rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
