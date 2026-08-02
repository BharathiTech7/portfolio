import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const projects = [
  {
    id: 1,
    title: "SkillSwap",
    description:
      "A real-time peer learning platform where users exchange skills through live one-to-one video sessions and chat. Built with the Jitsi Meet SDK for in-browser video, Socket.io for event-driven messaging, and JWT with bcrypt for secure sessions.",
    image: "/projects/project4.png",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    demoUrl: "https://skillswap-connect.netlify.app/",
    githubUrl: "https://github.com/BharathiTech7/skillswap-platform",
  },

  {
    id: 2,
    title: "DocSpot",
    description:
      "A role-based healthcare appointment system with separate doctor and patient dashboards. Patients book appointments and upload medical reports; doctors approve, reject, and update bookings through RESTful APIs with per-role access permissions.",
    image: "/projects/project2.png",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://docspot-frontend.vercel.app/",
    githubUrl:
      "https://github.com/BharathiTech7/DocSpot-Seamless-Appointment-Booking-for-Health",
  },

  {
    id: 3,
    title: "College Enquiry Chatbot",
    description:
      "A Flask web application built for RGMCET that answers student queries on admissions, courses, and campus facilities. Integrated the Gemini API with structured prompts to generate accurate, institution-specific responses.",
    image: "/projects/project3.png",
    tags: ["Python", "Flask", "Gemini API"],
    demoUrl: "https://college-enquiry-chatbot-qgo6.onrender.com/",
    githubUrl: "https://github.com/BharathiTech7/College-Enquiry-Chatbot",
  },

  {
    id: 4,
    title: "Essenza",
    description:
      "A MERN stack perfume e-commerce platform with dynamic product filtering, a responsive luxury-inspired interface, and smooth page transitions.",
    image: "/projects/project5.png",
    tags: ["React", "Node.js", "MongoDB"],
    demoUrl: "https://essenza-shop.vercel.app",
    githubUrl: "https://github.com/BharathiTech7/perfume-shop",
  },

  {
    id: 5,
    title: "Interactive Question Sheet",
    description:
      "A drag-and-drop DSA question tracker inspired by Codolio, with progress tracking, topic-wise organization, dark mode, and real-time UI updates.",
    image: "/projects/project7.png",
    tags: ["React", "Node.js", "JavaScript"],
    demoUrl: "https://interactive-question-sheet-six.vercel.app/",
    githubUrl: "https://github.com/BharathiTech7/interactive-question-sheet",
  },

  {
    id: 6,
    title: "Interactive Wall Calendar",
    description:
      "A high-fidelity calendar built with React and Framer Motion, featuring 3D page-turn animations, date range selection, persistent notes, and dynamic theming.",
    image: "/projects/project6.png",
    tags: ["React", "Framer Motion", "CSS"],
    demoUrl: "https://interactive-wallcalendar.netlify.app/",
    githubUrl: "https://github.com/BharathiTech7/interactive-calendar",
  },

  {
    id: 7,
    title: "CalcCraft",
    description:
      "A responsive calculator built with vanilla HTML, CSS, and JavaScript, handling the core arithmetic operations with a clean, accessible interface.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://bharathitech7.github.io/CalcCraft/",
    githubUrl: "https://github.com/BharathiTech7/CalcCraft",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover flex flex-col"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
            >
              <div className="h-48 overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* LINKS */}
                <div className="flex items-center gap-4 mt-auto pt-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open the ${project.title} live demo`}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
                  >
                    <ExternalLink size={16} />
                    Live
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View the ${project.title} source code on GitHub`}
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded px-1"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/BharathiTech7"
            target="_blank"
            rel="noopener noreferrer"
            className="cosmic-button inline-flex items-center gap-2"
          >
            View All Projects on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
