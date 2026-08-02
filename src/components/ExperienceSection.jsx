import { CalendarDays, Github, Award } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const experiences = [
  {
    role: "AI Automation & Systems Intern",
    company: "Modern Mint (Startup)",
    period: "Apr 2026 – Jun 2026 · 2 months",
    summary:
      "Worked on AI-powered workflow automation and business process optimization, building automations for CRM, content generation, and internal productivity workflows.",
    points: [
      "Designed AI workflow automations using Claude Cowork, Zapier, and prompt engineering.",
      "Built AI-powered CRM and content automation workflows with Google Drive and Gmail integrations.",
      "Collaborated on workflow optimization and AI automation solutions for business operations.",
    ],
    stack: [
      "Claude Cowork",
      "Zapier",
      "Prompt Engineering",
      "AI Workflow Automation",
      "CRM Automation",
    ],
    github: null,
    certificate: "https://drive.google.com/file/d/1DKH6mbKgA1aljjnIvu0UfzQJEiHpg6Rl/view?usp=sharing",
  },
  {
    role: "Java Full Stack Developer Intern",
    company: "Infosys Springboard",
    period: "Nov 2025 – Jan 2026 · 2 months",
    summary:
      "Built SiteSurvey, an internal tool for Internet Service Providers that lets field engineers record and manage site surveys for apartments, offices, and campuses — capturing space availability, power sources, building layout, and signal strength.",
    points: [
      "Developed the application end to end in Java using Spring Boot with a MySQL database.",
      "Implemented RESTful API endpoints supporting full CRUD operations, request validation, and JSON response handling.",
      "Structured backend modules using object-oriented design and a layered controller–service–repository architecture.",
    ],
    stack: ["Java", "Spring Boot", "MySQL", "REST APIs"],
    github: "https://github.com/BharathiTech7",
    certificate: null,
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-background">
      <div className="container mx-auto max-w-6xl">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-[2px] bg-primary/40" />

          <div className="space-y-10">
            {experiences.map((item, index) => (
              <motion.div
                key={item.company + item.role}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative pl-16 w-full"
              >

                {/* Dot */}
                <div className="absolute left-[9px] top-6 w-4 h-4 rounded-full bg-primary shadow-[0_0_12px_rgba(99,102,241,0.8)]" />

                {/* Card */}
                <div className="bg-card/90 backdrop-blur border border-border rounded-xl p-6 shadow-lg">
                  <div className="text-left">

                    {/* Date */}
                    <div className="flex items-center gap-2 text-primary text-sm mb-3">
                      <CalendarDays size={16} />
                      <span>{item.period}</span>
                    </div>

                    {/* Role */}
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-1">
                      {item.role}
                    </h3>

                    {/* Company */}
                    <p className="text-sm md:text-base text-primary/80 font-medium mb-4">
                      {item.company}
                    </p>

                    {/* Summary */}
                    <p className="text-muted-foreground mb-4">{item.summary}</p>

                    {/* Points */}
                    <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                      {item.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    {/* Stack + links */}
                    <div className="mt-6 flex flex-wrap items-center gap-2">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                        >
                          {tech}
                        </span>
                      ))}

                      {(item.github || item.certificate) && (
                        <div className="ml-auto flex items-center gap-4">
                          {item.github && (
                            <a
                              href={item.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-2 py-1"
                            >
                              <Github className="h-4 w-4" />
                              View repository
                            </a>
                          )}

                          {item.certificate && (
                            <a
                              href={item.certificate}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full px-2 py-1"
                            >
                              <Award className="h-4 w-4" />
                              View certificate
                            </a>
                          )}
                        </div>
                      )}
                    </div>

                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
