import { ArrowDown, Github, Linkedin, Code2 } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Doma
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
             Bharathi
            </span>
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl font-medium opacity-0 animate-fade-in-delay-2">
            Full-Stack Developer
            <span className="text-muted-foreground font-normal">
              {" "}
              — MERN &amp; Spring Boot
            </span>
          </p>

          {/* Tagline */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build real-time web applications — live video sessions, WebSocket
            messaging, and role-based dashboards. Computer Science undergrad at{" "}
            <span className="text-primary font-medium">RGMCET</span> (CGPA 9.47)
            with 200+ DSA problems solved in Java.
          </p>

          {/* Availability */}
          <p className="text-sm text-muted-foreground opacity-0 animate-fade-in-delay-3">
            <span className="inline-block h-2 w-2 rounded-full bg-primary mr-2 align-middle" />
            Open to Software Engineer &amp; Full-Stack Developer roles
          </p>

          {/* CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>

            <a
              href="/resume.pdf"
              download
              className="w-full sm:w-auto text-center px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              Download Resume
            </a>

            <div className="flex items-center gap-2">
              <a
                href="https://github.com/BharathiTech7"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="p-2.5 rounded-full border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/doma-bharathi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="p-2.5 rounded-full border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://leetcode.com/u/e8mbIeQGtx/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode profile"
                className="p-2.5 rounded-full border border-primary/30 text-muted-foreground hover:text-primary hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Code2 className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
